import "./DevTools.css";
import LogoLoop from "../logoLoop/LogoLoop";
import { FaHtml5, FaBootstrap } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import {
  SiReact,
  SiGithub,
  SiJavascript,
  SiPython,
  SiFigma,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  {
    node: <span className="logo-csharp" />,
    title: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    node: <FaHtml5 />,
    title: "HTML",
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    node: <FaBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com/",
  },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
];

export default function DevTools() {
  const { t } = useTranslation();
  return (
    <section id="dev-tools" className="dev-tools">
      <div className="dev-header">
        <h2>Dev Tools</h2>
      </div>

      <div className="dev-description-wrapper">
        <div className="dev-description">
          <p>{t("devTools")}</p>
        </div>
      </div>

      <div className="dev-logos">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0f766dc9"
          ariaLabel="Developer tools"
        />
      </div>
    </section>
  );
}
