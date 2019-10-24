import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos')
        .then((res) => {
            this.setState({todos: res.data})
        })
    }
        


    render() {
       console.log('fROM todo List')

       let todosData = this.state.todos
     return (
         <div> 
             {todosData? 
              (
                  <div>
                     {todosData.map((todo) => {
                          return (
                              <div key={todo._id}>
                                  <h2>{todo.todo_description}</h2>
                                  <p>{todo.todo_responsible}</p>
                                  <p>{todo.todo_priority}</p>
                                  <p>{todo.todo_completed}</p>   

                                  <p>
                                      <Link to = {`/todos/$`}>Edit</Link>
                                  </p>  
                              </div>
                          )
                     })}
                  </div>
              ) :

              (
                <div>
                    <h1>Loading...</h1>
                </div>
              )
            }

         </div>
     )
    }
}

export default TodosList;