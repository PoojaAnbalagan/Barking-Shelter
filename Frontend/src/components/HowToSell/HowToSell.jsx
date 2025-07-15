import React from "react";
import "./HowToSell.css";
import { Link } from 'react-router-dom'


const HowToSell = () => {
    return (
        <div className="whole-content">
            <div className="title-section">

                <div className="title">
                    <div className="title-1">Pet Owners' Hub </div>
                    <div className="span">Your Gateway to Responsible Pet Rehoming</div>
                </div>

                <div className="title-content">Welcome to Barking-Shelter’s Pet Owners' Hub, a dedicated space where responsible pet owners can connect with caring adopters. Whether you're rehoming for personal reasons or managing a pet breeding service, we ensure a secure, transparent, and streamlined experience.</div>

            </div>

            <div className="title-2-container">

                <div className="title-2">"Your Dog’s Next Chapter: How to Sell Safely & Responsibly"</div>

                <div className="title-2-content">

                    <div className="sub-title">Step 1:<br/> Register & Verify Your Identity
                    <div className="sub-title-content-1">
                    •	Create a verified seller account by submitting basic personal and pet ownership details.
                   <br/><br/>
                   <div className="link">
                    <Link to= "/PetDogForm">Click here to fill the application</Link>
                   </div>
                   
                    
</div>
</div>

                    
                    <div className="sub-title">Step 2:<br/> Create a High-Quality Listing
                    <div className="sub-title-content-1">
                    •	Upload HD images and detailed descriptions (breed, gender, age, temperament, vaccinations).<br/><br/>
                    •   Add health records, pedigree certifications, and dietary preferences to boost adoption rates.
</div>
                    </div>

                    <div className="sub-title">Step 3: <br/>Choose a Commission Package
                    <div className="sub-title-content-1">
                   •	Select from flexible commission plans based on your needs (see next section).<br/><br/>
                    •	Enjoy access to analytics dashboards, featured listings, and extended visibility options.
</div>
                    </div>

                    <div className="sub-title">Step 4:<br/> Review & Moderation
                    <div className="sub-title-content-1">
                   •	Our team conducts a 24-hour moderation check to ensure listings meet community guidelines.<br/><br/>
                    •	Listings go live upon approval with visible seller ratings.
</div></div>

                    <div className="sub-title">Step 5: <br/>Connect with Verified Adopters
                    <div className="sub-title-content-1">
                   •	Use our secure in-platform messaging system to chat with potential adopters.<br/><br/>
                    •	Schedule in-person visits, video calls, or third-party inspections.
</div></div>

                    <div className="sub-title">Step 6: <br/>Finalize the Rehoming Process
                    <div className="sub-title-content-1">
                   •	Agree on terms and logistics (delivery/pickup).<br/><br/>
                 •	Once the handover is confirmed, the transaction is marked complete and commission is deducted automatically.
</div></div>
              

   </div>
            </div>




        </div>
    )
}

export default HowToSell;