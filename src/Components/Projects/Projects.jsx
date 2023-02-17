import styles from "./Projects.module.css";
import ProjectsList from "../../data/projects";

const Projects = () => {

    const list = Object.values(ProjectsList);

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
        <div className={styles.projectItem}>
            <img src={project.image}/>
            <h3>{project.name}</h3>
            <div className={styles.technologies}>
                {project.technologies.map(technology =>
                    <Technology technology={technology} />
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