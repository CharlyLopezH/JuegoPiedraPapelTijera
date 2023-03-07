import { useState } from "react";
import "./helpers/IncrementaValor";
import "./App.css";
import IncrementaValor from "./helpers/IncrementaValor";
import ResultadoJuego from "./components/ResultadoJuego";
import { SeleccionCompu } from "./components/SeleccionCompu";

function App() {
  const [opcionSelect, setOpcionSelect] = useState("");
  const [mostrarBotonDecis, setMostrarBotonDecis] = useState(true);

  const onHandlerOcultar = () => {
    setMostrarBotonDecis(false);
  };

  const onHandlerReiniciarJuego =()=> {
    setMostrarBotonDecis(true);
    setOpcionSelect("");
  }

  return (
    <div className="App">
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      {mostrarBotonDecis && (
        <div className="card">
          <p className="read-the-docs">Selecciona una opción</p>

          <button onClick={(e) => setOpcionSelect("Piedra")}>Piedra</button>
          <button onClick={(e) => setOpcionSelect("Papel")}>Papel</button>
          <button onClick={(e) => setOpcionSelect("Tijera")}>Tijera</button>
        </div>
      )}
      {opcionSelect && (
        <>
          <h2>Humano Elige: {opcionSelect}</h2>
          <SeleccionCompu
            opcionSelect={opcionSelect}
            onHandlerOcultar={onHandlerOcultar}
            onHandlerReiniciarJuego={onHandlerReiniciarJuego}
          />
        </>
      )}
    </div>
  );
}
export default App;
