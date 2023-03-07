//React APP ejemplo de llamar y usar resultado de una función externa.
import { useState } from 'react'
import './helpers/IncrementaValor';
import './App.css'
import IncrementaValor from './helpers/IncrementaValor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(e)=>{IncrementaValor(count);
                                console.log(e.detail);
                                setCount(count+e.detail);
                                }}>          
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
