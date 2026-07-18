import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-left">
        <p className="intro">Hello, I'm</p>

        <h1>Mastan Shareef</h1>

        <h2>Frontend React Developer</h2>

        <p className="hero-text">
          Passionate about building responsive, modern, and user-friendly web
          applications using React, JavaScript, HTML, CSS, Node.js,
          Express.js, and MySQL. I enjoy solving real-world problems through
          clean and efficient code.
        </p>

        <div className="hero-buttons">
          <a
            href={`${import.meta.env.BASE_URL}Shaik_Mastan_Shareef_ATS_Resume.pdf`}
            download="Shaik_Mastan_Shareef_ATS_Resume.pdf"
          >
            <button>
              <FaDownload /> Download Resume
            </button>
          </a>

          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/mastanshareefshaik5-ms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mastan-shareef-shaik-077010423/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={profile}
          alt="Mastan Shareef"
          className="profile-image"
        />
      </div>
    </motion.section>
  );
}

export default Hero;