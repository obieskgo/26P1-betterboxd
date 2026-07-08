import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Moviecard from "./components/Moviecard.jsx"
import Home from "./pages/Home.jsx"

function App() {
  
  return (
    <Home />
  );
}

function Text({jamal}){
  return(
    <div>
      <p>{jamal}</p>
    </div>
  );
}

export default App