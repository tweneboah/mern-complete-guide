import React, {Component} from 'react';
import axios from 'axios'

let data = [5, 6, 6, 2,34]


const Todo = props => (
    <tr>
      <h1>dd</h1>
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
                {this.todoList()}
            </div>
        )
    }
}

export default TodosList;