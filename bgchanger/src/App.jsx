import { useState } from 'react';

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl py-2 p-3 bg-white'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}} onClick={() => setColor("Green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Blue"}} onClick={() => setColor("Blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Black"}} onClick={() => setColor("Black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Violet"}} onClick={() => setColor("Violet")}>Violet</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Pink"}} onClick={() => setColor("Pink")}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Orange"}} onClick={() => setColor("Orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "White"}} onClick={() => setColor("White")}>White</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Indigo"}} onClick={() => setColor("Indigo")}>Indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App
