//Ejemplo de como llamar a un componente (tipo botón) y mandarle una función para que 
//Desde el componente hijo se ejecute
import { useState } from 'react'
import './App.css'
import { BotonSumar } from './components/BotonSumar';
import {decrementar} from './functions/decrementar';


function App() {
  const [count, setCount] = useState(0)
  const valorIncrement = 1;

  const incrementaCont = () => setCount(count+valorIncrement);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Counter = {count}</h1>
      <div className="card">
        {/* <button onClick={incrementaCont}>          
          count is {count}
        </button> */}
        <BotonSumar  incrementaCont={incrementaCont} cont={count}/>
        
        
        {/* Ojo, lo siguiente Funciona con "setCount(decrementar)" así nada más*/}
        <button onClick={(e)=>{setCount(decrementar(count)) 
                        }}>          
          Restar
        </button>


      </div>
    </div>
  )
}

export default App
