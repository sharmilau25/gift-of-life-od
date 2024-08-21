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

const RulesAndRegulations = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Organ Transplant Laws Made Easy</h1>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Introduction</h2>
                <p style={styles.sectionContent}>Organ transplantation is a medical procedure that involves the transfer of organs from a donor to a recipient. In India, the process of organ donation and transplantation is governed by specific laws and regulations to ensure that it is carried out ethically and transparently.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Key Legislation</h2>
                <p style={styles.sectionContent}>The primary legislation governing organ transplantation in India is the Transplantation of Human Organs and Tissues Act, 1994. This Act was established to regulate the removal, storage, and transplantation of human organs and tissues for therapeutic purposes.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Organ Donation and Transplantation Procedure</h2>
                <p style={styles.sectionContent}>The process involves several steps, including:</p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Consent:</strong> The donor or their family must provide informed consent for organ donation.</li>
                    <li style={styles.listItem}><strong>Medical Evaluation:</strong> Both the donor and recipient undergo medical evaluations to ensure compatibility and suitability.</li>
                    <li style={styles.listItem}><strong>Procurement:</strong> Organs are procured under strict medical and ethical guidelines.</li>
                    <li style={styles.listItem}><strong>Transplantation:</strong> The organs are transplanted into the recipient in a surgical procedure.</li>
                    <li style={styles.listItem}><strong>Post-Transplant Care:</strong> The recipient receives ongoing medical care to ensure the success of the transplant.</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Ethical and Legal Considerations</h2>
                <p style={styles.sectionContent}>The law ensures that organ donation is carried out ethically by addressing issues such as:</p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Voluntary Donation:</strong> Organs can only be donated voluntarily, and commercial transactions are prohibited.</li>
                    <li style={styles.listItem}><strong>Consent:</strong> Donors must provide informed consent, and their wishes must be respected.</li>
                    <li style={styles.listItem}><strong>Ethical Practices:</strong> The Act mandates ethical practices to prevent abuse and exploitation.</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>5. Role of Organizations</h2>
                <p style={styles.sectionContent}>Several organizations play a crucial role in organ transplantation, including:</p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>National Organ and Tissue Transplant Organisation (NOTTO):</strong> Oversees organ transplantation and coordinates between various hospitals and organizations.</li>
                    <li style={styles.listItem}><strong>State Organ and Tissue Transplant Organizations (SOTTOs):</strong> Manage transplantation activities at the state level.</li>
                    <li style={styles.listItem}><strong>Hospitals:</strong> Facilitate the medical procedures related to organ donation and transplantation.</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>6. How to Become a Donor</h2>
                <p style={styles.sectionContent}>To become an organ donor, individuals can:</p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Register:</strong> Sign up with an organ donation registry.</li>
                    <li style={styles.listItem}><strong>Inform Family:</strong> Discuss their decision with family members to ensure their wishes are known.</li>
                    <li style={styles.listItem}><strong>Carry a Donor Card:</strong> Keep a donor card in their wallet to indicate their donor status.</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>7. Conclusion</h2>
                <p style={styles.sectionContent}>Organ donation is a noble act that can save lives. Understanding the legal and ethical framework surrounding organ transplantation helps ensure that the process is carried out effectively and ethically. By following the laws and regulations, we can contribute to a successful and humane organ donation system.</p>
            </section>
        </div>
    );
};

export default RulesAndRegulations;