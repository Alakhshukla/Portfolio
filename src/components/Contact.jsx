import React from 'react'
import { getImageUrl } from '../utlis';

import styles from "./Contact.module.css";

 const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("email.png")} alt="email icon" />
                <a href="alakhshukla13@gmail.com">alakhshukla13@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("linkedin.png")} alt="linkedin icon" />
                <a href="linkedin.com/in/alakh-shukla-68b4b7229">linkedin.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("github.png")} alt="email icon" />
                <a href="https://github.com/Alakhshukla">GitHub.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact;