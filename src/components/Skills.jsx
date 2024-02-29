import React from "react";
import skill from "../Data/Skill.json";
import { getImageUrl } from "../utlis";
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skill.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/* exp */}
      </div>
    </section>
  );
};
export default Skills;
