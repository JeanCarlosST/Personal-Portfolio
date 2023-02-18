import styles from "./Contact.module.css";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <h2>Contact Me</h2>
            <div className={styles.buttonGrid}>
                <a href="mailto:jeanc.1582@gmail.com" className={styles.contactButton} data-aos="fade-right">
                    <img src={emailIcon} alt="" />
                    <span>Send me an email</span>
                </a>
                <a href="tel:+1 (347) 447-6025" className={styles.contactButton} data-aos="fade-left">
                    <img src={phoneIcon} alt="" />
                    <span>Send me a SMS</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;