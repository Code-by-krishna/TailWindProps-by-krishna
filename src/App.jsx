import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  //const [count, setCount] = useState(0)


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>TailWind test</h1>
      <Card username="CodebyKrishna" btntext="ClickMe"/>
      <Card username="CodebyAmit" btntext="Read"/>
    </>
    
  )
}

export default App
