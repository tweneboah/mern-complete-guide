import React, {Component} from 'react';
import axios from 'axios'

todoList() {
    return this.state.todos.map(function(currentTodo, i) {
        return <Todo todo={currentTodo} key={i} />;
    });
}



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
             
             </div>
            
        );
    }
}

export default TodosList;