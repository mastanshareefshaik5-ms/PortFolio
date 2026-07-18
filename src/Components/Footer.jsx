import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h3>Mastan Shareef</h3>

      <p>Frontend React Developer</p>

      <div className="footer-icons">

        <a
          href="https://github.com/mastanshareefshaik5-ms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/mastan-shareef-shaik-077010423/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Mastan Shareef • Made with{" "}
        <FaHeart color="red" /> using React
      </p>

    </footer>
  );
}

export default Footer;