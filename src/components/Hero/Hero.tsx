"use client";

import styles from "./Hero.module.scss";
import { Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.heroContent}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                <h1 className={styles.title}>I&apos;m Gonzalo Becerra</h1>
                <p className={styles.subtitle}>
                    I&apos;m a passionate Full-Stack Developer with experience in embedded
                    systems and web technologies. Skilled in Angular, Node.js, and Azure
                    DevOps.
                </p>

                <div className={styles.icons}>
                    <a
                    href="https://github.com/gbece"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    >
                    <Github size={24} />
                    </a>
                    <a
                    href="https://linkedin.com/in/gbecerra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    >
                    <Linkedin size={24} />
                    </a>
                </div>

                <a href="/CV-Gonzalo-Becerra-2025.pdf" download className={styles.button}>
                    Resume <Download size={18} />
                </a>
                </div>
            </div>
        </div>      
    </section>
  );
}