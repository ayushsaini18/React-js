import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Card'
import Card from './Components/Card'
 
let newObj={
  username:"Ayush",
  subject:"React"
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
   
    <Card username="Girl_1" btnTEXT="VISIT ME"/>
    <Card username="Girl_2" btnTEXT="CLICK ME"/>
    <Card username="Girl_3" />
    {/* <Card username="Ayush" myobj={newObj}/> */}
    </>
  )
}

export default App
