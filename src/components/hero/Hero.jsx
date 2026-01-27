import ColorBends from "../background/ColorBends";
import "./Hero.css";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const handleScroll = () => {
    const target = document.getElementById("about-me");
    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <ColorBends
          colors={["#ff9ffc", "#514C73", "#0F766E"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.4}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
        />
      </div>

      <div className="hero-content">
        <h1>{t("home-title")}</h1>
        <p>{t("home-subtitle")}
        </p>
        <button className="hero-button" onClick={handleScroll}>{t("lets-start")}</button>
      </div>
    </section>
  );
};
