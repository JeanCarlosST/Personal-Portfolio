import styles from "./Skills.module.css";
import SkillList from "../../data/skills";
import CompanyList from "../../data/companies";

const Skills = () => {

    const skillList = Object.values(SkillList);
    const companyList = Object.values(CompanyList);

    return (
        <section id="skills" className={styles.skillsAndExperience}>
            <h2>Skills & Experience</h2>
            <div className={styles.container}>
                <div className={styles.skills}>
                    <span>Technologies I've used:</span>
                    <div className={styles.skillsContainer}>
                        {skillList.map((skill, index) => 
                            <SkillItem skill={skill} key={index}/>
                        )}
                    </div>
                </div>
                <div className={styles.company}>
                    <span>Where I've worked: </span>
                    <div className={styles.companiesContainer}>
                        {companyList.map((company, index) => 
                            <CompanyItem company={company} key={index}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillItem = ({skill}) => {
    return (
        <figure className={styles.skillItem}>
            <div className={styles.skillIconContainer}>
                <img src={skill.icon} className={styles.skillIcon}/>
            </div>
            <figcaption className={styles.skillName}>{skill.name}</figcaption>
        </figure>
    )
}

const CompanyItem = ({company}) => {
    return (
        <figure className={styles.companyItem}>
            <div className={styles.companyImageContainer}>
                <img src={company.image} className={styles.companyImage}/>
            </div>
        </figure>
    );
}

export default Skills;