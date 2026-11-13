import { Link, useParams } from "react-router-dom";
import { libros } from "../data/libros";
import { sagas } from "../data/sagas";
import useLibro from "../hooks/useLibro";
import BotonFavorito from "../components/BotonFavorito";
import "./DetalleLibro.css";

function DetalleLibro() {
  const { id } = useParams();

  const libro = libros.find((libro) => libro.id === id);

  const { datos, cargando, error } = useLibro(libro?.id);

  if (!libro) {
    return (
      <main className="contenido-principal">
        <Link to="/" className="enlace-volver">
          ← Volver al catálogo
        </Link>

        <h1>Libro no encontrado</h1>
        <p>No tenemos ningún libro con ese identificador.</p>
      </main>
    );
  }

  const saga = sagas.find((saga) => saga.id === libro.saga);

  return (
    <main className="contenido-principal">
      <Link
        to={`/saga/${libro.saga}`}
        className="enlace-volver"
      >
        ← Volver a la saga
      </Link>

      <article className="detalle-libro">
        <div className="detalle-libro-portada">
          <img
            src={libro.portada}
            alt={`Portada de ${libro.titulo}`}
          />
        </div>

        <div className="detalle-libro-informacion">
          <h1>{libro.titulo}</h1>
          <p>{libro.autor}</p>
          <p>Saga: {saga.nombre}</p>
          <p>Orden de lectura: {libro.orden}</p>

          <BotonFavorito libro={libro} />

          <h2>Sinopsis</h2>
          <p className="detalle-libro-descripcion">
            {libro.descripcion}
          </p>

          <h2>Edición consultada en Open Library</h2>

          {cargando && (
            <p role="status">Cargando los datos del libro…</p>
          )}

          {error && (
            <p role="alert">
              No se han podido cargar los datos. Comprueba tu
              conexión y vuelve a abrir el libro.
            </p>
          )}

          {datos && (
            <div>
              <p>
                <strong>Editorial: </strong>
                {datos.publishers?.join(", ") || "No disponible"}
              </p>

              <p>
                <strong>Páginas: </strong>
                {datos.number_of_pages || "No disponible"}
              </p>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}

export default DetalleLibro;