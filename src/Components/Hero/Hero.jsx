import styles from "./Hero.module.css";
import illustration from "../../assets/laptop_illustration.svg"

const Hero = () => {
    return (
        <section id="home">
            <div className={styles.introduction}>
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