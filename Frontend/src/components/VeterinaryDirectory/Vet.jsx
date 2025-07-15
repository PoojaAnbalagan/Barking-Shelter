
import "./Vet.css"
import videoFile from "../../assets/pet-dog-2.mp4"
import  { useRef, useEffect } from 'react';
import CardSlideshow from '../CardSlideshow/CardSlideshow';

const Vet = () => {
  // Sample data for the slideshow cards
  const cardsData = [
    {
      title: "What You’ll Find",
      description:`•	Licensed Veterinary Clinics - Offering preventive, diagnostic, and surgical care with the highest standards of excellence.
•	Specialized Practitioners -Skilled in areas such as cardiology, dermatology, orthopedics, and exotic animal medicine.
•	24/7 Emergency Services -  Immediate assistance when every second counts.
•	Mobile Veterinary Units - Convenient home visits for pets requiring stress-free consultations.
•	Rehabilitation & Therapy Centers  -Supporting recovery through physiotherapy, behavioral care, and post-surgical treatment.`,
      
    
    },
    {
      title: "Exclusive for First-Time Adopters",
      description: `We are pleased to offer free veterinary care for new pet parents adopting their first pet through our platform. 
        This includes:
        • Initial health check-up
        • Core vaccinations
        • General wellness consultation
        Terms and conditions apply. Available at participating clinics listed in this directory.`
    },
    {
      title: "Why Use Our Directory",
      description: `•	Verified Listings – All professionals and facilities are pre-screened and trusted.
      •	Location-Based Search – Easily find nearby clinics and services.
      •	Direct Booking – Contact and schedule appointments directly through our platform.
      •	Always Updated – Information you can rely on, maintained with care.
      Give your new pet the healthy start they deserve. Browse the directory and access expert veterinary care—some of it absolutely free.`
      
    }
  ];


  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    // Preload video for smoother playback
    video.load();
    
    // Handle the loop transition
    const handleTimeUpdate = () => {
      // Add a small buffer (0.5s) before the end to restart
      if (video.currentTime > video.duration - 0.5) {
        video.currentTime = 0;
        video.play().catch(e => console.log('Autoplay prevented:', e));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);


  return (
    <div className='vet'>
      <div className="vet-1">
      <div className="vet-head">

      <div className="video-background">
      <video ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
          <source src={videoFile} type="video/mp4" />

</video>

      <div className="vet-sub-title"> Trusted Care for Every Paw</div>
      </div>
      </div>
      <div className="vet-sub-content">Welcome to
         our curated directory of accredited veterinary services—dedicated to ensuring the health and happiness of your adopted companion
      </div>
      </div>

      <CardSlideshow cards={cardsData} autoPlay={true} />
       
    </div>
  )
}

export default Vet