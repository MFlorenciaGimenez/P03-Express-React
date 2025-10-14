import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <section className="sakura">
          <h4>Sakura</h4>
          <p>Experience the art of japanese Cuisine</p>
        </section>

        <section className="contact">
          <h4>Contact</h4>
          <p>123 Flavor St, Baltimore</p>
          <p>contact@sakura.com</p>
          <p>1(667)1234-5678</p>
        </section>

        <section className="working-hours">
          <h4>Hours</h4>
          <p>Mon-Fri 5pm-10pm</p>
          <p>Sat-Sun 3pm-12am</p>
        </section>

        <section className="social">
          <h4>Follow Us</h4>
          <div className="social-links">
            {/* 1. Facebook */}
            <a
              href="https://www.facebook.com/florencia.gimenez.73307/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>

            {/* 2. Instagram */}
            <a
              href="https://www.instagram.com/floorgimenezz1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>

            {/* 4. LinkedIn (¡Nuevo!) */}
            <a
              href="https://www.linkedin.com/in/florencia-gimenez-745737299"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </section>
      </div>
      <hr />
      <p className="copyright">&copy; 2025 Sakura. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
