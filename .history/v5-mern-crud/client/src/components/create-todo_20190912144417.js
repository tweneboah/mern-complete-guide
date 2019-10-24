import React, { Component } from 'react';
import axios from 'axios';
class CreateTodo extends Component {


 state = {
     todo_description: '',
     todo_responsible: '',
     todo_priority: '',
     todo_completed: false
 }

 //OnchangeFunctions
 onchangeDescription = (e) => {
     this.setState({todo_description: e.target.value})
 }

 onchangeResponsible = (e) => {
  this.setState({todo_responsible: e.target.value});
 }

onchangePriority = (e) => {
 this.setState({todo_priority: e.target.value})
}

//Handle Submit
hanldeFormSubmit = (e) => {
 e.preventDefault();

 axios.post('http://localhost:5000/add', this.state)
 .then((res) => {
  console.log(res.data)
  //Reseting formvalues
  this.setState({
    todo_completed: '',
    todo_completed: '',
    todo_priority: '',
    todo_responsible
  })
 })
 
}
 render() {
  return (
     <div>
         <h2>Create New todo</h2>
         <form onSubmit = {this.hanldeFormSubmit}>
            <label>Description:</label>
            <input
            type='text'
            onChange = {this.onchangeDescription}
            value = {this.state.todo_description}
            />

            <label>Responsible:</label>
            <input
            type='text'
            onChange = {this.onchangeResponsible}
            value = {this.state.todo_responsible}
            />

          <input 
               type="radio"
               name="priorityOptions"
               id="priorityLow"
               value="Low"
               checked={this.state.todo_priority==='Low'}
               onChange={this.onchangePriority}
               />

              <label>Low</label>

            <input 
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={this.state.todo_priority==='Medium'}
              onChange={this.onchangePriority}
              />

              <label>Medium</label>
            <input 
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={this.state.todo_priority==='High'}
              onChange={this.onchangePriority}
              />

           <label >High</label>
 
                    <div className="form-group">
                        <input type="submit" value="Create Todo"  />
                    </div>
         </form>
     </div>
  );
 }
}

export default CreateTodo;