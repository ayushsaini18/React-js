import { useState,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const [length,setLength]=useState(8);
const[numberAllowed,setNumberAllowed]=useState(false);
const[charAllowed,setCharAllowed]=useState(false);
const[password,setPassword]=useState("");

//useRef Hook
const passwordRef=useRef(null);

const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="1234567890"
  if(charAllowed) str+="@#$%&+-/!{}[]"

  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char);
    
  }
  
  setPassword(pass)


},[length,numberAllowed,charAllowed,setPassword])

const copyPassword=useCallback(()=>{
  passwordRef.current?.select();  // use to highlight the content which is get coppied
  passwordRef.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText([password]);  // Used to copy


},[password])

useEffect(()=>{
passwordGenerator();
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
   <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800">
   <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
    <h1 className="text-center text-white my-4">Password Generator</h1>
    <input 
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3"
    placeholder='password'
    readOnly
    ref={passwordRef}
    
    />
    <button 
    onClick={copyPassword}
    className="text-white outline-none px-4 py-0.5 shrink-0 bg-blue-700"
    >Copy</button>
   </div>

    <div className="flex text-sm gap-x-2">
      <div className="flex-items-center gap-x-1">
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        />
        <label > Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        
        />
        <label htmlFor="numberInput">Numbers</label>

      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }}
        
        />
        <label htmlFor="charInput">Characters</label>

      </div>
    </div>

   </div>
   </>
  )
}

export default App
