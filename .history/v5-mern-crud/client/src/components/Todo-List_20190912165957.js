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
       
       let myState = this.state.todos;

       if(myState) {
        return (
            <div>
               <h1>There is state</h1>
            </div>
           
       );
       }
        return (
             <div>
               
             </div>
            
        );
    }
}

export default TodosList;