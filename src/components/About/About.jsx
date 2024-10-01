import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <div className={styles.imageDiv}> */}
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        {/* </div> */}
        {/* <div> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p>
              Hi, I’m Jyotiraditya, born in Gaya, Bihar, and raised in Ghaziabad. I completed my high school at Modern School, 
              Barakhamba Road, Delhi, and later pursued my Bachelor's in Electrical and Electronics from the Manipal Institute of Technology, 
              Udupi, Karnataka. After graduation, I spent 2.5 years at Falabella, working in various roles and gaining hands-on experience in 
              software development.
              </p>
              <br></br>
              <p>
              Currently, I am a Master's student at NJIT in Newark, USA, specializing in Software Engineering. I am passionate about 
              frontend development, which allows me to express my creativity and overcome my not-so-great drawing skills, while still 
              exploring my interest in art. I love solving complex problems, especially when it comes to math, and constantly seek 
              opportunities to learn and grow.
              </p>
              <br></br>
              <p>
              Outside of tech, I’m a big fan of Real Madrid and enjoy following their journey in the world of football. 
              Feel free to explore my work or reach out if you'd like to collaborate on exciting projects!

              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs using Javascript and NodeJS
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>QA Automation</h3>
              <p>
                I have designed multiple testing frameworks using Cypress Framework.
              </p>
            </div>
          </li> */}
        </ul>
        {/* </div> */}
        
      </div>
    </section>
  );
};