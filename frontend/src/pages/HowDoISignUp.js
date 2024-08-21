import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        lineHeight: '1.6'
    },
    header: {
        textAlign: 'center',
        color: '#00d1f9',
        marginBottom: '20px'
    },
    section: {
        marginBottom: '20px'
    },
    sectionTitle: {
        color: '#00d1f9',
        fontSize: '1.5em',
        borderBottom: '2px solid #007bff',
        paddingBottom: '5px'
    },
    sectionContent: {
        fontSize: '1em'
    },
    list: {
        marginLeft: '20px'
    },
    listItem: {
        marginBottom: '10px'
    },
    button: {
        display: 'block',
        width: '200px',
        margin: '20px auto',
        padding: '10px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#00d1f9',
        border: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    buttonHover: {
        backgroundColor: '#0056b3'
    }
};

const HowDoISignUp = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>How Do I Sign Up as an Organ Donor?</h1>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Understand the Process</h2>
                <p style={styles.sectionContent}>Before signing up, it is important to understand the organ donation process, including how and when organs are donated and how the donation can save lives.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Register Online</h2>
                <p style={styles.sectionContent}>You can register as an organ donor through various online platforms provided by your country's organ donation registry. Simply visit the website, fill out the necessary information, and submit your registration.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Fill Out a Registration Form</h2>
                <p style={styles.sectionContent}>Complete the registration form with your personal details and consent to donate organs. Ensure that all information is accurate and up-to-date.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Confirm Your Registration</h2>
                <p style={styles.sectionContent}>After submitting your registration, you may receive a confirmation email or message. Follow any additional steps if required to complete your registration.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>5. Inform Your Family</h2>
                <p style={styles.sectionContent}>It is crucial to inform your family about your decision to be an organ donor. This ensures that they are aware of your wishes and can support your decision when the time comes.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>6. Update Your Information</h2>
                <p style={styles.sectionContent}>If there are any changes to your personal details or your decision to be an organ donor, make sure to update your information with the registry to keep your records current.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>7. Additional Resources</h2>
                <p style={styles.sectionContent}>For more information about organ donation, including frequently asked questions and contact details for local registries, visit the official website of your organ donation organization.</p>
                <Link to="/register" style={styles.button}>Register Now</Link>
            </section>
        </div>
    );
};

export default HowDoISignUp;