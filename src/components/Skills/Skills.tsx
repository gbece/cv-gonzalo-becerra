'use client';

import styles from './Skills.module.scss';

type Skill = {
  name: string;
  level: number;
  max?: number;
};

type SkillGroup = {
  name: string;
  skills: Skill[];
};

const skillsData: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      { name: 'Typescript', level: 9 },
      { name: 'Angular', level: 9 },
      { name: 'HTML', level: 9 },
      { name: 'CSS', level: 9 },
      { name: 'React', level: 6 }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      { name: 'Node.js', level: 9 },
      { name: 'Express.js', level: 8 },
      { name: 'REST APIs', level: 9 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', level: 9 },
      { name: 'MySQL', level: 8 },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Azure DevOps (CI/CD, Pipelines)', level: 9 },
      { name: 'Linux', level: 7 }
    ],
  },
  {
    name: 'Testing & QA',
    skills: [
      { name: 'Mocha', level: 9 },
      { name: 'Chai', level: 9 },
      { name: 'Jest', level: 8 },
      { name: 'Cypress', level: 8 },
      { name: 'Postman', level: 9 },
    ],
  },
  {
    name: 'Tools & Workflow',
    skills: [
      { name: 'Jira', level: 9 },
      { name: 'Trello', level: 8 },
      { name: 'Figma', level: 8 },
    ],
  },
  {
    name: 'Version Control',
    skills: [
      { name: 'Git', level: 9 },
      { name: 'GitHub', level: 8 }
    ],
  },
  {
    name: 'Lenguajes',
    skills: [
      { name: 'JavaScript', level: 9 },
      { name: 'Python', level: 8 },
      { name: 'Java', level: 7 },
      { name: 'C', level: 7 }
    ],
  }
];

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="resume">
      <div className={styles.skillsContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>SKILLS</h2>
        </div>
        <div className={styles.skillsGrid}>
          {skillsData.map((group, index) => (
            <div key={index} className={styles.skillGroup}>
              <h3>{group.name}</h3>
              {group.skills.map((skill, i) => (
                <div key={i} className={styles.skill}>
                  <span>{skill.name}</span>
                  <div className={styles.barContainer}>
                    <div
                      className={styles.bar}
                      style={{ width: `${(skill.level / (skill.max ?? 10)) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>      
    </section>
  );
}