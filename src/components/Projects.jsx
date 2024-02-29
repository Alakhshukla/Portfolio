import React from 'react'
import projects from "../Data/projects.json"
import { getImageUrl } from '../utlis'
import styles from "./Projects.module.css";

 const Projects = () => {
  return (
  <section  className={styles.container} id='projects'>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.Projects}>
        {projects.map((project, id) => {
            return <div className={styles.imageContainer} key={id}>
                <img src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} className={styles.image}/>
                <h3 className={styles.imageTitle}>{project.title}</h3>
                <p className={styles.imageDescription}>{project.description}</p>
                <ul className={styles.skills}>
                {project.skills.map((skill, id)=>{
                   return(<li key={id} className={styles.skill}>{skill}</li>
                   );
                })}
                </ul>
                <div className={styles.links}>
                    <a href={project.source} className={styles.link}>Source</a>
                </div>
            </div>
        })}
    </div>
  </section>
  )
}

export default Projects;