import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles={
    header:{
        backgroundColor:'#fcc358'
    },
    btnc:{
        background:'#fcc358'
    },
    // btnc:hover{
    // background: '#ffbb00'
    // }
};
const OrganDonationForm = ({ userEmail, requestId }) => {
  const [userData, setUserData] = useState({ age: 0, registrationId: '' });
  const [quantity, setQuantity] = useState(0);
  const [formData, setFormData] = useState({
    feet: '',
    inches: '',
    weight: '',
    pregnant: '',
    menstruation: '',
    day: '',
    month: '',
    year: '',
    accidentType: '',
    accidentDesc: '',
    diseaseType: '',
    diseaseDesc: '',
    operationType: '',
    operationDesc: '',
  });

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`/api/user/${userEmail}`);
      setUserData({
        registrationId: res.data.REGISTRATION_ID,
        age: res.data.AGE,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRequestData = async () => {
    try {
      const res = await axios.get(`/api/request/${requestId}`);
      setQuantity(res.data.QUANTITY);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchRequestData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { weight, feet, inches, year, month, pregnant, menstruation, accidentType, diseaseType, operationType } = formData;
    
    const heightInMeters = ((parseInt(feet) * 12 + parseInt(inches)) / 39.3701).toFixed(2);
    const bmi = weight / (heightInMeters * heightInMeters);
    const curDur = (new Date().getFullYear() - year) * 12 + (new Date().getMonth() + 1 - month);

    // Form validation checks
    if (pregnant === 'yes') {
      alert("You can't donate Organ during pregnancy period.");
      return;
    }
    if (menstruation === 'yes') {
      alert("You can't donate Organ during menstruation period.");
      return;
    }
    if (userData.age < 18) {
      alert("You must be at least 18 years Old.");
      return;
    }
    if (weight < 50) {
      alert("You must weigh at least 50kgs.");
      return;
    }
    if (curDur < 5) {
      alert("Donation Gap must be at least 5 months or higher.");
      return;
    }
    if (accidentType === 'Critical' || diseaseType === 'Chronic' || operationType === 'Major') {
      alert("You can't donate organ.");
      return;
    }

    // API call to save the donation data
    try {
      await axios.post('/api/donor', {
        registrationId: userData.registrationId,
        weight,
        bmi,
        operationType,
        operationDesc: formData.operationDesc,
        diseaseType,
        diseaseDesc: formData.diseaseDesc,
        accidentType,
        accidentDesc: formData.accidentDesc,
      });

      if (quantity - 1 === 0) {
        await axios.delete(`/api/request/${requestId}`);
      } else {
        await axios.put(`/api/request/${requestId}`, { quantity: quantity - 1 });
      }

      alert("Organ Donation Apply Successful");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container-fluid">
      <section className="row jumbotron justify-content-center">
        <section className="col-l4 col-sm-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label">Height</label>
              <input type="text" className="form-control" placeholder="Feet" name="feet" value={formData.feet} onChange={handleChange} required />
              <input type="text" className="form-control" placeholder="Inches" name="inches" value={formData.inches} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="form-label">Weight</label>
              <input type="text" className="form-control" placeholder="Weight (kg)" name="weight" value={formData.weight} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="form-label">Are you Pregnant?</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="pregnant" value="yes" onChange={handleChange} />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="pregnant" value="no" onChange={handleChange} />
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Are you in Menstruation?</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="menstruation" value="yes" onChange={handleChange} />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="menstruation" value="no" onChange={handleChange} />
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Last Donation</label>
              <input type="text" className="form-control mb-1" placeholder="Day" name="day" value={formData.day} onChange={handleChange} required />
              <input type="text" className="form-control mb-1" placeholder="Month" name="month" value={formData.month} onChange={handleChange} required />
              <input type="text" className="form-control mb-1" placeholder="Year" name="year" value={formData.year} onChange={handleChange} required />
            </div>

            {/* Repeat similar form group for accident, disease, operation types as in the PHP version */}

            <button className="w-100 btn btn-lg" style={styles.btnc} type="submit">Submit</button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default OrganDonationForm;
