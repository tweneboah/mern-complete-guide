import React, {Component} from 'react';
import axios from 'axios'



class TodosList extends Component {

    state = {
        todos: []
    }

   

    componentDidMount() {
        axios.get('http://localhost:5000')
        .then((res) => {
            this.setState({todos: res.data})
        })
    }

    render() {
       
       let myState = this.state.todos.todo;

       if(myState) {
        return (
            <div>
               {myState.todo.map((todo) => {
                   return (
                       <div>
                         oooo
                       </div>
                   )
               })}
            </div>
           
       );
       }
        return (
             <div>
               <h1>No data</h1>
             </div>
            
        );
    }
}

export default TodosList;