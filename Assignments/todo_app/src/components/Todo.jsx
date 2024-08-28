import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
      setTodos([...todos, {id: Date.now(), text: text, completed: false}]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((index) => index.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className='text-4xl mb-6 text-center text-amber-400  font-bold'>Todo List</h1>
      <div>
        <AddTodo handleAddTodo={handleAddTodo}/>
      </div>
      <div>
        <TodoList todos={todos.filter(todo => !todo.completed)} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>
      <div>
        <h1 className='text-2xl mb-6 text-center text-green-400 font-bold'>Completed Tasks</h1>
        <TodoList todos={todos.filter(todo => todo.completed)} toggleTodo={toggleTodo}  deleteTodo={deleteTodo}/>
      </div>
      
    </div>

  );
};

export default Todo;
