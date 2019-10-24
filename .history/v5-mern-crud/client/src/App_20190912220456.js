import React from 'react';
import CreateTodo  from './components/create-todo';
import EditTodo from './components/Edit-Todo';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TodoList from './components/Todo-List'
import './App.css';

function App() {
  return (
    <Router>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MERN CRUD APP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>




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
