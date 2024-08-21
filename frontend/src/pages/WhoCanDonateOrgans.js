import React from 'react';

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333'
    },
    header: {
        textAlign: 'center',
        color: '#0056b3'
    },
    section: {
        marginBottom: '20px'
    },
    sectionTitle: {
        color: '#007bff',
        fontSize: '1.5em',
        borderBottom: '2px solid #007bff',
        paddingBottom: '5px'
    },
    sectionContent: {
        lineHeight: '1.6',
        fontSize: '1em'
    }
};

const WhoCanDonateOrgans = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Who Can Donate Organs?</h1>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Introduction</h2>
                <p style={styles.sectionContent}>Organ donation can save lives. Many people can donate organs, and the eligibility is determined based on medical assessments rather than age or specific health conditions alone.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Age</h2>
                <p style={styles.sectionContent}>There is no age limit for organ donation. People of all ages, from young children to the elderly, can be potential organ donors. Each potential donor is assessed individually based on their health condition at the time of death.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Health Conditions</h2>
                <p style={styles.sectionContent}>Having certain health conditions does not automatically disqualify someone from being an organ donor. The suitability of the organs for donation is determined based on medical evaluations conducted at the time of death.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Medical Evaluation</h2>
                <p style={styles.sectionContent}>Before organs are donated, medical professionals assess the suitability of the organs through various tests and evaluations. This ensures that the organs are healthy and viable for transplantation.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>5. Consent</h2>
                <p style={styles.sectionContent}>Consent is crucial for organ donation. Individuals must register their decision to donate organs and inform their family. In the absence of registration, family members will be consulted to make decisions on organ donation.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>6. Common Misconceptions</h2>
                <p style={styles.sectionContent}>There are several misconceptions about who can donate organs. It is important to address these myths to encourage more people to consider organ donation. Common misconceptions include the belief that older people or those with health conditions cannot donate.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>7. Conclusion</h2>
                <p style={styles.sectionContent}>Organ donation is a vital process that can save lives. Many people can be organ donors, and medical evaluations are used to determine the suitability of organs. Registering as an organ donor and informing family members are essential steps in the process.</p>
            </section>
        </div>
    );
};

export default WhoCanDonateOrgans;