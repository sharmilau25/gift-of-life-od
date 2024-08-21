import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const OrganRequestForm = () => {
  const [formData, setFormData] = useState({
    ORGAN_TYPE: '',
    QUANTITY: '',
    BLOOD_GROUPn: '',
    REQUEST_TYPE: '',
    ADD_RESSn: '',
    ZIP_CODE: '',
    phoneN: ''
  });
  const [userId, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    // Assuming user session is stored in localStorage and user email is available
    const user = localStorage.getItem('userEmail');
    
    // Fetch user registration ID based on email
    axios.post('http://localhost:3000/api/getUserByEmail', { email: user })
      .then(response => {
        setUserId(response.data.REGISTRATION_ID); // Assuming backend returns the registration ID
      })
      .catch(error => console.error('Error fetching user data', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      alert('You must agree to the terms and conditions');
      return;
    }

    // Submit form data to the backend
    axios.post('http://localhost:3000/api/submitOrganRequest', {
      ...formData,
      REGISTRATION_ID: userId
    })
    .then(response => {
      setSuccessMessage('Your request has been added successfully.');
      setFormData({
        ORGAN_TYPE: '',
        QUANTITY: '',
        BLOOD_GROUPn: '',
        REQUEST_TYPE: '',
        ADD_RESSn: '',
        ZIP_CODE: '',
        phoneN: ''
      });
      setTermsAccepted(false);
    })
    .catch(error => console.error('Error submitting request', error));
  };

  return (
    <div className="wrapper">
      <div className="title">Request Now</div>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form">
          <div className="inputfield">
            <label htmlFor="request-select">Organ Type</label>
            <div className="custom_select">
              <select name="ORGAN_TYPE" id="request-select" value={formData.ORGAN_TYPE} onChange={handleInputChange} required>
                <option value="">Select</option>
                <option value="Heart">Heart</option>
                <option value="Kidneys">Kidneys</option>
                <option value="Liver">Liver</option>
                <option value="Lungs">Lungs</option>
                <option value="Pancreas">Pancreas</option>
                <option value="Intestines">Intestines</option>
                <option value="Eye">Eye</option>
                <option value="Heart valves">Heart valves</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label htmlFor="quantity-select">Select Quantity</label>
            <div className="custom_select">
              <select name="QUANTITY" id="quantity-select" value={formData.QUANTITY} onChange={handleInputChange} required>
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label htmlFor="blood-select">Blood Group</label>
            <div className="custom_select">
              <select name="BLOOD_GROUPn" id="blood-select" value={formData.BLOOD_GROUPn} onChange={handleInputChange} required>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label htmlFor="situation-select">Request Type</label>
            <div className="custom_select">
              <select name="REQUEST_TYPE" id="situation-select" value={formData.REQUEST_TYPE} onChange={handleInputChange} required>
                <option value="">Select</option>
                <option value="Emergency">Emergency</option>
                <option value="Not Emergency">Not Emergency</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label htmlFor="ADD_RESSn">Address</label>
            <input type="text" className="input" id="ADD_RESSn" name="ADD_RESSn" value={formData.ADD_RESSn} onChange={handleInputChange} required />
          </div>
          <div className="inputfield">
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" className="input" id="zipcode" name="ZIP_CODE" value={formData.ZIP_CODE} onChange={handleInputChange} required />
          </div>
          <div className="inputfield">
            <label htmlFor="phoneN">Phone Number</label>
            <input type="text" className="input" id="phoneN" name="phoneN" value={formData.phoneN} onChange={handleInputChange} required />
          </div>
          <div className="inputfield terms">
            <label htmlFor="checkbox" className="check">
              <input type="checkbox" id="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} required />
              <span className="checkmark"></span>
            </label>
            <p>Agreed to terms and conditions</p>
          </div>
          <div className="inputfield">
            <input type="submit" name="submit" value="Submit" className="btn" />
          </div>
          <p className="alter">Go BACK TO HOME? <Link className="home" to="/">Home</Link></p>
        </div>
      </form>
    </div>
  );
};

export default OrganRequestForm;
