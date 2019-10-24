import React, {Component} from 'react';
import axios from 'axios'



class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000')
        .then((res) => {
            this.setState({todos: res.data})
        })
    }
        
    render() {
       console.log(this.state)

       {this.state.todos > 0 ? () : 'd'}
     
    }
}

export default TodosList;