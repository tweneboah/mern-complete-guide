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
    <li class="nav-item">
        <Link class="nav-link" to='/'>Todos</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/todos">add</Link>
      </li>
     
    </ul>
    
  </div>
</nav>


<Route path='/' exact component = {TodoList}/>
<Route path = '/add' exact component = {}/>


    </Router>
    
  );
}

export default App;
