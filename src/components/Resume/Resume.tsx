'use client';

import styles from './Resume.module.scss';

const experienceData = [
  {
    title: 'Full-Stack Web Developer',
    company: 'RYPT',
    date: '2023 - Present',
    description: [
      'Developed and maintained backend functionalities in Node.js with Express.js, optimizing API efficiency and database communication with MongoDB. Designed and optimized REST APIs, leveraging Postman for testing and debugging.',
      'Implemented advanced MongoDB queries, processing large datasets and structuring information for frontend consumption.',
      'Designed and integrated unit, integration, and end-to-end tests using Mocha, Chai, and Cypress, improving code stability and UI reliability.',
      'Managed and automated Azure DevOps deployment pipelines, ensuring smooth execution of tests and deployments in staging and production environments.',
      'Monitored and troubleshot production issues using Azure Application Insights, reducing response times for critical incidents.',
      'Assisted in debugging and enhancing Angular frontend features, ensuring a seamless user experience.',
      'Collaborated in a cross-functional agile team (Scrum), managing tasks in Jira and working closely with designers via Figma.'
    ],
  },
  {
    title: 'Director and Co-founder',
    company: 'KPN Uruguay',
    date: '2017 - 2021',
    description: [
      'Led a team of four, managing operations for 150+ players in blockchain-based investment strategies.',
      'Defined product requirements and oversaw the development of a Web App, working closely with developers to align it with business and user needs.',
      'Managed financial operations and allocation of digital assets, ensuring sustainable business growth.',
      'Designed and launched the company\'s landing page using WordPress, HTML, and CSS.'
    ],
  },
  {
    title: 'Lead Technician and Lab Manager',
    company: 'NFT Advisor',
    date: '2021 - 2023',
    description: [
      'Led calibration and quality control processes for high-precision land survey equipment (Total Station, Optical Level).',
      'Managed a controlled lab environment, ensuring compliance with industry standards.',
      'Installed and implemented Machine Automation and Control Systems for construction machinery, enhancing accuracy and efficiency.',
      'Acted as the Trimble representative in Uruguay, providing training and technical support to local clients.'
    ],
  },
  {
    title: 'Student Research Assistant',
    company: 'ORT Uruguay University',
    date: '2017- 2018',
    description: [
      'Collaborated in a research team to design and implement a heat control system for a university experiment in the Analog Electronics and Automatic Control course'
    ],
  },
  {
    title: 'Electronics Technician ',
    company: 'BQN',
    date: '2012',
    description: [
      'Assembled and repaired electronic devices for the livestock industry.',
      'Gained hands-on experience in electronics manufacturing and quality control.'
    ],
  }
];

const educationData = [
  {
    title: 'Electronics Engineering',
    institution: 'ORT University Uruguay',
    date: '2017 - 2022',
  },
  {
    title: 'Exchange Program in Electrical System Engineering',
    institution: 'University of Paderborn, Germany',
    date: '2019 - 2020',
  },
  {
    title: 'Full-Stack Web Development',
    institution: 'Udemy',
    date: '2022',
  },
];

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <section className={styles.resumeSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>WORK</h2>
        </div>
        <div className={styles.resumeGrid}>
          {experienceData.map((item, i) => (
            <div key={i} className={styles.resumeItem}>
              <h4>{item.title}</h4>
              <span className={styles.date}>{item.date}</span>
              <p className={styles.institution}>{item.company}</p>
              <ul>
                {item.description.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.resumeSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>EDUCATION</h2>
        </div>
        <div className={styles.resumeGrid}>
          {educationData.map((item, i) => (
            <div key={i} className={styles.resumeItem}>
              <h4>{item.title}</h4>
              <span className={styles.date}>{item.date}</span>
              <p className={styles.institution}>{item.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}