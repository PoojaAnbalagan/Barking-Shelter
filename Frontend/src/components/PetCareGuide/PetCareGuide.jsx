import React from 'react'
import "./PetCareGuide.css"

import img1 from "../../assets/35.png"
import img2 from "../../assets/25.png"
import img3 from "../../assets/26.png"
import img4 from "../../assets/28.png"
import img5 from "../../assets/32.png"
import img6 from "../../assets/33.png"
import img7 from "../../assets/34.png"
import img8 from "../../assets/36.png"
import img9 from "../../assets/37.png"

const PetCareGuide = () => {
    return (
        <div className='petcareguide'>

            <div className="care-content-1">

                <div className="care-title">
                    Empowering<br /> Responsible<br />  Pet Ownership
                </div>

                <div className="pet-care-img1">
                    <img src={img1} />
                </div>
            </div>

            <div className="care-content-2">

                <div className="card-1">

                    <div className="card-1-title">
                        Before You Adopt: Make an Informed Commitment
                        <br />

                    </div>

                    <div className="card-1-img">
                        <img src={img2} />

                    </div>
                    <div className="card-1-content">
                        Adopting a pet is a life-altering decision that requires emotional, financial, and physical preparedness.
                        <br />
                        <br />
                        ✔ Evaluate your lifestyle: Can you consistently meet the daily needs of a pet — including feeding, exercise, socialization, and medical care?
                        <br />
                        <br />
                        ✔ Assess your environment: Ensure your home is secure, spacious enough, and conducive to animal safety and comfort.
                        <br />
                        <br />
                        ✔ Research thoroughly: Understand the temperament, activity levels, and care requirements of the breed you're considering. Compatibility is key.
                        <br />
                        <br />
                    </div>
                </div>


                <div className="card-2">
                    <div className="card-2-title">
                        Transitioning Home: A Gentle Welcome
                    </div>

                    <div className="card-2-img">
                        <img src={img3} />

                    </div>

                    <div className="card-2-content">
                        The initial days post-adoption are crucial for building trust and reducing anxiety.
                        <br />
                        <br />
                        •	Designate a calm, cozy space where your pet can decompress.
                        <br />
                        <br />
                        •	Introduce gradually — new sights, sounds, and people should be experienced at the dog’s pace.
                        <br />
                        <br />
                        •	Establish a routine for meals, walks, and rest. Predictability fosters security.
                        <br />
                        <br />
                        💡 Pro Tip: Patience, not pressure, builds the strongest bonds.
                        <br />

                    </div>
                </div>


            </div>


            <div className="care-content-3">

                <div className="card-3">
                    <div className="card-3-title">
                        Daily Canine Care: Foundations of Well-being
                        <br />
                    </div>

                    <div className="card-3-img">
                        <img src={img4} />

                    </div>
                    <div className="card-3-content">

                        <b>Nutrition:</b>
                        <br />
                        <br />
                        •	Feed age-appropriate, vet-recommended food.<br />
                        •	Puppies: 3–4 meals/day | Adults: 2 meals/day<br />
                        •	Ensure constant access to fresh, clean water.<br />

                        <br />
                        <b>Grooming & Hygiene:</b><br /><br />
                        •	Brush according to coat type (daily for long-haired breeds).<br />
                        •	Bathe every 4–6 weeks using dog-specific shampoo.<br />
                        •	Maintain dental hygiene, ear cleanliness, and nail trimming.<br /><br />
                        <b>Physical Activity:</b><br /><br />
                        •	Dogs require 30–90 minutes of daily exercise.<br />
                        •	Engage with stimulating games to prevent boredom-related behavior.<br />


                    </div>
                </div>

                <div className="card-4">
                    <div className="card-4-title">
                        Health & Preventive Wellness
                        <br />
                        <br />
                    </div>

                    <div className="card-4-img">
                        <img src={img5} />

                    </div>

                    <div className="card-4-content">
                        <br />
                        <b>Vaccination Protocol:</b>
                        <br /><br />
                        •	Core immunizations: Rabies, DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)<br />
                        •	Keep booster shots updated as advised by your veterinarian.<br /><br />
                        <b>Parasite Control:</b><br /><br />
                        •	Monthly flea/tick and heartworm prevention<br />
                        •	Deworm every 3–6 months<br /><br />
                        <b>Recognize Red Flags:</b><br /><br />
                        •	Sudden lethargy, vomiting, coughing, or drastic behavioral changes require immediate attention.<br />


                    </div>
                </div>
            </div>
            {/* -------------------------------------------------------------------  */}
            <div className="care-content-4">

                <div className="card-5">

                    <div className="card-5-title">
                        Behavioral Training & Socialization
                        <br />

                    </div>

                    <div className="card-5-img">
                        <img src={img6} />

                    </div>
                    <div className="card-5-content">
                        <b>Training is not a luxury — it's essential for safety and harmony.</b>
                        <br />
                        <br />

                        •	Begin basic command training (sit, stay, heel) from day one.
                        <br />
                        <br />
                        •	Use positive reinforcement: reward good behavior with treats and praise.
                        <br />
                        <br />
                        •	Consistency and clarity are key to success.
                        <br />
                        <br />
                        <b>Addressing Behavioral Challenges:</b>
                        <br />
                        <br />
                        •	Separation anxiety, aggression, or excessive barking often stem from unmet needs.
                        <br />
                        <br />
                        •	Consult a certified trainer or animal behaviorist when necessary.

                        <br />

                    </div>
                </div>


                <div className="card-6">
                    <div className="card-6-title">
                        Optimal Nutrition & Dietary Guidelines
                    </div>

                    <div className="card-6-img">
                        <img src={img7} />

                    </div>

                    <div className="card-6-content">
                        Feeding your dog the right diet ensures long-term health and vitality.
                        <br />
                        <br />
                        <b>Choose High-Quality Food:</b> <br /> <br />
                        •	Look for meat as the primary ingredient. <br />
                        •	Avoid fillers, artificial preservatives, and by-products. <br /> <br />
                        <b>Toxic Foods to Avoid:</b> <br /> <br />
                        •	Chocolate, grapes, onions, garlic, alcohol, and foods containing xylitol. <br /> <br />
                        <b>Healthy Treats:</b> <br /> <br />
                        •	Limit treats to 10% of daily intake. <br />
                        •	Try carrots, apple slices (seedless), or vet-formulated biscuits. <br />


                    </div>
                </div>


            </div>


            <div className="care-content-5">

                <div className="card-7">
                    <div className="card-7-title">
                        Emergency Preparedness & First Aid
                        <br />
                    </div>

                    <div className="card-7-img">
                        <img src={img8} />

                    </div>
                    
                    <div className="card-7-content">

                        <b> Must-Have Emergency Kit:  </b>     <br />       <br />
                        •	Gauze, antiseptic spray, bandages, tweezers, digital thermometer, and vet contact list.       <br />   <br />
                        <b>When to Seek Urgent Help:  </b>     <br />       <br />
                        •	Difficulty breathing       <br />
                        •	Seizures       <br />
                        •	Uncontrolled bleeding       <br />
                        •	Ingestion of toxic substances       <br />       <br />
                        <b>Keep Your Vet's Number Saved & Visible.</b>


                    </div>
                </div>

                <div className="card-8">
                    <div className="card-8-title">
                        Caring for Senior Dogs: Aging with Grace
                        <br />
                        <br />
                    </div>

                    <div className="card-8-img">
                        <img src={img9} />

                    </div>

                    <div className="card-8-content">

                        <br /> <br />
                        <b>As dogs age, their needs evolve — and so should your care.</b> <br /> <br />
                        •   Dietary adjustments for weight and joint health <br />
                        •   Routine vet visits every 6 months<br />
                        • Support mobility with ramps or orthopedic bedding <br />
                        •   Monitor for signs of arthritis, vision/hearing loss, or cognitive decline <br /> <br />




                    </div>
                </div>



            </div>
        </div>
    )
}

export default PetCareGuide;