import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming axios is used for API requests

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOrganRequests, setTotalOrganRequests] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [donationRecords, setDonationRecords] = useState(0);
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [donors, setDonors] = useState([]);
  const [donationRecord, setDonationRecord] = useState([]);

  // useEffect(() => {
  //   // Fetching all the necessary data from your backend
  //   // Replace the endpoints with the actual routes of your API
  //   axios.get("/api/users/count").then((response) => setTotalUsers(response.data));
  //   axios.get("/api/organ-requests/count").then((response) => setTotalOrganRequests(response.data));
  //   axios.get("/api/donors/count").then((response) => setTotalDonors(response.data));
  //   axios.get("/api/donation-records/count").then((response) => setDonationRecords(response.data));
  //   axios.get("/api/users").then((response) => setUsers(response.data));
  //   axios.get("/api/organ-requests").then((response) => setRequests(response.data));
  //   axios.get("/api/donors").then((response) => setDonors(response.data));
  //   axios.get("/api/donation-records").then((response) => setDonationRecord(response.data));
  // }, []);

  return (
    <div className="container-fluid" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body b1">
              <h5 className="card-title">Total Users</h5>
              <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>{totalUsers}</h2>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card">
            <div className="card-body b2">
              <h5 className="card-title">Total Organ Requests</h5>
              <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>{totalOrganRequests}</h2>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card">
            <div className="card-body b3">
              <h5 className="card-title">Total Donors</h5>
              <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>{totalDonors}</h2>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card">
            <div className="card-body b4">
              <h5 className="card-title">Donation Records</h5>
              <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>{donationRecords}</h2>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-weight-bolder text-center">Users</h3>
      <table className="table table-hover table-striped my-3">
        <thead className="thead-dark th">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Zip Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.REGISTRATION_ID}>
              <td>{user.REGISTRATION_ID}</td>
              <td>{user.FIRST_NAME}</td>
              <td>{user.LAST_NAME}</td>
              <td>{user.AGE}</td>
              <td>{user.EMAIL}</td>
              <td>{user.BLOOD_GROUP}</td>
              <td>{user.Gender}</td>
              <td>{user.phoneR}</td>
              <td>{user.ADD_RESSr}</td>
              <td>{user.ZIP_CODE}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="font-weight-bolder text-center">Requests</h3>
      <table className="table table-hover table-striped my-3">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Blood Group</th>
            <th>Request Type</th>
            <th>Quantity</th>
            <th>Request Time</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.REGISTRATION_ID}>
              <td>{request.REGISTRATION_ID}</td>
              <td>{request.FIRST_NAME + " " + request.LAST_NAME}</td>
              <td>{request.phoneN}</td>
              <td>{request.ADD_RESSn}</td>
              <td>{request.BLOOD_GROUP}</td>
              <td>{request.REQUEST_TYPE}</td>
              <td>{request.QUANTITY}</td>
              <td>{request.REQUEST_TIME}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="font-weight-bolder text-center">Donors</h3>
      <table className="table table-hover table-striped my-3">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Donated (times)</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.REGISTRATION_ID}>
              <td>{donor.REGISTRATION_ID}</td>
              <td>{donor.FIRST_NAME + " " + donor.LAST_NAME}</td>
              <td>{donor.total_donation}</td>
              <td>{donor.phoneR}</td>
              <td>{donor.EMAIL}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="font-weight-bolder text-center">DONATION RECORD</h3>
      <table className="table table-hover table-striped my-3">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Quantity</th>
            <th>Last Donated</th>
          </tr>
        </thead>
        <tbody>
          {donationRecord.map((record) => (
            <tr key={record.REGISTRATION_ID}>
              <td>{record.REGISTRATION_ID}</td>
              <td>{record.FIRST_NAME + " " + record.LAST_NAME}</td>
              <td>{record.BLOOD_GROUPd}</td>
              <td>{record.Quantity}</td>
              <td>{record.last_donated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
