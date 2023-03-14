import { useState } from "react";
import "./helpers/IncrementaValor";
import "./App.css";
import IncrementaValor from "./helpers/IncrementaValor";
import ResultadoJuego from "./components/ResultadoJuego";
import { SeleccionCompu } from "./components/SeleccionCompu";
import Marcador from "./components/Marcador";


function App() {
  const [opcionSelect, setOpcionSelect] = useState("");
  const [mostrarBotonDecis, setMostrarBotonDecis] = useState(true);
  const [contPtsHumano,setContPtsHumano]=useState(0);
  const [contPtsComputer, setContPtsComputer]=useState(0);
  const [cuentaJuegos, setCuentaJuegos]=useState(1);
  

  const sumarPuntoHumano =()=>{
    console.log('Anotar Punto a HUMAN');
    setContPtsHumano(contPtsHumano+1);
  }

  const sumarPuntoComputer =()=>{
    setContPtsComputer(contPtsComputer+1);
  }


  const onHandlerOcultar = () => {
    setMostrarBotonDecis(false);
    setCuentaJuegos(cuentaJuegos+1);
  };

  const onHandlerReiniciarJuego =()=> {
    setMostrarBotonDecis(true);
    setOpcionSelect("");
  }

  return (
    <div className="App">
      
      <h2> Bienvendo al Juego Piedra, Papel, Tijeras</h2>
      <div>Contador Juegos {cuentaJuegos}</div> 
      <div>Marcador: </div>
      <h2>
      <div>Humano: {contPtsHumano} Vs Compu: {contPtsComputer} </div>
      </h2>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>        
      </div>     

      {mostrarBotonDecis && (
        <div className="card">
          <div>Juegos: </div>
          <p className="read-the-docs">Selecciona una opción</p>
          
          <button onClick={(e) => setOpcionSelect("Piedra")}>Piedra</button>
          <button onClick={(e) => setOpcionSelect("Papel")}>Papel</button>
          <button onClick={(e) => setOpcionSelect("Tijeras")}>Tijeras</button>
        </div>
      )}
      {opcionSelect && (
        <>
          <h2>
          <div>Humano: {opcionSelect}</div>          
          </h2>

          <SeleccionCompu
            opcionSelect={opcionSelect}
            onHandlerOcultar={onHandlerOcultar}
            onHandlerReiniciarJuego={onHandlerReiniciarJuego}      
            sumarPuntoHumano={sumarPuntoHumano}      
            sumarPuntoComputer={sumarPuntoComputer}
          />        
        </>
      )}
    </div>
  );
}
export default App;
