import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Todo extends Component {

    render() { 
        return ( 
          
     <tr>
        <td >{this.props.todo.todo_description}</td>
        <td className='bg-warning'>{this.props.todo.todo_responsible}</td>
        <td>{this.props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+ this.props.todo._id}>Edit</Link>
            <div>
              <button onClick={()=>  axios.delete(`http://localhost:5000/todos/${this.props.todo._id}`)} className="btn btn-danger">Delete</button>
            </div> 
        </td>
    </tr>
           
         );
    }
}
 
export default Todo;