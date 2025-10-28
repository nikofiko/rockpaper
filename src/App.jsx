import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Game from './components/Game'
import Winner from './components/Winner'

function App() {
  const [count, setCount] = useState(0)
  const [option, setOption] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <>
      <Header wynik={result} setWynik={setResult}/>
      <Winner choice={option} setChoice={setOption} wynik={result} setWynik={setResult}/>
      <Game choice={option} setChoice={setOption}/>
    </>
  )
}

export default App