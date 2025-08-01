// <<<<-----------------------------BACKGROUND CHANGER ------------------------------------->>>>

import {useState} from 'react'
function App() {
  const [color,setColor]=useState("indigo");
  return (
    <div className=' h-screen w-full duration-200' style={{backgroundColor:color}}>
      <div className='flex flex-wrap justify-center'>
        <div className='bg-white fixed bottom-12 flex flex-wrap justify-center px-3 py-2 rounded-full gap-3 shadow-lg' >
          <button onClick={()=>setColor("Red")} className='bg-red-500 rounded-full shadow-lg px-4 cursor-pointer py-1'>Red</button>
          <button onClick={()=>setColor("Green")} className='bg-green-500 rounded-full shadow-lg px-4 cursor-pointer py-1'>Green</button>
          <button onClick={()=>setColor("Blue")} className='bg-blue-500 rounded-full shadow-lg px-4 cursor-pointer py-1'>Blue</button>
          <button onClick={()=>setColor("olive")} className=' rounded-full shadow-lg px-4 cursor-pointer py-1' style={{backgroundColor:"olive"}}>olive</button>
          <button onClick={()=>setColor("gray")} className='bg-gray-500 rounded-full shadow-lg px-4 cursor-pointer py-1'>Grey</button>
          <button onClick={()=>setColor("yellow")} className='bg-yellow-500 rounded-full shadow-lg px-4 cursor-pointer py-1'>Yellow</button>
          <button onClick={()=>setColor("pink")} className='bg-pink-500 rounded-full shadow-lg px-4 cursor-pointer py-1'> Pink </button>
          <button onClick={()=>setColor("purple")} className='bg-purple-500 rounded-full shadow-lg px-4 cursor-pointer py-1'> Purple </button>
          <button onClick={()=>setColor("lavender")} className='bg-gray-200 rounded-full shadow-lg px-4 cursor-pointer py-1'> Lavender </button>
          <button onClick={()=>setColor("white")} className='bg-white rounded-full shadow-lg px-4 cursor-pointer py-1'> White </button>
          <button onClick={()=>setColor("black")} className='bg-black rounded-full shadow-lg px-4 cursor-pointer py-1 text-white'> Black </button>
        </div>
      </div>
    </div>
  )
}

export default App
