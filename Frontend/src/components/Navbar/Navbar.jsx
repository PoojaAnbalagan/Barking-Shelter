import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/newlogo.png'
import DropDown1 from '../DropDown1/DropDown1'
import DropDown2 from '../DropDown2/DropDown2'
import logout from '../../assets/logout1.png'

const Navbar = () => {
  const servicesItems = [
    { label: 'Pet Dogs', link: '/PetDogForm' },
    { label: 'Pet Care Guide', link: '/PetCareGuide' },
    { label: 'Veterinary Directory', link: '/Vet' }];

  const petOwners = [
    { label: 'How to Sell', link: '/HowToSell' },
    { label: 'Commission Packages', link: '/CommissionPack' }];

  return (
    <div className='navbar'>
      <img src={logo} className='logo' alt="" />
      <div className="slogan">Adopt Happiness,
        One Tail at a time.</div>

      <ul className="nav-menu">
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About Us</Link></li>

        <li>
          <DropDown1 title="Services" className="DropTitle" items={servicesItems} />
        </li>

        <li>
          <DropDown2 title="Pet Owners" className="DropTitle" items={petOwners} />
        </li>
        <div className="contact">
          <li><Link to="/contactus" >Contact Us</Link></li>
        </div>
      </ul>
      {/* <div className="nav-connect"  onClick={onSignUpClick}>Sign Up</div>
        <div className="nav-register" onClick={onLogInClick}>Log In</div> */}

      <div class="navigation1">

        <a class="button1" href="/logout">
        <div className="logout-img">
          <img src={logout} alt="logout" />
          </div>

          <div class="logout">Log Out</div>

        </a>

      </div>

      {/* <div className="log-out-content">
        <Link to="/logout" className="log-out-link">
        <div className="log-out-img">
          <img src={logout} alt="logout" />
        </div>
        <div className="log-out"> Log Out
        </div>
        </Link>
      </div>
*/}
    </div> 
  )
}

export default Navbar