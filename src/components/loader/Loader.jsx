import MetaBalls from "../metaBalls/MetaBalls";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="meta-loader-wrapper">
        <MetaBalls
          className="meta-balls-div"
          color="#18a89cae"
          cursorBallColor="#514c73bb"
          cursorBallSize={1.8}
          ballCount={20}
          animationSize={25}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.08}
          clumpFactor={1.5}
          speed={0.3}
        />
        <p className="loader-text">Cargando...</p>
    </div>
  );
}
