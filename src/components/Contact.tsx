import React, { FormEvent, useState } from 'react';
import '../css/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="container py-5">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 contact-info">
            <div className="info-box">
              <h3>Get in Touch</h3>
              <div className="contact-details">
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>123 Dental Street, Smile Town, Tooth Country</p>
                </div>
                <div className="detail-item">
                  <i className="fas fa-phone"></i>
                  <p>(123) 456-7890</p>
                </div>
                <div className="detail-item">
                  <i className="fas fa-envelope"></i>
                  <p>info@denta.com</p>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://img.freepik.com/premium-vector/3d-top-view-map-with-destination-location-point-aerial-clean-top-view-day-time-city-map-with-street-river-blank-urban-map-gps-map-navigator-concept_34645-1098.jpg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location-map"
              />
            </div>
          </div>

          <div className="col-md-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control" 
                  rows={5} 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;