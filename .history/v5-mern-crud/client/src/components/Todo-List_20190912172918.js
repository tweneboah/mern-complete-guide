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
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            this.setState({todos: res.data})
        })
    }
        
    render() {
       console.log(this.state)

       
     return (
         <div> 

             {this.state.todos.length > 0 ?
              <h1>{}</h1> : <div>
                  {this.state.todos.map((todo) => {
                      return <h1>dd</h1>
                  })}
              </div>}

         </div>
     )
    }
}

export default TodosList;