import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritosContext } from "../context/FavoritosContext";
import { libros } from "../data/libros";
import TarjetaLibro from "../components/TarjetaLibro";

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

  const librosFavoritos = libros.filter((libro) =>
    favoritos.includes(libro.id)
  );

  return (
    <main className="contenido-principal">
      <Link to="/" className="enlace-volver">
        ← Volver al catálogo
      </Link>

      <h1>Mis favoritos</h1>

      {librosFavoritos.length > 0 ? (
        <div className="lista-libros">
          {librosFavoritos.map((libro) => (
            <TarjetaLibro key={libro.id} libro={libro} />
          ))}
        </div>
      ) : (
        <p>Todavía no has añadido ningún libro a favoritos.</p>
      )}
    </main>
  );
}

export default Favoritos;