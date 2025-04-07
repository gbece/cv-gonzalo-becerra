import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SECTIONS = ["about", "resume", "skills", "contact"];

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    AOS.init({ once: true });
  }, [dark]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    alert("¡Mensaje enviado! Te contactaré pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300 font-outfit scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">Gonzalo Becerra</div>
          <div className="space-x-6 text-sm font-semibold">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-blue-600 transition capitalize"
              >
                {id}
              </button>
            ))}
            <button onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</button>
          </div>
        </div>
      </nav>

      <header className="h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-gray-900 flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">I'm Gonzalo Becerra</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 animate-fade-in" data-aos="fade-up">
          Electronic Engineer & Full-Stack Web Developer. Angular, Node.js, Azure DevOps, MongoDB.
        </p>
        <a
          href="/CV-Gonzalo-Becerra-2025.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-100 transition animate-fade-in"
        >
          <span>📄</span> Download CV
        </a>
      </header>

      <section id="about" className="scroll-mt-24 py-24 px-6 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Small rounded image */}
          <div className="flex-shrink-0">
            <img
              src="/gonzalo.jpg"
              alt="Gonzalo Becerra"
              className="rounded-xl w-40 h-40 object-cover shadow-lg"
            />
          </div>

          {/* Text and details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">About me</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Full-Stack Developer with a background in Electronics Engineering, complemented by experience in embedded systems,
              automation, and control systems. Skilled in backend development with Node.js and frontend with Angular, with a strong focus
              on designing efficient REST APIs, implementing unit, integration, and end-to-end testing, and managing CI/CD pipelines with Azure DevOps.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Additionally, I have experience working with both non-relational databases (MongoDB) and relational databases (MySQL),
              as well as troubleshooting and monitoring production environments through Azure Application Insights.
              Passionate about problem-solving, process optimization, and delivering high-quality software solutions,
              I thrive in cross-functional Agile teams (Scrum) and enjoy continuously expanding my technical expertise.
            </p>

            {/* Details with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt w-4"></i>
                <span><strong>Location:</strong> Montevideo, Uruguay</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-flag w-4"></i>
                <span><strong>Nationality:</strong> Uruguayan & Spanish</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-heart w-4"></i>
                <span><strong>Interests:</strong> Gaming, Blockchain, cooking</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-university w-4"></i>
                <span><strong>Study:</strong> ORT University Uruguay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 bg-gray-200 dark:bg-gray-800 py-24 px-6" data-aos="fade-up">
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

      <section id="resume" className="scroll-mt-24 py-24 px-6" data-aos="fade-up">
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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Electronics Engineering</h3>
                <span className="text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">2017 - 2022</span>
              </div>
              <p>ORT University Uruguay</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Exchange Program in Electrical System Engineering</h3>
                <span className="text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">2019 - 2020</span>
              </div>
              <p>University of Paderborn, Germany</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Full-Stack Web Development</h3>
                <span className="text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">2022</span>
              </div>
              <p>Udemy</p>
            </div>
          </div>
          
          <div className="text-center mb-12 mt-16">
            <h2 className="text-3xl font-bold mb-2">Languages</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">English</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <p className="mt-2 text-right">Fluent</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Spanish</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="mt-2 text-right">Native</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 py-24 px-6 bg-gray-200 dark:bg-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-envelope text-xl" /> Get in touch.
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full bg-gray-100 dark:bg-gray-700 p-3 rounded outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full bg-gray-100 dark:bg-gray-700 p-3 rounded outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="5"
                className="w-full bg-gray-100 dark:bg-gray-700 p-3 rounded outline-none"
                required
              />
              <button
                type="submit"
                className="border-2 border-orange-500 text-white bg-black dark:bg-white dark:text-black px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <p className="mb-6 text-lg">
              Feel free to reach out to me via email or connect with me on LinkedIn.
            </p>
            <ul className="space-y-4 text-base">
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope w-5" /> gbece@proton.me
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt w-5" /> Montevideo, Uruguay
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-linkedin w-5" />
                <a
                  href="https://linkedin.com/in/gbecerra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  linkedin.com/in/gbecerra
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-github w-5" />
                <a
                  href="https://github.com/gbece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  github.com/gbece
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scroll-to-top + Footer */}
      <div className="text-center my-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full shadow-md hover:scale-105 transition"
        >
          ↑
        </button>
      </div>

      <footer className="bg-gray-900 text-white py-6 text-center space-y-4">
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/gbece"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com/in/gbecerra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Gonzalo Becerra. All rights reserved.</p>
      </footer>
    </div>
  );
}
