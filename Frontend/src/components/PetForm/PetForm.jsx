import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import './PetForm.css';

const PetForm = () => {
    const [selectedPack, setSelectedPack] = useState("Basic");

  const  handlePackChange = (event) => {
    setSelectedPack(event.target.value)
  }

   const formRef = useRef();
  
  const handleReset = () => {
    formRef.current.reset();
  };

  return (


    <div className="main-form-01">

      <div className="user-application">User Application</div>

      <form className="application-form" ref={formRef}>
        <div className="topic1">Pet Details</div>
        <br />

        <div className="input-group">

          <label htmlFor="petName" className='top1'>
            Pet's Name:</label>
          <input type="text" id="petName" />





          <label htmlFor="petBreed" className='top1'>Breed:</label>
          <input type="text" id="petBreed" />



          <label htmlFor="gender" className='top1'>Gender:</label>
          <input type="text" id="gender" />


          <label htmlFor="vacdetails" className='top1'>Vaccination Details:</label>
          <input type="textarea" id="vacdetails" />


          <label htmlFor="health" className='top1'>Health Concerns / Allergies:</label>
          <input type="textarea" id="health" />



          <label htmlFor="photos" className='top1'>Photos of Pet:</label>
          <input type="text" id="photos" />


          <label htmlFor="price" className='top1'>Price of Pet:</label>
          <input type="text" id="price" />

          {/* ----------------------------------------------------- */}

          <br />
          <div className="topic1">Owner Details</div>
          <br />

          <label htmlFor="ownername" className='top1'>Full Name:</label>
          <input type="text" id="ownername" />


          <label htmlFor="contactno" className='top1'>Contact Number:</label>
          <input type="text" id="contactno" />


          <label htmlFor="email" className='top1'>Email:</label>
          <input type="email" id="email" />


          <label htmlFor="contactno" className='top1'>Contact Number:</label>
          <input type="text" id="contactno" />


          <label htmlFor="address" className='top1'>Address:</label>
          <input type="textarea" id="address" />


          <label htmlFor="havepets" className='top1'>Do you currently own any pets? (Yes/No)</label>
          <input type="text" id="havepets" />


          <label htmlFor="pets" className='top1'>If yes, please specify:</label>
          <input type="text" id="pets" />


          <label htmlFor="havepets" className='top1'>Have you owned pets before? (Yes/No)</label>
          <input type="text" id="havepets" />


          <label htmlFor="havepets" className='top1'>Do you currently own any pets? (Yes/No)</label>
          <input type="text" id="havepets" />

          {/* ----------------------------------------------------- */}
          <br />
          <div className="topic1"> Living Situation</div>
          <br />

          <label htmlFor="residence" className='top1'>Type of Residence:</label>

          <div className="option">
            <input type="radio" value="option1" /> House
            <input type="radio" value="option2" /> Apartment
            <input type="radio" value="option3" /> Other
          </div>

          <label htmlFor="house" className='top1'>Do you own or rent your home?</label>
          <div className="option">
            <input type="radio" value="option1" /> Own
            <input type="radio" value="option2" /> Rent
          </div>

          <label htmlFor="petinhouse" className='top1'>If renting, do you have landlord’s permission to keep pets?</label>
          <div className="option">
            <input type="radio" value="option1" /> Yes
            <input type="radio" value="option2" /> No
          </div>

          <label htmlFor="fenceinhouse" className='top1'>Do you have a fenced yard? </label>
          <div className="option">
            <input type="radio" value="option1" /> Yes
            <input type="radio" value="option2" /> No
          </div>

          <label htmlFor="people" className='top1'>Number of people in the household:</label>
          <input type="text" id="people" />


          <label htmlFor="children" className='top1'>Are there any children in the home? </label>
          <div className="option">
            <input type="radio" value="option1" /> Yes
            </div>
            <div className="option">
            <input type="radio" value="option2" /> No
          </div>

          <br />
          <div className="topic1">Pet Care & Responsibility</div>
          <br />

          <label htmlFor="" className='top1'>How many hours per day will the pet be left alone?</label>
          <input type="text" />


          <label htmlFor="" className='top1'>Who will be responsible for feeding, training, and daily care of the pet?</label>
          <input type="text" />


          <label htmlFor="" className='top1'>Do you have a preferred veterinarian? If yes, please provide details.</label>
          <input type="textarea" />


          <label htmlFor="" className='top1'>What arrangements will you make for the pet when you travel or are away from home?</label>
          <input type="textarea" />


          <label htmlFor="" className='top1'>Are you financially prepared to cover the costs of food, grooming, and medical expenses?</label>
          <input type="text" />


          <br />
          <div className="topic1"> Select the Commission Package</div>
          <br />

           <select value={selectedPack} onChange={handlePackChange}>
         
            <option value="basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Enterprise">Enterprise</option>
       
          </select>

        </div>
        <br/>
        <hr/>
      
      <div className="buttons">
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="submit">Submit</button>
      </div>


      </form>
    </div>


  )
}

export default PetForm