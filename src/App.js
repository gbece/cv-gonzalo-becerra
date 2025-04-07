import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <header>
        <h1>Gonzalo Becerra</h1>
        <p>Electronic Engineer & Full-Stack Web Developer</p>
        <p className="contact">
          <a href="mailto:gbecerra94@gmail.com">gbecerra94@gmail.com</a> · +598 99 235 484 · <a href="https://github.com/gbece">github.com/gbece</a>
        </p>
      </header>

      <section>
        <h2>Resumen</h2>
        <p>
          Full-Stack Developer con formación en Ingeniería Electrónica, experiencia en sistemas embebidos, automatización y desarrollo de software. 
          Especializado en Node.js, Angular, APIs REST, testing y CI/CD con Azure DevOps. Disfruto trabajar en equipos ágiles (Scrum) y seguir aprendiendo constantemente.
        </p>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul>
          <li><strong>Frontend:</strong> Angular, React, HTML, CSS</li>
          <li><strong>Backend & API:</strong> Node.js, Express.js, REST API</li>
          <li><strong>Bases de Datos:</strong> MongoDB, MySQL</li>
          <li><strong>DevOps & Cloud:</strong> Azure DevOps, Application Insights, Linux, macOS</li>
          <li><strong>Testing:</strong> Mocha, Chai, Jest, Cypress, Postman</li>
          <li><strong>Herramientas:</strong> Git, GitHub, Jira, Figma, Trello</li>
          <li><strong>Lenguajes:</strong> JavaScript, Python, Java, C</li>
        </ul>
      </section>

      <section>
        <h2>Experiencia Laboral</h2>
        <div className="job">
          <h3>Full-Stack Web Developer · RYPT <span>2023 - Presente</span></h3>
          <ul>
            <li>Desarrollo backend con Node.js, optimización de APIs REST.</li>
            <li>Consultas complejas en MongoDB y estructuración de datos.</li>
            <li>Tests unitarios, integración y e2e (Mocha, Chai, Cypress).</li>
            <li>Automatización de despliegues con Azure DevOps.</li>
            <li>Mejoras en frontend Angular y monitoreo con Application Insights.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Director y Co-founder · NFT Advisor <span>2021 - 2023</span></h3>
          <ul>
            <li>Liderazgo de operaciones para 150+ usuarios.</li>
            <li>Definición de producto, colaboración con desarrolladores.</li>
            <li>Desarrollo de landing page en WordPress + HTML/CSS.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Lead Technician & Lab Manager · KPN Uruguay <span>2017 - 2021</span></h3>
          <ul>
            <li>Calibración de equipos topográficos de alta precisión.</li>
            <li>Automatización de maquinaria para construcción.</li>
            <li>Representante oficial de Trimble en Uruguay.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Student Research Assistant · ORT Uruguay <span>2017 - 2018</span></h3>
          <ul>
            <li>Desarrollo de sistema de control de temperatura para experimento académico.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Técnico en Electrónica · BQN <span>2012</span></h3>
          <ul>
            <li>Montaje y reparación de dispositivos electrónicos para el agro.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Educación</h2>
        <ul>
          <li>Ingeniería Electrónica – Universidad ORT Uruguay (2017–2022)</li>
          <li>Intercambio – University of Paderborn, Alemania (2019–2020)</li>
          <li>Full-Stack Web Development – Udemy (2022)</li>
        </ul>
      </section>

      <section>
        <h2>Idiomas</h2>
        <ul>
          <li>Español – Nativo</li>
          <li>Inglés – Avanzado</li>
        </ul>
      </section>
    </div>
  );
}

export default App;