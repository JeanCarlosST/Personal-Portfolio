import styles from "./Hero.module.css";
import illustration from "../../assets/laptop_illustration.svg";
import tilt from "../../assets/tilt.svg";

const Hero = () => {
    return (
        <>
            <section id="home" className={styles.hero}>
                <div className={styles.introduction}>
                    <p>Hi,</p>
                    <p>I'm Jean Carlos Santos</p>
                    <p>A <strong>Fullstack</strong> Developer</p>
                </div>
                <div className={styles.illustration}>
                    <img src={illustration} alt="" />
                </div>
            </section>
            <img src={tilt} className={styles.divider}/>
        </>
    );
}

export default Hero;