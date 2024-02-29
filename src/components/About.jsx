import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../utlis";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("Aboutt.png")} alt="AboutImg" className={styles.aboutImg} />
      </div>

      <ul className={styles.aboutItems}>
        <li className={styles.item}>
          <img src={getImageUrl("aboutFrontend.png")} alt="FrontendImg" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I'm a frontend developer with experience in building responsive
              and optimized sites
            </p>
          </div>
        </li>
        <li className={styles.item}>
          <img src={getImageUrl("aboutJava.png")} alt="FrontendImg" />
          <div className={styles.aboutItemText}>
            <h3>Java+DSA</h3>
            <p>3 star Coder on HackerRank</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
