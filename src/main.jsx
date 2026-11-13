import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import FavoritosProvider from "./context/FavoritosProvider";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritosProvider>
      <App />
    </FavoritosProvider>
  </BrowserRouter>
);