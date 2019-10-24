import React from 'react';
import CreateTodo  from './components/create-todo';
import EditTodo from './components/Edit-Todo';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TodoList from './components/Todo-List'
import './App.css';

function App() {
  return (
    <Router>




      
        <div className="App">
       <h1>CRUD 1 only React setup</h1>
       <CreateTodo/>
       <hr></hr>
       <EditTodo/>

       <hr/>
       <h1>TODO LIST</h1>
       <TodoList/>
    </div>


    <nav >
    
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
    </Router>
    
  );
}

export default App;
