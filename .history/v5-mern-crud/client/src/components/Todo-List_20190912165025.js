import React, {Component} from 'react';
import axios from 'axios'

const Todo = props => (
    <tr>
        <td>{props.todo.description}</td>
        <td>{props.todo.responsible}</td>
        <td>{props.todo.priority}</td>
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
        }).catch((err) => {
            console.log(err)
        })
    }


    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
       
        console.log('TODOS', this.state.todos)
        return (
            <div>
                <h3>Todos List</h3>
                {t}
            </div>
        )
    }
}

export default TodosList;