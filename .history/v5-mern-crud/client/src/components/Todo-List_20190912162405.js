import React, {Component} from 'react';
import axios from 'axios'

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)


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
       {this.state.todos.todo.map((todo) => {
           return (
               <div>

               </div>
           )
       })}
}

export default TodosList;