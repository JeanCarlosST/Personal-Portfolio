import styles from "./Hero.module.css";
import illustration from "../../assets/laptop_illustration.svg";
import tilt from "../../assets/tilt.svg";

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.introduction} data-aos="fade-right">
                <p>Hi,</p>
                <p>I'm Jean Carlos Santos</p>
                <p>A <strong>Fullstack</strong> Developer</p>
            </div>
            <div className={styles.illustration}>
                <img src={illustration} alt="" />
            </div>
        </section>
    );
}

export default Hero;