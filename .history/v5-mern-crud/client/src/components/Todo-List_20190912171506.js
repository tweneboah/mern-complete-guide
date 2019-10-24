import React, {Component} from 'react';
import axios from 'axios'



class TodosList extends Component {

    state = {
        todos: []
    }

   

    componentDidMount() {
        axios.get('http://localhost:5000')
        .then((res) => {
            this.setState({todos: res})
        })
    }

    render() {
       console.log('this)
     return (
         <div>

         </div>
     )
    }
}

export default TodosList;