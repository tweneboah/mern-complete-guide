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

       
     return (
         <div> 

             {this.state.todos.length > 0 ?
              <h1>ddfdfdfdf</h1> : <h1>
                  {this.state.todos.map((todo) => {
                      re
                  })}
              </h1>}

         </div>
     )
    }
}

export default TodosList;