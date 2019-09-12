import React from 'react';
import CreateTodo  from './components/create-todo';
import EditTodo from './components/Edit-Todo';
import TodoList from './components/Todo-List'
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>CRUD 1 only React setup</h1>
       <CreateTodo/>
       <hr></hr>
       <EditTodo/>

       <hr/>
       <TodoList/>
    </div>
  );
}

export default App;
