import { useState,useEffect } from "react";

export const ResultadoJuego=({humano, computadora, onHandlerOcultar,onHandlerReiniciarJuego,ocultarResultadoParaOtraVez})=>{
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
                                       break;
                                                }
          if (computadora=="Tijera") {console.log('Piedra rompe tijeras, Gana Humano');
                                      setDecision("Piedra rompe tijeras, Gana Humano");
                                      break;
                                      }       
          break;                                         
          case 'Papel':
          if (computadora=="Tijera") {console.log('Tijera rompe papel; Gana computadora');
                                      setDecision("Tijera rompe papel; Gana computadora");  
                                      break;  
                                      }
          if (computadora=="Piedra") {console.log('Papel tapa piedra, Gana Humano');
                                      setDecision('Papel tapa piedra: Gana Humano');  
                                      break;  
                                    }
          break;
          case 'Tijera':
            if (computadora=="Papel") {console.log('Tijera rompe papel; Gana Humano');
                                       setDecision('Tijera rompe papel; Gana Humano');
                                       break;
                                      }
            if (computadora=="Piedra") {console.log('Piedra rompe tijeras, Gana Computer');
                                        setDecision('Piedra rompe tijeras, Gana Computer');
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
        <h2>{humano} Vs {computadora}</h2>
        <h2>Resultado:</h2>
        <h3>{decision}</h3>

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