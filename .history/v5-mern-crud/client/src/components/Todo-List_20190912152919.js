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
        let  data = this.state.todos
        console.log('TODOS', this.state.todos)
        return (
             <div>
              {}
             </div>
            
        );
    }
}

export default TodosList;