import React, {Component} from 'react';
import axios from 'axios';
export default class EditTodo extends Component {

    state = {
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/todos/${this.props.match.params.id}`)
        .then((response) => {
          console.log(response.data)
            this.setState({
                todo_description: response.data.todo_description,
                todo_responsible: response.data.todo_responsible,
                todo_priority: response.data.todo_priority,
                todo_completed: response.data.todo_completed
            })
        })
    }


    onChangeTodoDescription = (e) =>{
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible = (e) => {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority = (e) => {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted = (e)  => {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority
            
        };
        axios.post('http://localhost:5000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/todos');

        console.log('Edited form', this.state.todo_description)
    }



    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Description</label>
                      <input type='text'
                      value = {this.state.todo_description}
                      onChange = {this.onChangeTodoDescription}
                      />
                      <label>Responsible</label>
                      <input type='text'
                      value = {this.state.todo_responsible}
                      onChange = {this.onChangeTodoResponsible}
                      />
                      <label>Priority</label>
                     <input type='text'
                      value = {this.state.onChangeTodoPriority}
                      onChange = {this.onChangeTodoPriority}
                      />

                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                   
                </form>
            </div>
        )
    }
}