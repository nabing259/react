import { useState } from "react";

export default function AddTodo({ handleAddTodo }) {
    const [text, setText] = useState('');
    

    return (
        <div>
            <input type="text" placeholder="Enter a new task" value={text} onChange={(e) => setText(e.target.value)} className="border-2 p-1 px-5 m-5 rounded-lg border-gradient-to-r from-pink-500 to-yellow-500"/>
            <button onClick={() => handleAddTodo(text)} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-2 py-1 rounded-md font-bold">Add</button>
        </div>
    )
}