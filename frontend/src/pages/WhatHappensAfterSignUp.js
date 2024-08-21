import React from 'react';

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
    }
};

const WhatHappensAfterSignUp = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header} className='container'>What Happens After You Sign Up</h1>
        <div className='container text-left'> 
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Confirmation of Registration</h2>
                <p style={styles.sectionContent}>Once you sign up as an organ donor, you will receive a confirmation message or email. This confirms that your registration has been successfully recorded in the donor registry.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Updating Your Information</h2>
                <p style={styles.sectionContent}>If your personal details change (e.g., address or contact information), you should update them with the registry to ensure your information is current and accurate.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Informing Your Family</h2>
                <p style={styles.sectionContent}>It is important to inform your family members about your decision to be an organ donor. This ensures that they are aware of your wishes and can support your decision.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. In the Event of Death</h2>
                <p style={styles.sectionContent}>In the event of your death, medical professionals will determine if you are a suitable candidate for organ donation based on medical criteria and the condition of your organs.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>5. Ethical Considerations</h2>
                <p style={styles.sectionContent}>Organ donation will only be considered after all life-saving measures have been exhausted. Your health care team will ensure that your decision to donate organs is handled with respect and in accordance with legal and ethical standards.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>6. The Impact of Donation</h2>
                <p style={styles.sectionContent}>Your decision to become an organ donor can save lives and improve the quality of life for many individuals. By registering, you contribute to a life-saving network that helps those in need of organ transplants.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>7. Conclusion</h2>
                <p style={styles.sectionContent}>Understanding what happens after you sign up as an organ donor helps ensure that your decision is well-informed and that your wishes are honored. Your commitment to donation can make a significant difference in the lives of others.</p>
            </section>
            </div>
        </div>
    );
};

export default WhatHappensAfterSignUp;