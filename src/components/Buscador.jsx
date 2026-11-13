import { useForm } from "react-hook-form";
import "./Buscador.css";

function Buscador({ onBuscar }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      busqueda: "",
    },
  });

  function buscar(datos) {
    onBuscar(datos.busqueda.trim());
  }

  return (
    <form
      className="buscador"
      role="search"
      onSubmit={handleSubmit(buscar)}
    >
      <label htmlFor="busqueda">
        Encuentra tu próxima lectura
      </label>

      <div className="buscador-campos">
        <input
          id="busqueda"
          type="search"
          placeholder="Escribe una saga o un título de libro"
          {...register("busqueda")}
        />

        <button className="buscador-boton" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default Buscador;