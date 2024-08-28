import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="mb-5 text-center w-96 m-auto">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo.text}
          index={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          status={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
