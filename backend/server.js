const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const bcrypt = require('bcryptjs');
const multer = require('multer'); // For file uploads

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "organdb", 
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Routes
app.get("/", (req, res) => {
  res.send("API is running.");
});
//Register users
app.post('/register', async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    email,
    password,
    confirmPassword,
    phone,
    address,
    zipCode,
    terms,
  } = req.body;

  // Check if terms and conditions are accepted
  if (!terms) {
    return res.status(400).json({ message: 'You must agree to the terms and conditions' });
  }

  // Validate password confirmation
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user data into the MySQL database
  const query = `INSERT INTO users (first_name, last_name, dob, gender, email, password, phone_no, address, zip) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [firstName, lastName, dateOfBirth, gender, email, hashedPassword, phone, address, zipCode],
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ message: 'Error registering user' });
      }
      res.status(200).json({ message: 'User registered successfully' });
    }
  );
});


// Donor Registration form
// Multer configuration for handling file uploads (e.g., photo, signature)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Set unique filename
  }
});
const upload = multer({ storage: storage });

// API to handle donor form submission
app.post('/register-donor', upload.fields([{ name: 'donor_photo' }, { name: 'donor_signature' }]), (req, res) => {
  const donorData = req.body;
  const donor_photo = req.files['donor_photo'][0].path; // Path to the uploaded photo
  const donor_signature = req.files['donor_signature'][0].path; // Path to the uploaded signature

  // SQL query to insert donor information into the MySQL table
  const sql = `INSERT INTO donorinfo 
               (firstName, lastName, donor_father_name, donor_gender, donor_date_of_birth, donor_age, donateType, donor_rhfactor, 
                donor_institute_name, donor_city, donor_blood_group, donor_state, donor_address, donor_email, donor_phone_no, 
                donor_aadhaar_no, donor_pincode, donor_mobile, donor_photo, donor_signature, donor_emergency_person, 
                donor_emergency_mobile, donor_emergency_phone, donor_emergency_email) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
      donorData.firstName, donorData.lastName, donorData.donor_father_name, donorData.donor_gender, donorData.donor_date_of_birth,
      donorData.donor_age, donorData.donateType, donorData.donor_rhfactor, donorData.donor_institute_name, donorData.donor_city,
      donorData.donor_blood_group, donorData.donor_state, donorData.donor_address, donorData.donor_email, donorData.donor_phone_no,
      donorData.donor_aadhaar_no, donorData.donor_pincode, donorData.donor_mobile, donor_photo, donor_signature, 
      donorData.donor_emergency_person, donorData.donor_emergency_mobile, donorData.donor_emergency_phone, donorData.donor_emergency_email
  ];

  // Insert donor data into the MySQL database
  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ message: 'Error registering donor' });
      } else {
          console.log('Donor data inserted successfully');
          res.status(200).json({ message: 'Donor registered successfully' });
      }
  });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
