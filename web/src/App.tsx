import { useEffect, useState } from 'react'
import { app, window as W } from "@neutralinojs/lib"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const shutdownApp = () => app.exit();

export default function App() {
  const [count, setCount] = useState(0)

  // This is part of "Eye protection" feature
  // By default window is starting with white background (changing HTML background color does not help)
  // So it causes a flash of white screen when the app is starting
  // I set app window to be hidden by default and then show it after React is loaded
  // Dev tools (if enabled) will show up before the main window is shown
  useEffect(() => {
    W.show()
  }, [])

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
