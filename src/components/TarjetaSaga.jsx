import { Link } from "react-router-dom";
import "./TarjetaSaga.css";

function TarjetaSaga({ nombre, portada, ruta }) {
  return (
    <article className="tarjeta-saga">
      <Link to={ruta} className="tarjeta-saga-enlace">
        <div className="tarjeta-saga-portada">
          <img src={portada} alt={`Portada de ${nombre}`} />
        </div>

        <div className="tarjeta-saga-contenido">
          <h2>{nombre}</h2>
        </div>
      </Link>
    </article>
  );
}

export default TarjetaSaga;