import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const DonorForm = () => {
  const [donor, setDonor] = useState({
    firstName: '',
    lastName: '',
    donor_father_name: '',
    donor_gender: 'M',
    donor_date_of_birth: '',
    donor_age: '',
    donateType: 'All Organs',
    donor_rhfactor: 'Not Known',
    donor_institute_name: '',
    donor_city: '',
    donor_blood_group: '',
    donor_state: '',
    donor_address: '',
    donor_email: '',
    donor_phone_no: '',
    donor_aadhaar_no: '',
    donor_pincode: '',
    donor_mobile: '',
    donor_photo: null,
    donor_signature: null,
    donor_emergency_person: '',
    donor_emergency_mobile: '',
    donor_emergency_phone: '',
    donor_emergency_email: ''
  });
  
  const [familyMembers, setFamilyMembers] = useState([
    { name: '', mobile: '', relation: '', isChecked: false }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonor({
      ...donor,
      [name]: value,
    });
  };
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];  // Only take the first file (since it's single file input)
    setDonor({ ...donor, donor_photo: file });  // Update donor_photo in state
};
const handleSignChange = (e) => {
  const file = e.target.files[0];  // Only take the first file (since it's single file input)
  setDonor({ ...donor, donor_signature: file });  // Update donor_photo in state
};

  const [selectedOrgans, setSelectedOrgans] = useState([]);
  const handleOrganNameChange = (event) => {
    const { value, checked } = event.target; 
    if (checked) {
      // Add the organ to the selected organs array
      setSelectedOrgans((prevSelectedOrgans) => [...prevSelectedOrgans, value]);
    } else {
      // Remove the organ from the selected organs array
      setSelectedOrgans((prevSelectedOrgans) =>
        prevSelectedOrgans.filter((organ) => organ !== value)
      );
    }
  };
  
  const handleFamilyInputChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers[index][name] = type === 'checkbox' ? checked : value;
    setFamilyMembers(newFamilyMembers);
  };

  const addRow = () => {
    setFamilyMembers([...familyMembers, { name: '', mobile: '', relation: '', isChecked: false }]);
  };

  const deleteRow = () => {
    setFamilyMembers(familyMembers.filter((_, index) => index !== familyMembers.length - 1));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Donor data:', donor);
    console.log('Family Members:', familyMembers);
    // Validation for phone number (should be exactly 10 digits)
    const phone = donor.donor_mobile;
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }
    // Validation for state selection (should not be the default "Select State")
    const state = donor.donor_state;
    if (!state || state === "") {
        alert("Please select a valid state.");
        return;
    }
    try {
        // Combine donor and familyMembers data into a single object to send to the server
        const formData = new FormData();
        formData.append('firstName', donor.firstName);
formData.append('lastName', donor.lastName);
formData.append('donor_father_name', donor.donor_father_name);
formData.append('donor_gender', donor.donor_gender);
formData.append('donor_date_of_birth', donor.donor_date_of_birth);
formData.append('donor_age', donor.donor_age);   
formData.append('donateType', donor.donateType);
formData.append('donor_rhfactor', donor.donor_rhfactor);     
formData.append('donor_institute_name', donor.donor_institute_name);
formData.append('donor_city', donor.donor_city);   
formData.append('donor_blood_group', donor.donor_blood_group);
formData.append('donor_state', donor.donor_state);    
formData.append('donor_address', donor.donor_address);
formData.append('donor_email', donor.donor_email); 
formData.append('donor_phone_no', donor.donor_phone_no);
formData.append('donor_aadhaar_no', donor.donor_aadhaar_no); 
formData.append('donor_pincode', donor.donor_pincode);
formData.append('donor_mobile', donor.donor_mobile);  
formData.append('donor_photo', donor.donor_photo);
formData.append('donor_signature', donor.donor_signature);       
formData.append('donor_emergency_person', donor.donor_emergency_person);
formData.append('donor_emergency_mobile', donor.donor_emergency_mobile);    
formData.append('donor_emergency_phone', donor.donor_emergency_phone);
formData.append(' donor_emergency_email', donor. donor_emergency_email);   
formData.append('familyMembers', JSON.stringify(familyMembers));  // Append family members data as a string
        // const payload = {
        //     donor,
        //     familyMembers,

        // };
        // API call to the server 
        const response = await axios.post('http://localhost:5000/register-donor', formData,{ headers: {
          'Content-Type': 'multipart/form-data'  // Important for file uploads
      }});
        
        if (response.status === 200) {
            alert('Form submitted successfully!');
        } else {
            alert('There was an issue submitting the form.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
    }
};

// Calculate Age 
const [dob, setDob] = useState(null); // Date of birth state
  const [age, setAge] = useState('');   // Age state
  const calculateAge = () => {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      // Check if the birthday hasn't occurred yet this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setAge(age); // Update age state
    }
  };

    return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="feature-item p-4">
              <div className="text-center mx-auto" style={{ maxWidth: '800px' }}>
                <h2 className="display-3 text-uppercase text-primary text-decoration-underline">Be a donor</h2>
                <h4 className="text-capitalize mb-3">Register your decision</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="inner-content">
                  <h3>Personal Details</h3>
                </div>
                <div className="row">
                  <div className="col-sm-3 text-right">
                    <label>First Name<span className="text-danger">*</span>:</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="text" name="firstName" className="form-control" value={donor.firstName} onChange={handleInputChange} required/>
                  </div>
                  <div className="col-sm-3 text-right">
                    <label>Last Name<span className="text-danger">*</span>:</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="text" name="lastName" className="form-control" value={donor.lastName} onChange={handleInputChange} required />
                  </div>
                </div>
                
                {/* Additional form fields can be added in similar structure */}
                <div class="row">
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Father's Name / Husband Name<span class="text-danger">*</span>:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="text" name="donor_father_name" id="donor_father_name" value={donor.donor_father_name} class="required lettersonly form-control" required  onChange={handleInputChange}/>
                                            </div>
                                    </div>
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Gender<span class="text-danger">*</span>:</div>
                                    </div>
                                    <div class="col-sm-3" style={{textAlign:"left"}}>
                                        <div class="form-group">
                                            <span class="info_field">
                              <input name="donor_gender" value="M" checked="checked" type="radio"/>
                              &nbsp;Male&nbsp;&nbsp;
                              <input name="donor_gender" value="F" type="radio"/>
                              &nbsp;Female&nbsp;&nbsp;
                              <input name="donor_gender" value="O" type="radio"/>
                              &nbsp;Other</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
      <div className="col-sm-3">
        <div className="form-group">
          <label>Date of Birth:</label>
           
          </div></div>
          <div className="col-sm-3">
          <div className="form-group">
          <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              className="form-control"
              placeholderText="Select date of birth"
             
            />
            <div className='d-flex'> 
              <label>(dd/mm/yyyy)</label>
              <input
                type="button"
                value="Calculate Age"
                id="calculate-age"
                className="btn btn-warning margin-top-10"
                onClick={calculateAge}
              /></div>
        </div>
      </div>

      <div className="col-sm-3 text-right">
        <div className="form-group">
          <label>Age<span className="text-danger">*</span>:</label>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="form-group">
          <input
            type="text"
            name="donor_age"
            id="donor_age"
            value={age}
            readOnly
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
                                <div class="row">
                                  {/* Organ Donation Section */}
                <div className="row">
                  <div className="col-sm-3 text-right">
                    <label>Organs to donate<span className="text-danger">*</span>:</label>
                  </div>
                  <div className="col-sm-4" style={{textAlign:"left"}}>
                    <input type="radio" name="donateType" value="All Organs" checked={donor.donateType === 'All Organs'} onChange={handleInputChange} />
                    <label>All Organs</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="donateType" value="Specific Organs" checked={donor.donateType === 'Specific Organs'} onChange={handleInputChange} />
                    <label>Specific Organs</label>
                    {donor.donateType === 'Specific Organs' && (
                      <div className='organWrapper'>
                      <input type="checkbox" value="Cornea" onChange={handleOrganNameChange} />
                                              <label>Cornea</label><br></br>
                                              <input type="checkbox" value="Kidney" onChange={handleOrganNameChange} />
                                              <label>Kidney</label><br></br>
                                         <input type="checkbox" value="Skin" onChange={handleOrganNameChange} />
                                              <label>Skin</label><br></br>
                                              <input type="checkbox" value="Heart" onChange={handleOrganNameChange} />
                                              <label>Heart</label><br></br>
                       <input type="checkbox" value="Lungs" onChange={handleOrganNameChange} />
                                              <label>Lungs</label><br></br>
                                              <input type="checkbox" value="Liver" onChange={handleOrganNameChange} />
                                              <label>Liver</label><br></br>
                      <input type="checkbox" value="Pancreas" onChange={handleOrganNameChange} />
                                              <label>Pancreas</label><br></br>
                      <input type="checkbox" value="Intestine" onChange={handleOrganNameChange} />
                                              <label>Intestine</label><br></br>
                      <input type="checkbox" value="BoneMarrow" onChange={handleOrganNameChange} />
                                              <label>BoneMarrow</label><br></br>
                                            </div>
                      
                    )}
                  <p>Selected Organs: {selectedOrgans.join(', ')}</p>

                  </div>
                                    <div class="col-sm-2 text-right">
                                        <div class="form-group">
                                            Rh Factor:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <select name="donor_rhfactor" id="donor_rhfactor" class="form-control">
                                                <option value="Not Known">Not Known</option>
                                                <option value="+ve">+ve</option>
                                                <option value="-ve">-ve</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Name of Institute/Hospital:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="donor_institute_name" id="donor_institute_name" value={donor.donor_institute_name} onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            City<span class="text-danger">*</span>:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="text" name="donor_city" id="donor_city" value={donor.donor_city} class="required lettersonly form-control" onChange={handleInputChange} required/>
                                                                            </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Blood Group:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <select name="donor_blood_group" class="form-control">
                                                                                        <option value="">
                                                    Not known										</option>
                                                                                        <option value="">
                                                    A										</option>
                                                                                        <option value="">
                                                    B										</option>
                                                                                        <option value="">
                                                    AB										</option>
                                                                                        <option value="">
                                                    O										</option>
                                                                                    </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            State<span class="text-danger">*</span>:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <select name="donor_state" id="donor_state" class="required form-control" value={donor.donor_state} onChange={handleInputChange}>
                                                <option value=""> Select State </option>
                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chandigarh">Chandigarh</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Delhi">Delhi</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu and Kashmir">Jammu and Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Orissa">Orissa</option><option value="Pondicherry">Pondicherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="Uttarakhand">Uttarakhand</option><option value="West Bengal">West Bengal</option>
                                            </select>
                                          </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Address<span class="text-danger">*</span>:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <textarea name="donor_address" id="donor_address" rows="2" class="required form-control" onChange={handleInputChange}></textarea>
                                                                            </div>
                                    </div>
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Email:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input name="donor_email" maxlength="150" id="donor_email" class="email form-control" value={donor.donor_email} type="text" onChange={handleInputChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Phone:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="donor_phone_no" maxlength="12" minlength="10" value={donor.donor_phone_no} onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Aadhaar No.<span class="text-danger">*</span>:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="text" name="donor_aadhaar_no" id="donor_aadhaar_no" value={donor.donor_aadhaar_no} class="required aadharno form-control" maxlength="12" onChange={handleInputChange}/>
                                                                            </div>
                                    </div>
                                    
                                </div>
                                <div class="row">
                            <div class="col-sm-3 text-right">
                                        <div class="form-group">
                                            Upload your Photo:</div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input name="donor_photo" id="donor_photo" type="file" onChange={handlePhotoChange}/>
                                            <br/>
                                            <font color="#008641" face="Verdana" size="1">( .jpg, .jpeg, .png, .gif )</font>
                                            Invalid File								</div>
                                    </div>
                            <div class="col-sm-3 text-right">
                                <div class="form-group">
                                    Upload your Signature:</div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <input name="donor_signature" id="donor_signature" type="file" onChange={handleSignChange}/>
                                    <br/>
                                    <font style={{marginLeft: "10px", color:"#008641", face:"Verdana", size:"1"}}>( .jpg, .jpeg, .png, .gif )</font>
                                    Invalid File						</div>
                            </div>
                        </div>
                                <div class="row">
                            <div class="col-sm-3 text-right">
                                <div class="form-group">
                                    Pin Code:</div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <input name="donor_pincode" maxlength="6" id="donor_pincode" class="number form-control" value={donor.donor_pincode} type="text" onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div class="col-sm-3 text-right">
                                <div class="form-group">
                                    Mobile<span class="text-danger">*</span>:</div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <input name="donor_mobile" maxlength="10" id="donor_mobile" value={donor.donor_mobile} type="text" class="required onlynumber form-control" onChange={handleInputChange} required/>                     
                                </div>
                            </div>
                        </div>
                
                {/*Emergency contacts details */}
                <div className="clearfix"></div>
      <div className="inner-content">
        <h3>Emergency Contact Details</h3>
      </div>

      <div className="row">
        <div className="col-sm-3 text-right">
          <div className="form-group">
            Emergency Contact Person<span className="text-danger">*</span>:
          </div>
        </div>
        <div className="col-sm-3">
          <div className="form-group">
            <input
              type="text"
              name="donor_emergency_person"
              id="donor_emergency_person"
              className="required lettersonly form-control"
              value={donor.donor_emergency_person}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-sm-3 text-right">
          <div className="form-group">
            Emergency Mobile <span className="text-danger">*</span>:
          </div>
        </div>
        <div className="col-sm-3">
          <div className="form-group">
            <input
              name="donor_emergency_mobile"
              maxLength="10"
              id="donor_emergency_mobile"
              value={donor.donor_emergency_mobile}
              type="text"
              className="required onlynumber form-control"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 text-right">
          <div className="form-group">Emergency Phone:</div>
        </div>
        <div className="col-sm-3">
          <div className="form-group">
            <input
              type="text"
              name="donor_emergency_phone"
              className="form-control"
              id="donor_emergency_phone"
              value={donor.donor_emergency_phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-sm-3 text-right">
          <div className="form-group">Emergency Email:</div>
        </div>
        <div className="col-sm-3">
          <div className="form-group">
            <input
              name="donor_emergency_email"
              id="donor_emergency_email"
              value={donor.donor_emergency_email}
              type="text"
              className="email form-control"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
                {/* Family Members Section */}
                <div className="clearfix"></div>
      <div className="clearfix"></div>
      <div className="inner-content">
        <h3>Family Member's Details</h3>
      </div>
      <div className="form-group">
        <div className="table-responsive">
          <table width="100%" border="0" cellpadding="0" cellspacing="0">
            <thead>
              <tr>
                <th width="10%">Select</th>
                <th width="30%">Name <span className="text-danger">*</span></th>
                <th width="30%">Mobile <span className="text-danger">*</span></th>
                <th>Relation <span className="text-danger">*</span></th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((member, index) => (
                <tr key={index}>
                  <td width="10%">
                    <input
                      type="checkbox"
                      name="isChecked"
                      checked={member.isChecked}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td width="30%">
                    <input
                      type="text"
                      name="name"
                      className="required lettersonly form-control"
                      value={member.name}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td width="30%">
                    <input
                      type="text"
                      name="mobile"
                      className="required onlynumber form-control"
                      value={member.mobile}
                      maxLength="10"
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="relation"
                      className="required form-control"
                      value={member.relation}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4">
                  <div className="form-group text-right">
                    <input
                      type="button"
                      value="Add Row"
                      onClick={addRow}
                      className="btn btn-info"
                    />
                    <input
                      type="button"
                      value="Delete Row"
                      onClick={deleteRow}
                      className="btn btn-danger"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
                
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-success">Submit</button>
                  <button type="button" className="btn btn-danger">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorForm;
