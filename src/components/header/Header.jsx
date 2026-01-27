import React from "react";
import StaggeredMenu from "./StaggeredMenu";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  
  const menuItems = [
    { id: "hero", label: t("home"), link: "/" },
    { id: "about-me", label: t("aboutMe"), link: "/about" },
    { id: "my-projects", label: t("myProjects"), link: "/projects" },
    { id: "dev-tools", label: "Dev Tools", link: "/contact" },
    { id: "contact", label: t("contact"), link: "/contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/Justina-R" },
    { label: "LinkedIn", link: "https://linkedin.com/in/tuusuario" },
  ];

  return (
    <div>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#000000"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#514C73"]}
        logoUrl="icon-blue.png"
        accentColor="#514C73"
        isFixed
      />
    </div>
  );
}
