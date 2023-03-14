import { useState,useEffect } from "react";
import "../functions/moverMarcador";
import moverMarcador from "../functions/moverMarcador";

export const ResultadoJuego=({humano, computadora, onHandlerOcultar,onHandlerReiniciarJuego,ocultarResultadoParaOtraVez,sumarPuntoHumano,sumarPuntoComputer})=>{
    console.log("Selección humanoide: "+humano);
    console.log("Seleccion computadora: "+computadora);

    const [decision, setDecision] = useState("Empate");

    const onHandlerNuevoJuego=()=>{
      console.log('Preparar Nuevo Juego');
      //setMostrarBotonDecis(false);
      onHandlerReiniciarJuego();
      ocultarResultadoParaOtraVez();
      //

    }

    useEffect(() => {
        //Runs only on the first render
        console.log(humano+" vs "+computadora);
        comparaciones();
        onHandlerOcultar();
      }, []);

      const comparaciones = () => {
        console.log("Empezando a comparar para decidir");
        switch (humano) {
          case 'Piedra':
          if (computadora=="Papel") {console.log('Papel tapa piedra; Gana computadora');
                                      setDecision("Papel tapa piedra; Gana computadora"); 
                                      console.log('Anotar Punto a Compu');    
                                      sumarPuntoComputer();                                  
                                      break;
                                                }
          if (computadora=="Tijeras") {console.log('Piedra rompe Tijeras, Gana Humano');
                                      setDecision("Piedra rompe Tijeras, Gana Humano");
                                      console.log('Anotar Punto a Human');
                                      sumarPuntoHumano();
                                      break;
                                      }       
          break;                                         
          case 'Papel':
          if (computadora=="Tijeras") {console.log('Tijeras rompe papel; Gana computadora');
                                      setDecision("Tijeras rompe papel; Gana computadora");       
                                      sumarPuntoComputer();                                                                       
                                      break;  
                                      }
          if (computadora=="Piedra") {console.log('Papel tapa piedra, Gana Humano');
                                      setDecision('Papel tapa piedra: Gana Humano');  
                                      sumarPuntoHumano();
                                      console.log('Anotar Punto a Human');
                                      break;  
                                    }
          break;
          case 'Tijeras':
            if (computadora=="Papel") {console.log('Tijeras rompe papel; Gana Humano');
                                       setDecision('Tijeras rompe papel; Gana Humano');
                                       console.log('Anotar Punto a Human');
                                       sumarPuntoHumano();
                                       break;
                                      }
            if (computadora=="Piedra") {console.log('Piedra rompe Tijeras, Gana Computer');
                                        setDecision('Piedra rompe Tijeras, Gana Computer');
                                        console.log('Anotar Punto a Compu');
                                        sumarPuntoComputer();
                                        break;
                                      }                      
          break;
          default:
            console.log('empate');
            setDecision("Empate");
        } 
      }

    return(        
        <>        
        {/* <h2>{humano} Vs {computadora}</h2> */}
        <h2 className="h2"> {decision}</h2>

        <button onClick={onHandlerNuevoJuego}>
          Otra vez
        </button>

        <p>
        
        {/* <button onClick={onHandlerOcultar}>
            Apagar
        </button> */}
        </p>

        </>
    )
}
export default ResultadoJuego