import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    zipCode: ''
  });
  
  const [terms, setTerms] = useState(false); // Checkbox state
  const [error, setError] = useState(''); // For showing validation error
  const [success, setSuccess] = useState(''); // For showing success message

  // Handle change for input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setTerms(e.target.checked);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous error or success messages
    setError('');
    setSuccess('');

    // Validation: Check if password matches confirm password
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Validation: Check if terms checkbox is checked
    if (!terms) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    // Make API call to backend to register user
    try {
      const response = await axios.post('http://localhost:5000/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        phone: formData.phone,
        address: formData.address,
        zipCode: formData.zipCode,
        terms: terms,
      });

      // If registration is successful, show success message
      setSuccess('User registered successfully!');
    } catch (error) {
      setError(error.response?.data?.message || 'There was an error registering the user');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="wrapper">
        <div className="title">Register Now</div>
        <div className="form">
          <div className="inputfield">
            <label htmlFor="firstName">First Name<span>*</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="lastName">Last Name<span>*</span></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="dateOfBirth">Date of Birth<span>*</span></label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="input"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="gender">Gender<span>*</span></label>
            <select
              id="gender"
              name="gender"
              className="custom_select"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="inputfield">
            <label htmlFor="email">Email Address<span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="password">Password<span>*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="confirmPassword">Confirm Password<span>*</span></label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="phone">Phone Number<span>*</span></label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="address">Address<span>*</span></label>
            <input
              type="text"
              id="address"
              name="address"
              className="input"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="zipCode">Zip Code<span>*</span></label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              className="input"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield terms">
            <label htmlFor="terms" className="check">
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={handleCheckboxChange}
                required
              />
              <span className="checkmark"></span>
            </label>
            <p>Agreed to terms and conditions</p>
          </div>
          <div className="inputfield">
            <input type="submit" value="Register" className="btn" />
          </div>
          <p className="alter">
            Already a Member? <Link className="register" to="/login">Log in now!</Link>
          </p>

          {/* Display error or success messages */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
      </div>
    </form>
  );
};

export default Registration;



//===================================================================================
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phone: '',
//     address: '',
//     zipCode: '',
//   });
//   const [terms, setTerms] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     setTerms(e.target.checked);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     // For example, make an API call to connect.php
//   };

//   return (
//     <div>
//       {/* <div className="header">
//         <img className="img-log" src="assets/images/new-user.png" alt="New User Icon" />
//         <div className="h2">
//           <h3 className="h3">REGISTRATION</h3>
//         </div>
//       </div> */}
//       <form onSubmit={handleSubmit} className="form-group">
//         <div className="wrapper">
//           <div className="title">Register Now</div>
//           <div className="form">
//             <div className="inputfield">
//               <label htmlFor="firstName">First Name<span>*</span></label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 className="input"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="lastName">Last Name<span>*</span></label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 className="input"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="dateOfBirth">Date of Birth<span>*</span></label>
//               <input
//                 type="date"
//                 id="dateOfBirth"
//                 name="dateOfBirth"
//                 className="input"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="gender">Gender<span>*</span></label>
//               <select
//                 id="gender"
//                 name="gender"
//                 className="custom_select"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <div className="inputfield">
//               <label htmlFor="email">Email Address<span>*</span></label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="input"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="password">Password<span>*</span></label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="input"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="confirmPassword">Confirm Password<span>*</span></label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 className="input"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="phone">Phone Number<span>*</span></label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 className="input"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="address">Address<span>*</span></label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 className="input"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield">
//               <label htmlFor="zipCode">Zip Code<span>*</span></label>
//               <input
//                 type="text"
//                 id="zipCode"
//                 name="zipCode"
//                 className="input"
//                 value={formData.zipCode}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inputfield terms">
//               <label htmlFor="terms" className="check">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   checked={terms}
//                   onChange={handleCheckboxChange}
//                   required
//                 />
//                 <span className="checkmark"></span>
//               </label>
//               <p>Agreed to terms and conditions</p>
//             </div>
//             <div className="inputfield">
//               <input type="submit" value="Register" className="btn" />
//             </div>
//             <p className="alter">
//               Already a Member? <Link className="register" to="/login">Log in now!</Link>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Registration;
