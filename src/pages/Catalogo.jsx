import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TarjetaSaga from "../components/TarjetaSaga";
import TarjetaLibro from "../components/TarjetaLibro";
import Buscador from "../components/Buscador";
import { sagas } from "../data/sagas";
import { libros } from "../data/libros";

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrarLibros(texto) {
  const textoBuscado = normalizar(texto);

  return libros.filter((libro) => {
    const saga = sagas.find((saga) => saga.id === libro.saga);
    const coincideTitulo = normalizar(libro.titulo).includes(textoBuscado);
    const coincideSaga = normalizar(saga.nombre).includes(textoBuscado);

    return coincideTitulo || coincideSaga;
  });
}

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const navegar = useNavigate();

  const hayBusqueda = busqueda !== "";
  const librosFiltrados = hayBusqueda ? filtrarLibros(busqueda) : [];

  function buscar(texto) {
    const textoLimpio = texto.trim();

    if (textoLimpio !== "") {
      const encontrados = filtrarLibros(textoLimpio);

      if (encontrados.length === 1) {
        navegar(`/libro/${encontrados[0].id}`);
        return;
      }
    }

    setBusqueda(textoLimpio);
  }

  return (
    <main className="contenido-principal">
      <div className="catalogo-encabezado">
        <Buscador onBuscar={buscar} />

        {!hayBusqueda && <h1 id="titulo-sagas">Nuestras sagas</h1>}
      </div>

      {hayBusqueda ? (
        <section aria-labelledby="titulo-resultados">
          <h1 id="titulo-resultados">Resultados para «{busqueda}»</h1>

          <p role="status">
            Libros encontrados: {librosFiltrados.length}
          </p>

          {librosFiltrados.length > 0 ? (
            <div className="lista-libros">
              {librosFiltrados.map((libro) => (
                <TarjetaLibro key={libro.id} libro={libro} />
              ))}
            </div>
          ) : (
            <p>No encontramos libros con esa búsqueda.</p>
          )}
        </section>
      ) : (
        <section aria-labelledby="titulo-sagas">
          <div className="lista-sagas">
            {sagas.map((saga) => {
              const libroPortada = libros.find(
                (libro) => libro.saga === saga.id
              );

              return (
                <TarjetaSaga
                  key={saga.id}
                  nombre={saga.nombre}
                  portada={libroPortada.portada}
                  ruta={`/saga/${saga.id}`}
                />
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}

export default Catalogo;