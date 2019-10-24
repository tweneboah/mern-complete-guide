import React, {Component} from 'react';
import axios from 'axios'
class TodosList extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('/http:')
    }
    render() {
        return (
             <div>

             </div>
        );
    }
}

export default TodosList;