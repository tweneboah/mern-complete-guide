import React, {Component} from 'react';
import axios from 'axios'

const Todo = props => (
    <tr>
        <td>{props.todo.description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
          
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


    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
       
        console.log('TODOS', this.state.todos.todo)
        return (
             <div>
             {this.todoList}
             </div>
            
        );
    }
}

export default TodosList;