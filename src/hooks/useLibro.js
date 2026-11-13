import { useEffect, useState } from "react";

function useLibro(id) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    async function cargarLibro() {
      setCargando(true);
      setError("");
      setDatos(null);

      try {
        const respuesta = await fetch(
          `https://openlibrary.org/books/${id}.json`,
          { signal: controller.signal }
        );

        if (!respuesta.ok) {
          throw new Error("No se han podido obtener los datos del libro.");
        }

        const resultado = await respuesta.json();

        if (!controller.signal.aborted) {
          setDatos(resultado);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarLibro();

    return () => controller.abort();
  }, [id]);

  return { datos, cargando, error };
}

export default useLibro;