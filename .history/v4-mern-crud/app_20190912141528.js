const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());


//DB CONNECTION
const url =  'mongodb://localhost/TodosV1'
mongoose.connect( url, {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true
})
.then(() => console.log("DB Connected successfully"));

//CREATE TODO
app.post('/add', (req, res) => {
 let todo = new Todo(req.body)
 todo.save()
 .then((todo) => {
      res.status(200).json({'todo', todo})
 })
});


//GET ALL TODOS
app.get('/', (req, res) => {
   Todo.find({}, (err, todo) => {
    if(err){
     console.log(err)
    }else {
     res.json({todos})
    }
   })
});


//UPDATE
app.post('/update/:id', (req, res) => {
  Todo.findById(req.params.id, (err, foundTodo) => {
   if(!foundTodo){
     res.status(404).send('Data is not found')
   }else {
    foundTodo.todo_description = req.body.description;
    todofoundTodo.todo_responsible = req.body.responsible;
    todofoundTodo.todo_priority = req.body.priority;
    todofoundTodo.todo_completed = req.body.completed

   }
  })
})

app.get('/', (req, res) => {
 res.send('APP')
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`The server is runing on port ${PORT}`)
})