import React from 'react';

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(index);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span>{todo.text}</span>
      <i className="fas fa-trash-alt" onClick={() => deleteTodo(index)}></i>
    </li>
  );
};

export default TodoItem;
