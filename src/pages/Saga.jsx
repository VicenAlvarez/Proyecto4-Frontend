import { Link, useParams } from "react-router-dom";
import { sagas } from "../data/sagas";
import { libros } from "../data/libros";
import TarjetaLibro from "../components/TarjetaLibro";

function Saga() {
  const { sagaId } = useParams();

  const saga = sagas.find((saga) => saga.id === sagaId);

  if (!saga) {
    return (
      <main className="contenido-principal">
        <Link to="/" className="enlace-volver">
          ← Volver al catálogo
        </Link>

        <h1>Saga no encontrada</h1>
        <p>No tenemos ninguna saga con ese identificador.</p>
      </main>
    );
  }

  const librosDeLaSaga = libros.filter(
    (libro) => libro.saga === sagaId
  );

  return (
    <main className="contenido-principal">
      <Link to="/" className="enlace-volver">
        ← Volver al catálogo
      </Link>

      <h1>{saga.nombre}</h1>

      {librosDeLaSaga.length > 0 ? (
        <div className="lista-libros">
          {librosDeLaSaga.map((libro) => (
            <TarjetaLibro key={libro.id} libro={libro} />
          ))}
        </div>
      ) : (
        <p>Todavía no hay libros añadidos a esta saga.</p>
      )}
    </main>
  );
}

export default Saga;