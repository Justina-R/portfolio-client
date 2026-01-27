import CardSwap, { Card } from "../cardSwap/CardSwap";
import projectsEn from "../../data/projects-en";
import projectsSp from "../../data/projects-sp";
import "./MyProjects.css";
import ProjectModal from "../projectModal/ProjectModal";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MyProjects() {
  const { t, i18n } = useTranslation();

  const projects = i18n.language === "es" ? projectsSp : projectsEn;

  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="my-projects" className="my-projects">
      <h2 className="projects-title">{t("myProjects")}</h2>
      <div className="projects-content">
        <div className="projects-description">
          <p>{t("projectsIntro")}</p>
        </div>

        <div
          className="projects-cards"
          style={{ height: "600px", position: "relative" }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={4000}
            pauseOnHover={true}
          >
            {projects.map((project) => (
              <Card
                onClick={() => setSelectedProject(project.id)}
                key={project.id}
              >
                <div className="card-header">
                  <img src="images/card-icon.png" alt="Icono de página" />
                  <h3>{project.name}</h3>
                </div>

                <img
                  className="card-image"
                  src={project.image}
                  alt={`Inicio de página de ${project.name}`}
                />
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
