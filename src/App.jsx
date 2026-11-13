import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Catalogo from "./pages/Catalogo";
import Saga from "./pages/Saga";
import DetalleLibro from "./pages/DetalleLibro";
import Favoritos from "./pages/Favoritos";

function App() {
  const ubicacion = useLocation();

  return (
    <>
      <Cabecera />

      <Routes>
        <Route
          path="/"
          element={<Catalogo key={ubicacion.key} />}
        />

        <Route path="/saga/:sagaId" element={<Saga />} />
        <Route path="/libro/:id" element={<DetalleLibro />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
}

export default App;