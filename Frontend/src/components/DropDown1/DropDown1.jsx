import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown1.css'; // We'll create this next

function DropDown1({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown"
           onMouseEnter={() => setIsOpen(true)}
           onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="dropdown-toggle" 
        onMouseEnter={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title} 
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} className='dropdown-item'>
              <Link 
                to={item.link} 
                className="dropdown-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown1;