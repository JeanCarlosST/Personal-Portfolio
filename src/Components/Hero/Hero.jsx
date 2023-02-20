import styles from "./Hero.module.css";
import illustration from "../../assets/laptop_illustration.svg";
import tilt from "../../assets/tilt.svg";
import SkillList from "../../data/skills";
import { useState, useEffect } from "react";

const Hero = () => {

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.introduction} data-aos="fade-right">
                <p>Hi,</p>
                <p>I'm Jean Carlos Santos</p>
                <p>A <strong>Fullstack</strong> Developer</p>
            </div>
            <div className={styles.illustration}>
                <div className={styles.illustrationContainer}>
                    <img src={illustration} className={styles.illustrationImage} />
                    <Satellites />
                </div>
            </div>
        </section>
    );
}

const Satellites = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    const skillList = [
        SkillList.React, 
        SkillList.JavaScript, 
        SkillList.CSharp, 
        SkillList.Blazor, 
        SkillList.Python
    ];

    const angle = 360 / skillList.length;
    let base = 60;
    let nextAngle = 90;
    let distance;

    if(windowSize[0] > 1000) {
        distance = 220;
    }
    else if(windowSize[0] > 600) {
        distance = 200;
        base = 50;
    }
    else if(windowSize[0] > 500) {
        distance = 180;
    }
    else {
        distance = 120;
        base = 40;
    }

    const toRadians = (degree) => (degree * Math.PI) / 180;

    const getNextPos = () => {
        const x = Math.cos(toRadians(nextAngle)) * distance;
        const y = Math.sin(toRadians(nextAngle)) * distance;
        nextAngle += angle;

        return { x, y };
    }

    return (
        <div className={styles.sattelitesContainer}>
            {skillList.map((skill, index) => 
                <SkillSattelite skill={skill} base={base} pos={getNextPos()} key={index}/>
            )}
        </div>
    )
}

const SkillSattelite = ({skill, base, pos}) => {
    const offset = base / 2;
    const unit = "px";

    const style = {
        width: `${base}${unit}`,
        height: `${base}${unit}`,
        marginTop: `calc(${-pos.y}px - ${offset}${unit})`, 
        marginLeft: `calc(${pos.x}px - ${offset}${unit})`
    };

    return (
        <img 
            src={skill.icon} 
            style={style}
            className={styles.skillSattelite}/>
    )
}

export default Hero;