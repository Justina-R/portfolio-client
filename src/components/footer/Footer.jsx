import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="sm-logo-footer">
            <img
              src={theme == "light" ? "/images/icon-blue.png" : "/images/icon-white.png"}
              alt="Justina Rey"
              className="sm-logo-footer-img"
              draggable={false}
            />
            <span className="sm-logo-footer-text">Justina Rey</span>
          </div>

          <span className="footer-subtitle">{t("fullStack")}</span>
        </div>

        <div className="footer-right">
          <a href="https://github.com/Justina-R" className="social-item">
            <FaGithub />
            <span>Justina-R</span>
          </a>

          <div className="social-item">
            <FaEnvelope />
            <span>justina.rey2602@gmail.com</span>
          </div>

          <a href="https://www.linkedin.com/in/justina-rey-2602/" className="social-item">
            <FaLinkedin />
            <span>Justina Rey</span>
          </a>
        </div>
      </div>
    </footer>
  );
}