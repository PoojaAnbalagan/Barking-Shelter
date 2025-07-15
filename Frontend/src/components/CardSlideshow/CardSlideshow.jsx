import { useState, useEffect, useRef } from 'react';
import './CardSlideshow.css'; // We'll create this CSS file

const CardSlideshow = ({ cards, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [transitionDirection, setTransitionDirection] = useState('next');
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Handle auto-play
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentIndex]);

  // Handle next card
  const handleNext = () => {
    setTransitionDirection('next');
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous card
  const handlePrev = () => {
    setTransitionDirection('prev');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Go to specific card
  const goToCard = (index) => {
    setTransitionDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  // Touch event handlers for swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) handleNext(); // Swipe left
    if (difference < -50) handlePrev(); // Swipe right
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Calculate classes for animation
  const getCardClasses = (index) => {
    let classes = 'card';
    
    if (index === currentIndex) classes += ' active';
    if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
      classes += ' prev';
    }
    if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
      classes += ' next';
    }
    
    return classes;
  };

  return (
    <div 
      className="slideshow-container"
      ref={containerRef}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slideshow-track">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={getCardClasses(index)}
            style={{
              transition: `transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.7s ease`,
            }}
          >
            <div className="card-content">
              {card.image && (
                <div className="card-image">
                  <img src={card.image} alt={card.title} />
                </div>
              )}
              <div className="card-body">
                <div className="card-title">{card.title}</div>
                {card.description && <p>{card.description}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="navigation-dots">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToCard(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        className="nav-arrow prev-arrow" 
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button 
        className="nav-arrow next-arrow" 
        onClick={handleNext}
        aria-label="Next slide"
      >
        &gt;
      </button>

      
    </div>
  );
};


export default CardSlideshow;