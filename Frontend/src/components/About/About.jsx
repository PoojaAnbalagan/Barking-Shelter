import React from 'react'
import "./About.css"
import img1 from "../../assets/16.jpeg"
import img2 from "../../assets/18.webp"
import img3 from "../../assets/12.webp"
import img4 from "../../assets/16.jpg"

const About = () => {
  return (
    <div className='about-row-1'>
      <div id="card1">
      <div className="about">
     <div className="about-title">
       About Barking Shelter
       </div>

       <div className="about-content-1">

       <div className="about-image-1">
        <img src={img1} alt="dog" width="400px" height="500px"/>
       </div>

      <div className="overlay-1">
       
      <div className="about-container-1">
       Welcome to Barking-Shelter, a compassionate initiative dedicated to bridging the gap between homeless canines and responsible adopters. Our mission is to facilitate ethical and seamless pet adoptions, ensuring that every dog finds a loving and nurturing forever home.
       </div>
       </div>

       </div>
       </div>
       </div>

       <div id="card2">
      <div className="about">
       <div className="about-title">
       Who We Are
       </div>

       <div className="about-content-1">

       <div className="about-image-1">
        <img src={img2} alt="dog" width="400px" height="500px"/>
       </div>

       <div className="overlay-1">
       <div className="about-container-1">
       At Barking-Shelter, we are driven by an unwavering commitment to animal welfare and technological innovation. Our platform serves as a conduit between prospective pet owners and reputable sellers or shelters, fostering a community built on trust, transparency, and a shared love for dogs.
       </div>
        </div>
       </div>
       </div>
       </div>
       
       
       <div id="card3">
      
       <div className="about">
       <div className="about-title">
       What We Offer
       </div>
       <div className="about-content-1">
       <div className="about-image-1">
        <img src={img3} alt="dog" width="400px" height="500px"/>
       </div>

       <div className="overlay-2">
       <div className="about-container-1">
       For Adopters: 
       <br/>Explore an extensive catalog of adoptable dogs, complete with detailed profiles and verified background information, to help you make an informed decision.
       <br/>
       <br/>
       For Sellers & Shelters: 
      <br/>Effortlessly list pet dogs, connect with genuine adopters, and ensure that each pet transitions into a safe and caring environment.

       </div>
       </div>
    </div>
    </div>
    </div>

      <div id="card4">
        <div className="about">
       <div className="about-title">
       Why Choose Us?
       </div>

      <div className="about-content-1">
      <div className="about-image-1">
        <img src={img4} alt="dog" width="400px" height="500px"/>
       </div>
       <div className="overlay-3">
       <div className="about-container-1">
       Seamless Experience: 
       <br/>
       An intuitive and efficient platform designed to simplify the adoption process.
       <br/>
       <br/>
Verified Listings: 
<br/>
Rigorous verification measures to uphold ethical adoption standards.
<br/>
<br/>
Compassion-Driven: 
<br/>
Our foremost priority is the welfare of every dog, advocating for responsible pet ownership and lifelong companionship.
<br/>
<br/>

Join us in our mission to provide these loyal companions with the love, security, and care they deserve. Begin your adoption journey today!
<br/>

      </div>
      </div>
      </div>
     </div>
     </div>
       






        
        </div>
 
  )
}

export default About