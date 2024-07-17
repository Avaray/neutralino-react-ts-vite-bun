import { app, events, init, window as W } from "@neutralinojs/lib"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try { init() } catch (err) { console.warn('Neutralino.js failed to initialize.', err) }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

events.on('windowClose', () => app.exit());

W.focus()
