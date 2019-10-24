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
        if(this.state.todos === undefined){
            console.log('nop')
        }else{
            console.log(this.state.todos.todo.)
        }
     return (
         <div>

         </div>
     )
    }
}

export default TodosList;