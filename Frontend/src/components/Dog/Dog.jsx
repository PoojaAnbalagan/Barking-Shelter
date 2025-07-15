import React, { useState } from "react";
import "./Dog.css";

function Dog({ dog }) {  // Removed unused onDelete prop
    const [showOwnerInfo, setShowOwnerInfo] = useState(false);

    const toggleOwnerInfo = () => {
        setShowOwnerInfo(!showOwnerInfo);
    }

    return (
        <div className="dog-card">
            {dog.image && (
                <div className="dog-image">
                    <img 
                        src={dog.image} 
                        alt={dog.dogName} 
                        onError={(e) => {
                            e.target.src = '/default-dog.png';
                            e.target.onerror = null; // Prevent infinite loop if fallback fails
                        }}
                    />
                </div>
            )}
            
            <div className="dog-info">
                <h3>{dog.dogName}</h3>
                <p><strong>ID:</strong> {dog.dogID}</p>
                <p><strong>Age:</strong> {dog.age} years</p>
                <p><strong>Breed:</strong> {dog.breed}</p>
                <p><strong>Type:</strong> {dog.dogType === "withOwner" ? "With Owner" : "Stray Dog"}</p>
                <p><strong>Description:</strong> {dog.description}</p>
                
                <button onClick={toggleOwnerInfo} className="view-more-btn">
                    {showOwnerInfo ? 'View Less' : 'View More'}
                </button>

                {showOwnerInfo && (
                    <div className="owner-info">
                        <h4>Owner Information</h4>  {/* Changed from h3 to h4 for better hierarchy */}
                        {dog.dogType === 'withOwner' ? (
                            <>
                                <p><strong>Name:</strong> {dog.ownerName}</p>
                                <p><strong>Phone:</strong> {dog.ownerPhone}</p>
                                <p><strong>Email:</strong> {dog.ownerEmail}</p>
                            </>
                        ) : (
                            <>
                               
                                <p>Contact: team@barkingdshelter.com</p>
                                 <div className="free-banner">Free</div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dog;