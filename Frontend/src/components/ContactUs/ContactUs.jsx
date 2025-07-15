import React, { useState } from 'react';
import './ContactUs.css';
import img01 from '../../assets/53.avif';

const ContactUs = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('http://127.0.0.1:8000/contact/submit/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
        // Important for cookies/sessions
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Request failed');
    
    setSubmitStatus('success');
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    setSubmitStatus('error');
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  

  return (
    <div className="content">
      <div className="main-content">
        <img src={img01} alt="Contact Us" className="contact-img" />
        <div className="topic-1">
          Get in Touch With Us
          <div className="topic-des">
            We'd love to hear from you! Whether you have a question, suggestion, 
            or just want to connect — our team is ready to assist you.
          </div>
        </div>
      </div>

      <div className="form-1">
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="error-message">
            Oops! Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="mail" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required
          />
          
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            required
          />
          
          <div className="button-group">
            <button 
              type="submit" 
              className='B1' 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;