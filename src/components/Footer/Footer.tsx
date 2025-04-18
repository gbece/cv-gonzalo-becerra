import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://github.com/gbece"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/gbecerra"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Gonzalo Becerra. All rights reserved.
      </p>
    </footer>
  );
}
