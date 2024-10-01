import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to my Portfolio </h1>
          <p className={styles.description}>
            Hi welcome here this is a beta version, we will soon add more features to this portfolio, till then it is what it is.
          </p>
          <a href="mailto:jyotiraditya03@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    )
}
   