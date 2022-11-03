import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.jsx';
import { TodoSearch } from './TodoSearch/TodoSearch.jsx';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoItem } from './TodoItem/TodoItem.jsx';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.jsx';
// import './App.css';

const todos = [
  {id: 1, text: 'Cortar cebolla', completed: true },
  {id: 2, text: 'Tomar el cursso de intro a React', completed: false },
  {id: 3, text: 'Llorar con la llorona', completed: false },
  {id: 4, text: 'Cantar', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;