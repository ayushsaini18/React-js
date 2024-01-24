import React, { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className=" flex flex-wrap font-bold justify-center px-9 py-20" style={{ fontSize:40,color:"#212121" }}><h1>BACKGROUND COLOR CHANGER</h1></div>
      <div className=" flex flex-wrap font-bold justify-center px-9 py-20" style={{ fontSize:40,color:"#212121" }}><h1>CLICK BELOW ON BUTTON</h1></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-2xl">
          <button
          onClick={()=>setColor("red")}
           className="outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor:"red"}}>
            Red</button>
          <button 
            onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor:"blue"}}
          >blue</button>
          <button 
            onClick={()=>setColor("olive")}
          className="outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor:"olive"}}>
            olive</button>
          <button
            onClick={()=>setColor("green")}
           className="outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor:"green"}}>
            green</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
