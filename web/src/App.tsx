import { useState } from 'react'
import { app } from "@neutralinojs/lib"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const shutdownApp = () => app.exit();

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={shutdownApp}>Shutdown</button>
    </>
  )
}
