import { useEffect, useState } from "react";
import { FavoritosContext } from "./FavoritosContext";

function leerFavoritos() {
  try {
    const guardados = localStorage.getItem("libros-favoritos");

    if (!guardados) {
      return [];
    }

    const favoritos = JSON.parse(guardados);

    return Array.isArray(favoritos)
      ? favoritos.filter((id) => typeof id === "string")
      : [];
  } catch {
    return [];
  }
}

function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(leerFavoritos);

  useEffect(() => {
    try {
      localStorage.setItem(
        "libros-favoritos",
        JSON.stringify(favoritos)
      );
    } catch {
      // Si el almacenamiento falla, los favoritos siguen funcionando
      // mientras la aplicación permanezca abierta.
    }
  }, [favoritos]);

  function cambiarFavorito(id) {
    setFavoritos((actuales) => {
      if (actuales.includes(id)) {
        return actuales.filter((favorito) => favorito !== id);
      }

      return [...actuales, id];
    });
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, cambiarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export default FavoritosProvider;