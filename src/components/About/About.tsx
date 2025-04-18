// src/components/About/About.tsx
"use client";

import styles from "./About.module.scss";
import Image from "next/image";
import { MapPin, Flag, Sparkles, GraduationCap } from "lucide-react";
import profileImage from '@/../public/gonzalo.jpg';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={profileImage}
            alt="Gonzalo Becerra profile photo"
            width={180}
            height={180}
            placeholder="blur"
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>About me</h2>
          <p className={styles.paragraph}>
            Full-Stack Developer with a background in Electronics Engineering, complemented by experience in embedded systems,
            automation, and control systems. Skilled in backend development with Node.js and frontend with Angular, with a strong focus
            on designing efficient REST APIs, implementing unit, integration, and end-to-end testing, and managing CI/CD pipelines with Azure DevOps.
          </p>
          <p className={styles.paragraph}>
            Additionally, I have experience working with both non-relational databases (MongoDB) and relational databases (MySQL),
            as well as troubleshooting and monitoring production environments through Azure Application Insights.
            Passionate about problem-solving, process optimization, and delivering high-quality software solutions,
            I thrive in cross-functional Agile teams (Scrum) and enjoy continuously expanding my technical expertise.
          </p>

          <ul className={styles.details}>
            <li>
              <MapPin size={18} />
              <span>
                <strong>Location:</strong> Montevideo, Uruguay
              </span>
            </li>
            <li>
              <Flag size={18} />
              <span>
                <strong>Nationality:</strong> Uruguayan & Spanish
              </span>
            </li>
            <li>
              <Sparkles size={18} />
              <span>
                <strong>Interests:</strong> Gaming, Blockchain, Cooking
              </span>
            </li>
            <li>
              <GraduationCap size={18} />
              <span>
                <strong>Study:</strong> ORT University Uruguay
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}