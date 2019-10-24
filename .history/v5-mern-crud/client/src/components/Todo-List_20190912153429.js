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
       
        console.log('TODOS', this.state.todos.todo)
        return (
            
              {this.state.todos.todo.map((tod) => {
                return   <h1>TODO</h1>
              })}
            
            
        );
    }
}

export default TodosList;