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
        color: '#0056b3',
        marginBottom: '20px'
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
        fontSize: '1em'
    },
    list: {
        marginLeft: '20px'
    },
    listItem: {
        marginBottom: '10px'
    }
};

const WhatCanBeDonated = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>What Can Be Donated?</h1>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Organs</h2>
                <p style={styles.sectionContent}>Various organs can be donated to save lives. These include:</p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Heart</li>
                    <li style={styles.listItem}>Lungs</li>
                    <li style={styles.listItem}>Kidneys</li>
                    <li style={styles.listItem}>Liver</li>
                    <li style={styles.listItem}>Pancreas</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Tissues</h2>
                <p style={styles.sectionContent}>In addition to organs, various tissues can be donated, which include:</p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Corneas</li>
                    <li style={styles.listItem}>Skin</li>
                    <li style={styles.listItem}>Bones</li>
                    <li style={styles.listItem}>Cartilage</li>
                    <li style={styles.listItem}>Heart valves</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. How Donations Help</h2>
                <p style={styles.sectionContent}>Organ and tissue donations can significantly improve or save the lives of people with serious health conditions. Donated organs and tissues can restore health and enhance quality of life for recipients.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Conclusion</h2>
                <p style={styles.sectionContent}>Understanding what can be donated is crucial in the process of organ and tissue donation. By registering as a donor, you can make a difference in the lives of many individuals in need of transplants.</p>
            </section>
        </div>
    );
};

export default WhatCanBeDonated;