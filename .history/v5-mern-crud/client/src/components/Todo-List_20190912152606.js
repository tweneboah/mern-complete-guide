import React, {Component} from 'react';
import axios from 'axios'
class TodosList extends Component {

    state = {
        todos: []
    }

    data = ['d','t', 73]

    componentDidMount() {
        axios.get('http://localhost:5000')
        .then((res) => {
            this.setState({todos: res.data})
        })
    }


    render() {
        console.log('TODOS', this.state.todos)
        return (
             <div>
               {this.state.map((todo) => {
                   return (
                       <ul>
                           <li>{todo}</li>
                       </ul>
                   )
               })}
             </div>
            
        );
    }
}

export default TodosList;