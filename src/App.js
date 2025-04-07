import React, { useEffect, useState } from "react";

const SECTIONS = ["about", "resume", "skills", "contact"];

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300 font-sans scroll-smooth">
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">Gonzalo Becerra</div>
          <div className="space-x-6 text-sm font-semibold">
            {SECTIONS.map(id => (
              <a key={id} href={`#${id}`} className="hover:text-blue-600 transition">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button onClick={() => setDark(!dark)}>
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <header className="h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">I'm Gonzalo Becerra</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300">
          Electronic Engineer & Full-Stack Web Developer. Angular, Node.js, Azure DevOps, MongoDB.
        </p>
        <a
          href="/cv.pdf"
          download
          className="mt-6 inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          📄 Download CV
        </a>
      </header>

      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About me</h2>
        <p className="leading-relaxed text-lg mb-4">
          Full-Stack Developer with a background in Electronics Engineering, complemented by experience in embedded systems,
          automation, and control systems. Skilled in backend development with Node.js and frontend with Angular, with a strong focus
          on designing efficient REST APIs, implementing unit, integration, and end-to-end testing, and managing CI/CD pipelines with Azure DevOps.
        </p>
        <p className="leading-relaxed text-lg">
          Additionally, I have experience working with both non-relational databases (MongoDB) and relational databases (MySQL),
          as well as troubleshooting and monitoring production environments through Azure Application Insights. Passionate about
          problem-solving, process optimization, and delivering high-quality software solutions, I thrive in cross-functional Agile
          teams (Scrum) and enjoy continuously expanding my technical expertise.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📱</span>
            <span>+598 99 235 484</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✉️</span>
            <span>gbecerra94@gmail.com</span>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-gray-200 dark:bg-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <p className="text-lg">Angular, React, HTML, CSS</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Backend & API</h3>
              <p className="text-lg">Node.js, Express.js, REST API</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Databases</h3>
              <p className="text-lg">MongoDB, MySQL</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">DevOps & Cloud</h3>
              <p className="text-lg">Azure DevOps (CI/CD, Pipelines, Application Insights), Linux, macOS</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Testing & QA</h3>
              <p className="text-lg">Mocha, Chai, Jest, Cypress, Postman</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Version Control</h3>
              <p className="text-lg">Git, GitHub</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Tools & Workflow</h3>
              <p className="text-lg">Azure DevOps (Tasks), Jira, Trello, Figma</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Languages</h3>
              <p className="text-lg">JavaScript, Python, Java, C</p>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Work Experience</h2>
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Full-Stack Developer at RYPT</h3>
              <span className="text-gray-600 dark:text-gray-400">2023 - Present</span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed and maintained backend functionalities in Node.js with Express.js, optimizing API efficiency and database communication with MongoDB.</li>
              <li>Implemented advanced MongoDB queries, processing large datasets and structuring information for frontend consumption.</li>
              <li>Designed and integrated unit, integration, and end-to-end tests using Mocha, Chai, and Cypress, improving code stability and UI reliability.</li>
              <li>Managed and automated Azure DevOps deployment pipelines, ensuring smooth execution of tests and deployments in staging and production environments.</li>
              <li>Monitored and troubleshot production issues using Azure Application Insights, reducing response times for critical incidents.</li>
              <li>Assisted in debugging and enhancing Angular frontend features, ensuring a seamless user experience.</li>
              <li>Collaborated in a cross-functional agile team (Scrum), managing tasks in Jira and working closely with designers via Figma.</li>
            </ul>
          </div>
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Director and Co-founder at NFT Advisor</h3>
              <span className="text-gray-600 dark:text-gray-400">2021 - 2023</span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Led a team of four, managing operations for 150+ players in blockchain-based investment strategies.</li>
              <li>Defined product requirements and oversaw the development of a Web App, working closely with developers to align it with business and user needs.</li>
              <li>Managed financial operations and allocation of digital assets, ensuring sustainable business growth.</li>
              <li>Designed and launched the company's landing page using WordPress, HTML, and CSS.</li>
            </ul>
          </div>
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Lead Technician and Lab Manager at KPN Uruguay</h3>
              <span className="text-gray-600 dark:text-gray-400">2017 - 2021</span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Led calibration and quality control processes for high-precision land survey equipment (Total Station, Optical Level).</li>
              <li>Managed a controlled lab environment, ensuring compliance with industry standards.</li>
              <li>Installed and implemented Machine Automation and Control Systems for construction machinery, enhancing accuracy and efficiency.</li>
              <li>Acted as the Trimble representative in Uruguay, providing training and technical support to local clients.</li>
            </ul>
          </div>
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Student Research Assistant at ORT Uruguay University</h3>
              <span className="text-gray-600 dark:text-gray-400">2017 - 2018</span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Collaborated in a research team to design and implement a heat control system for a university experiment in the Analog Electronics and Automatic Control course.</li>
            </ul>
          </div>
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Electronics Technician at BQN</h3>
              <span className="text-gray-600 dark:text-gray-400">2012</span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Assembled and repaired electronic devices for the livestock industry.</li>
              <li>Gained hands-on experience in electronics manufacturing and quality control.</li>
            </ul>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">Electronics Engineering</h3>
                <span className="text-gray-600 dark:text-gray-400">2017 - 2022</span>
              </div>
              <p>ORT University Uruguay</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">Exchange Program in Electrical System Engineering</h3>
                <span className="text-gray-600 dark:text-gray-400">2019 - 2020</span>
              </div>
              <p>University of Paderborn, Germany</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">Full-Stack Web Development</h3>
                <span className="text-gray-600 dark:text-gray-400">2022</span>
              </div>
              <p>Udemy</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Languages</h2>
          <ul className="space-y-2 text-lg">
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="mb-6 text-lg">You can reach me through LinkedIn or GitHub below.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/gbece" target="_blank" className="text-2xl hover:text-blue-500">🐙 GitHub</a>
            <a href="https://linkedin.com/in/gbecerra" target="_blank" className="text-2xl hover:text-blue-500">🔗 LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
