import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let counter=5;
  let [counter,setCounter]=useState(15);
  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
    console.warn("Added",counter);
  }
  const decValue=()=>{
    counter=counter-1;
    setCounter(counter);
    console.warn("Decreased",counter);
  }

  return (
    <>
      <h1>Hello MegaScarry</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Remove Value</button>
    </>
  )
}

export default App
