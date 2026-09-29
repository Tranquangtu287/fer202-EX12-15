import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học lập trình .NET' },
    { id: 2, text: 'Học lập trình Java' }
  ]);
  const [inputTodo, setInputTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputTodo }]);
      setInputTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ marginBottom: '30px', background: '#282c34', color: '#fff', padding: '15px', borderRadius: '8px' }}>
    
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={inputTodo} 
          onChange={(e) => setInputTodo(e.target.value)} 
          placeholder="Please input a Task"
        />
        <button type="submit" style={{ marginLeft: '10px', background: 'red', color: 'white' }}>Add Todo</button>
      </form>
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            {todo.text} <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px', background: 'red', color: 'white', border: 'none', borderRadius: '4px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}