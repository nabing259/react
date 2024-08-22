import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="bg-slate-950 rounded-md p-5 font-mono h-[80vh] align-middle">
      <div className="flex justify-between list-none">
        <h1 className=" text-left font-mono text-2xl font-bold">ToDo App</h1>
        <nav className="flex gap-5">
          <li>All</li>
          <li>Pending</li>
          <li>Completed</li>
          <button className="mt-[-10px] rounded-md border-2 border-blue-900 px-2 py-[-20px]">
            Dark
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App
