import styles from "./Navbar.module.css";
import navBtnIcon from "../../assets/nav-btn-icon.svg";
import { useRef, useState } from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const navBar = useRef();

    const handleMenuClick = () => {
        setIsActive(prev => !prev);
    }

    const inactiveMenu = () => {
        setIsActive(false);
    }

    return (
        <header>
            <div className={styles.navHeader}>
                <a href="#" className={styles.name}>Jean Santos</a>
            </div>
            <button type="button" className={styles.navBtn} onClick={handleMenuClick}>
                <img src={navBtnIcon} className={styles.navBtnIcon}/>
            </button>
            <nav className={isActive ? styles.active: ""} ref={navBar}>
                <ul>
                    <li onClick={inactiveMenu}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={inactiveMenu}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li onClick={inactiveMenu}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li onClick={inactiveMenu}>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;