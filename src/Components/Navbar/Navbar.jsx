import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <span className={styles.name}>Jean Santos</span>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;