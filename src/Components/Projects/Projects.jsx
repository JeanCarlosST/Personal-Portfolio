import styles from "./Projects.module.css";
import ProjectList from "../../data/projects";
import tilt from "../../assets/tilt.svg";
import eyeIcon from "../../assets/eye-icon.svg";
import githubIcon from "../../assets/github-icon.svg";

const Projects = () => {

    const list = Object.values(ProjectList);

    return (
        <section id="projects" className={styles.projects}>
            <h2>Portfolio Projects</h2>
            <div className={styles.projectsContainer}>
                {list.map((project, index) => 
                    <ProjectItem project={project} key={index}/>    
                )}
            </div>
        </section>
    );
}

const ProjectItem = ({project}) => {
    return (
        <div className={styles.projectItem} data-aos="fade-up">
            <div className={styles.projectHeader}>
                <img src={project.image} className={styles.projectImage}/>
                <div className={styles.projectLinks}>
                    <a href={project.siteLink} target="_blank">
                        <img src={eyeIcon} />
                    </a>
                    <a href={project.repositoryLink} target="_blank">
                        <img src={githubIcon} />
                    </a>
                </div>
            </div>
            <h3>{project.name}</h3>
            <div className={styles.technologies}>
                {project.technologies.map((technology, index) =>
                    <Technology technology={technology} key={index}/>
                )}
            </div>
        </div>
    )
}

const Technology = ({technology}) => {

    const style = {
        color: technology.textColor,
        backgroundColor: technology.color
    };

    return (
        <span className={styles.technology} style={style}>
            {technology.name}
        </span>
    )
}

export default Projects;