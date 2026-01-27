import "./AboutMe.css";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="about-me" className="about">
      <div className="about-header">
        <h2>{t("aboutMe")}</h2>
      </div>

      <div className="about-grid">
        <div className="about-card about-text">
          <p>{t("aboutMe-p1")}</p>

          <p>{t("aboutMe-p2")}</p>
        </div>

        <div className="about-right">

          <div className="about-card">
            <h3>{t("myEducation")}</h3>

            <div className="education-item">
              <img src="/images/icon-green.png" alt="Icono" />
              <div>
                <p className="education-title">{t("UTNEducation")}</p>
                <p className="education-subtitle">{t("UTNEducation-subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3>{t("mySkills")}</h3>

            <div className="skill">
              <img src="/images/icon-green.png" alt="Backend" />
              <span>Backend</span>
              <div className="bar">
                <div className="fill fill-80" />
              </div>
            </div>

            <div className="skill">
              <img src="/images/icon-green.png" alt="Frontend" />
              <span>Frontend</span>
              <div className="bar">
                <div className="fill fill-60" />
              </div>
            </div>

            <div className="skill">
              <img src="/images/icon-green.png" alt="Gestión" />
              <span>{t("skillManagement")}</span>
              <div className="bar">
                <div className="fill fill-50" />
              </div>
            </div>

            <div className="skill">
              <img src="/images/icon-green.png" alt="Inglés" />
              <span>{t("skillEng")}</span>
              <div className="bar">
                <div className="fill fill-95" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
