import { useEffect, useState } from 'react'
import { window as W } from "@neutralinojs/lib"
import { Route, Switch } from "wouter";

import Home from './pages/Home'
import Info from './pages/Info'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

import Container from './components/Container'
import Header from './components/Header'

export default function App() {

  // This is part of "Eye protection" feature
  // By default window is starting with white background (changing HTML background color does not help)
  // So it causes a flash of white screen when the app is starting
  // I set app window to be hidden by default and then show it after React is loaded
  // Dev tools (if enabled) will show up before the main window is shown
  useEffect(() => {
    W.show()
  }, [])

  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  )
}
