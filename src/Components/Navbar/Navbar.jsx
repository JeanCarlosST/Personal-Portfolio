import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <a href="#" className={styles.name}>Jean Santos</a>
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