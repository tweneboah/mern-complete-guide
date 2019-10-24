import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Todo from "./Todo";

// const Todo = props => (
//     <tr >
//         <td >{props.todo.todo_description}</td>
//         <td className='bg-warning'>{props.todo.todo_responsible}</td>
//         <td>{props.todo.todo_priority}</td>
//         <td>
//             <Link to={"/edit/"+props.todo._id}>Edit</Link>
            
//         </td>
//     </tr>
// )

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    //This component runs once
    componentDidMount() {
        axios.get('http://localhost:5000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

 // This will make another call to this api when the 
    // componentDidUpdate() {
    //     axios.get('http://localhost:5000/todos')
    //     .then(response => {
    //         this.setState({todos: response.data});
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }


    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}