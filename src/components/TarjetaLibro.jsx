import { Link } from "react-router-dom";
import "./TarjetaLibro.css";

function TarjetaLibro({ libro }) {
  return (
    <article className="tarjeta-libro">
      <Link
        to={`/libro/${libro.id}`}
        className="tarjeta-libro-enlace"
      >
        <div className="tarjeta-libro-portada">
          <img
            src={libro.portada}
            alt={`Portada de ${libro.titulo}`}
          />
        </div>

        <div className="tarjeta-libro-contenido">
          <h2>{libro.titulo}</h2>
          <p>{libro.autor}</p>
        </div>
      </Link>
    </article>
  );
}

export default TarjetaLibro;