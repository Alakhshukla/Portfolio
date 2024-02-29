import React from "react";
import { getImageUrl } from "../utlis";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alakh Shukla</h1>
        <p className={styles.description}>I'm a Frontend developer. Reach out if you'd like to learn more!</p>
        <a href="mailto:alakhshukla13@gmail.com" className={styles.contactBtn}>Contact Me</a>

      </div>
      <img src={getImageUrl("Alakh2.png")} alt="myImage" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;
