import { useState } from "react";
import obtenerElemento from "../functions/obtenerElemento";
import ResultadoJuego from "./ResultadoJuego";

export const SeleccionCompu=({opcionSelect, onHandlerOcultar,onHandlerReiniciarJuego,sumarPuntoHumano,sumarPuntoComputer})=>{

    const parSeleccionHumano = opcionSelect;
    const [seleccionAleatoria, setSeleccionAleatoria] = useState("");
    const [ocultarBotonContinuar,setOcultarBotonContinuar]=useState(false);     


    const ocultarResultadoParaOtraVez = () => {
        setSeleccionAleatoria("");
        setOcultarBotonContinuar(false);        
    }


    return(
        <>


        {ocultarBotonContinuar==false && (
        <button onClick={(e)=>{setSeleccionAleatoria(obtenerElemento());                               
                               setOcultarBotonContinuar(true);
                               
                         }}>  Continuar{">>"}
        </button>
        )}
        {ocultarBotonContinuar==true && (
        <>
        <h2>
            <div>Computadora: {seleccionAleatoria}</div>             
        </h2>     
            <ResultadoJuego humano={parSeleccionHumano} 
                            computadora={seleccionAleatoria} 
                            onHandlerOcultar={onHandlerOcultar} 
                            onHandlerReiniciarJuego={onHandlerReiniciarJuego}
                            ocultarResultadoParaOtraVez={ocultarResultadoParaOtraVez}
                            sumarPuntoHumano={sumarPuntoHumano}
                            sumarPuntoComputer={sumarPuntoComputer}
            />         
         </>
        )
        }

        </>
    )
}
export default SeleccionCompu