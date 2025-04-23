import React, { useState } from 'react';
import axios from 'axios';
import '../css/Appointment.css';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    appointmentName: '',
    appointmentEmail: '',
    appointmentContact: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentMessage: ''
  });

  const [formErrors, setFormErrors] = useState({
    appointmentName: '',
    appointmentEmail: '',
    appointmentContact: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentMessage: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' }); // Clear errors on change
  };

  const validateForm = () => {
    const errors: any = {};
    if (!formData.appointmentName) errors.appointmentName = 'Name is required';
    if (!formData.appointmentEmail) {
      errors.appointmentEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.appointmentEmail)) {
      errors.appointmentEmail = 'Email address is invalid';
    }
    if (!formData.appointmentContact) {
      errors.appointmentContact = 'Contact number is required';
    } else if (formData.appointmentContact.length !== 10) {
      errors.appointmentContact = 'Contact number must be 10 digits';
    }
    if (!formData.appointmentDate) errors.appointmentDate = 'Date is required';
    if (!formData.appointmentTime) errors.appointmentTime = 'Time is required';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: '34b09fb1-af2b-4243-8cd0-357dad9a5daa',
        ...formData,
        recipient: 'senanisenarathna78@gmail.com' //  the recipient email here
      });
      if (response.data.success) {
        setFormStatus('Success! Your appointment has been booked.');
        setFormData({
          appointmentName: '',
          appointmentEmail: '',
          appointmentContact: '',
          appointmentDate: '',
          appointmentTime: '',
          appointmentMessage: ''
        });
      } else {
        setFormStatus('Error! Please try again.');
      }
    } catch (error) {
      setFormStatus('Error! Please try again.');
    }
  };

  return (
    <div id="appointment" className="appointment-section">
      <div className="container">
        <h2 className="section-title">Make an Appointment</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="appointment-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="appointmentName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="appointmentName"
                    name="appointmentName"
                    placeholder="Enter your name"
                    value={formData.appointmentName}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.appointmentName && <div className="error-message">{formErrors.appointmentName}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="appointmentEmail"
                    name="appointmentEmail"
                    placeholder="Enter your email address"
                    value={formData.appointmentEmail}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.appointmentEmail && <div className="error-message">{formErrors.appointmentEmail}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentContact">Contact Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="appointmentContact"
                    name="appointmentContact"
                    value={formData.appointmentContact}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      setFormData({ ...formData, appointmentContact: value });
                      setFormErrors({ ...formErrors, appointmentContact: '' }); // Clear errors on change
                    }}
                    pattern="[0-9]{10}"
                    placeholder="Enter 10 digit phone number"
                    maxLength={10}
                    required
                  />
                  {formErrors.appointmentContact && <div className="error-message">{formErrors.appointmentContact}</div>}
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="appointmentDate">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.appointmentDate && <div className="error-message">{formErrors.appointmentDate}</div>}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="appointmentTime">Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="appointmentTime"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.appointmentTime && <div className="error-message">{formErrors.appointmentTime}</div>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentMessage">Message</label>
                  <textarea
                    className="form-control"
                    id="appointmentMessage"
                    name="appointmentMessage"
                    rows={5}
                    value={formData.appointmentMessage}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.appointmentMessage && <div className="error-message">{formErrors.appointmentMessage}</div>}
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Book Appointment</button>
              </form>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;