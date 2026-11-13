import { Link, NavLink } from "react-router-dom";
import "./Cabecera.css";

function Cabecera() {
  return (
    <header className="cabecera">
      <div>
        <Link to="/" className="cabecera-titulo">
          Biblioteca
        </Link>
        <p className="cabecera-descripcion">
          Una selección de las mejores sagas en español.
        </p>
      </div>

      <nav className="cabecera-navegacion" aria-label="Navegación principal">
        <NavLink to="/" end>
          Catálogo
        </NavLink>

        <NavLink to="/favoritos">
          Favoritos
        </NavLink>
      </nav>
    </header>
  );
}

export default Cabecera;