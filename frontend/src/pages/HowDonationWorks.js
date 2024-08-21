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

const HowDonationWorks = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>How Donation Works</h1>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Registration</h2>
                <p style={styles.sectionContent}>The first step in the donation process is to register as an organ donor. You can do this through various online platforms or by signing up through your local organ donation registry.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Medical Evaluation</h2>
                <p style={styles.sectionContent}>Once you are registered, your medical history will be evaluated to ensure that you are a suitable candidate for organ donation. This evaluation includes a series of tests and assessments by healthcare professionals.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Organ Matching</h2>
                <p style={styles.sectionContent}>When an organ becomes available, it is matched with potential recipients based on medical criteria. This process ensures that the organ is compatible with the recipient and has the best chance of success.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Donation Procedure</h2>
                <p style={styles.sectionContent}>If you are a donor, the actual donation procedure is performed in a surgical setting. This involves removing the organs and tissues for transplantation. The process is conducted with the utmost respect and care.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>5. Recovery and Transplant</h2>
                <p style={styles.sectionContent}>After the donation, the organs are transported to the recipient hospital where they are transplanted into the recipient. This process is carefully monitored to ensure the best possible outcomes for the recipient.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>6. Post-Donation Care</h2>
                <p style={styles.sectionContent}>Following the transplant, both the donor's and recipient's health are closely monitored. Post-donation care ensures that both parties receive the necessary support and follow-up care.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>7. Conclusion</h2>
                <p style={styles.sectionContent}>Understanding how donation works helps you make an informed decision about becoming an organ donor. Your decision can save lives and contribute to a more efficient and compassionate healthcare system.</p>
            </section>
        </div>
    );
};

export default HowDonationWorks;