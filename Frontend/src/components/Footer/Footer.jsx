import './Footer.css';
import logo from '../../assets/newlogo.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
           <p>
    A no-kill sanctuary rescuing abandoned and abused dogs since 2015. 
    We provide medical care, love, and second chances until each tail 
    finds its forever home.
  </p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: team@barkingdshelter.com</p>
          <p>Phone: (+94) 77123567</p>
        </div>
        
      
      <div className="footer-bottom">
        <div className="logo-image">
        <img src={logo} alt="" />
        </div>
        <p>&copy; {new Date().getFullYear()} Barking Shelter. All rights reserved.</p>
        
          
        
        
      </div>
      </div>
    </footer>
   
  );
};

export default Footer;