import React from 'react';

const TodoItem = ({index, status, todo, toggleTodo, deleteTodo }) => {
  // const handleToggle = () => {
  //   toggleTodo(todo.id);
  // };

  return (
    <div className='flex gap-5 justify-center border-2 p-2 border-amber-400 rounded-md'>
      <div>{todo}</div>
      <div>{status ? "Done" : "Not Done"}</div>
      <button onClick={() => toggleTodo(index)} className='bg-blue-500 px-1 h-5 rounded-md text-sm mt-1'>Toggle</button>
      <button onClick={() => deleteTodo(index)} className='bg-red-500 px-2 h-5 rounded-md text-sm mt-1'>Delete</button>
    </div>
  );
};

export default TodoItem;
