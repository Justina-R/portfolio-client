import { useEffect } from "react";
import { createPortal } from "react-dom";
import projectsSp from "../../data/projects-sp";
import projectsEn from "../../data/projects-en";
import "./ProjectModal.css";
import { FaGithub, FaGlobe, FaVideo } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function ProjectModal({ projectId, onClose }) {
  const { t, i18n } = useTranslation();

  const projects = i18n.language === "es" ? projectsSp : projectsEn;

  const project = projects.find((p) => p.id === projectId);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, []);

  if (!project) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕ {t("close")}
        </button>

        <h2 className="modal-title">{project.name}</h2>
        <p className="modal-description">{project.description}</p>

        <div className="modal-tools">
          {project.tools.map((tool, index) => (
            <span key={index} className="tool-badge">
              {tool}
            </span>
          ))}
        </div>

        <div
          className={
            theme == "light" ? "modal-links links-lt" : "modal-links links-dt"
          }
        >
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> {t("githubLink")}</a>
          <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
            <FaGlobe />{t("pageLink")}</a>
          {/* <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
            <FaVideo />{t("videoLink")}</a> */}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}
