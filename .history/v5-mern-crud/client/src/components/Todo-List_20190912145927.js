import React, {Component} from 'react';
import axios from 'axios'
class TodosList extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('/http://localhost:5000')
    }
    render() {
        return (
             <div>

             </div>
        );
    }
}

export default TodosList;