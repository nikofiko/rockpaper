import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Game/>
    </>
  )
}

export default App
