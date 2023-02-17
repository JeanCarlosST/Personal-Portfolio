import styles from "./Footer.module.css";
import githubIcon from "../../assets/github-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";

const Footer = () => {
    return (
        <footer>
            <div className={styles.linkButtons}>
                <a href="https://www.linkedin.com/in/jean-carlos-santos-tejada-225380184/" target="_blank" className={styles.linkButton}>
                    <img src={linkedinIcon}/>    
                </a>
                <a href="https://github.com/JeanCarlosST" target="_blank" className={styles.linkButton}>
                    <img src={githubIcon}/>    
                </a>
                <a href="https://www.instagram.com/jeanca_st/" target="_blank" className={styles.linkButton}>
                    <img src={instagramIcon}/>  
                </a>
            </div>
            <span>© Jean Santos 2023</span>
        </footer>
    );
};

export default Footer;