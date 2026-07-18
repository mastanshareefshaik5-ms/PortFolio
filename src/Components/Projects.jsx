function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <div className="project-image">
            <h1>🎓</h1>
          </div>

          <h3>Placement Management System</h3>

          <p>
            Developed a full-stack Placement Management System that automates
            campus recruitment activities. Students can register, manage
            profiles, and apply for jobs, while administrators manage companies,
            job postings, and placement records.
          </p>

          <h4>React • JavaScript • Node.js • Express.js • MySQL</h4>

          <div className="project-buttons">
            <a
              href="https://github.com/mastanshareefshaik5-ms/Placement-Management-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View on GitHub</button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <h1>🏥</h1>
          </div>

          <h3>Secure Your Health</h3>

          <p>
            Developed a healthcare management application for securely managing
            patient records, appointments, and healthcare information with a
            simple and responsive user interface.
          </p>

          <h4>React • JavaScript • Node.js • Express.js • MySQL</h4>

          <div className="project-buttons">
            <a
              href="https://github.com/mastanshareefshaik5-ms/Secure-Your-Health"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View on GitHub</button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;