import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import "./BotonFavorito.css";

function BotonFavorito({ libro }) {
  const { favoritos, cambiarFavorito } = useContext(FavoritosContext);

  const esFavorito = favoritos.includes(libro.id);

  return (
    <button
      type="button"
      className="boton-favorito"
      aria-pressed={esFavorito}
      onClick={() => cambiarFavorito(libro.id)}
    >
      {esFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}
    </button>
  );
}

export default BotonFavorito;