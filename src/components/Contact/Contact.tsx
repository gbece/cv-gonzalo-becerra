import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="section">
        <h2 className="section-title">Get in touch</h2>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className={styles.info}>
            <p>You can reach me via email or LinkedIn:</p>
            <ul>
              <li><strong>Email:</strong> gbecerra94@gmail.com</li>
              <li><strong>Location:</strong> Montevideo, Uruguay</li>
              <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/gbecerra" target="_blank" rel="noopener noreferrer">linkedin.com/in/gbecerra</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/gbece" target="_blank" rel="noopener noreferrer">github.com/gbece</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
