import React from 'react';

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        lineHeight: '1.6',
    },
    header: {
        textAlign: 'left !important',
        color: '#00d1f9',
        marginBottom: '20px'
    },
    section: {
        marginBottom: '20px',
        backgroundColor:'rgba(242,249,249,0.8)'
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

const WhySignUp = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header} className='container'>Why You Should Sign Up as an Organ Donor</h1>
           
           <div className='container text-left'> 
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Saving Lives</h2>
                <p style={styles.sectionContent}>By signing up as an organ donor, you have the potential to save multiple lives. Organ donation can help those suffering from severe organ failure and other life-threatening conditions.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. High Demand for Donors</h2>
                <p style={styles.sectionContent}>There is a constant and urgent need for organ donors. By registering, you contribute to addressing the critical shortage of available organs for transplantation.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Making a Difference</h2>
                <p style={styles.sectionContent}>Organ donation is a generous act that can greatly improve the quality of life for recipients and their families. Your decision to become a donor can make a profound difference in the lives of many.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Ease of Registration</h2>
                <p style={styles.sectionContent}>Registering as an organ donor is a straightforward process that can be done online or through various registration drives. It is a simple way to contribute to saving lives.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>5. Ethical and Respectful Process</h2>
                <p style={styles.sectionContent}>The organ donation process is conducted with the highest respect and ethical standards. Your wishes and values are honored throughout the process.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>6. Personal and Social Impact</h2>
                <p style={styles.sectionContent}>Beyond saving lives, organ donation can inspire others to register as donors and promote a culture of generosity and community support.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>7. Conclusion</h2>
                <p style={styles.sectionContent}>Becoming an organ donor is a meaningful decision that can have a lasting impact on many lives. Your registration is a step towards making a difference and supporting those in need of organ transplants.</p>
            </section>
            </div>
        </div>
    );
};

export default WhySignUp;