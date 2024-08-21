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

const MythsAndFacts = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Myths and Facts About Organ Donation</h1>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Introduction</h2>
                <p style={styles.sectionContent}>Organ donation is surrounded by various myths and misconceptions. It's important to understand the facts to make informed decisions about organ donation.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Common Myths and Facts</h2>
                <p style={styles.sectionContent}>Here are some common myths about organ donation and the corresponding facts:</p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Myth:</strong> Only young people can donate organs.</li>
                    <li style={styles.listItem}><strong>Fact:</strong> People of all ages can donate organs. The suitability of organs for donation is determined by medical professionals, not age alone.</li>
                    <li style={styles.listItem}><strong>Myth:</strong> Organ donation is not allowed if you have a medical condition.</li>
                    <li style={styles.listItem}><strong>Fact:</strong> Many medical conditions do not disqualify you from being an organ donor. Medical professionals assess each potential donor individually.</li>
                    <li style={styles.listItem}><strong>Myth:</strong> Organ donation is expensive and may cost your family a lot.</li>
                    <li style={styles.listItem}><strong>Fact:</strong> The cost of organ donation and transplantation is covered by the recipient's insurance, not the donor's family.</li>
                    <li style={styles.listItem}><strong>Myth:</strong> Doctors will not try as hard to save your life if you're a registered organ donor.</li>
                    <li style={styles.listItem}><strong>Fact:</strong> Medical professionals are committed to saving lives. Organ donation is only considered after all life-saving efforts have been exhausted.</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Why It Matters</h2>
                <p style={styles.sectionContent}>Understanding the facts about organ donation can help dispel fears and encourage more people to register as organ donors. Organ donation can save lives and improve the quality of life for many individuals.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Conclusion</h2>
                <p style={styles.sectionContent}>By addressing common myths and understanding the facts, you can make an informed decision about organ donation. Registering as an organ donor is a powerful way to contribute to saving lives and supporting those in need.</p>
            </section>
        </div>
    );
};

export default MythsAndFacts;