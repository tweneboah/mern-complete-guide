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
             <div>
              {this.state.todos.map((tod) => {
                  return (
                      <h1>ee</h1>
                  )
              })}
             </div>
            
        );
    }
}

export default TodosList;