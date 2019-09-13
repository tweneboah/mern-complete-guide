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
      res.status(200).json({'todo': todo})
 })
 .catch(() => {
       res.status(200).send('Addind todo Failed')
 })
});


//GET ALL TODOS
app.get('/todos', (req, res) => {
  Todo.find(function(err, todos) {
    if (err) {
        console.log(err);
    } else {
        res.json(todos);
    }
});
});





//INDIVIDUAL TODO
app.get('/todos/:id', (req, res) => {
 let id = req.params.id;
 Todo.findById(id, function(err, todo) {
     res.json(todo);
 });
})


//UPDATE
app.post('/todos/update/:id', (req, res) => {
  Todo.findById(req.params.id, function(err, todo) {
    if (!todo)
        res.status(404).send('data is not found');
    else
        todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;

        todo.save().then(todo => {
            res.json('Todo updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
});
})


// app.dele('/todos/:id', (req, res) => {
//   Todo.findByIdAndRemove({_id: req.params.id}, function(err, business){
//     if(err) res.json(err);
//     else res.json('Successfully removed');
// });
// });

app.delete("/todos/:id", function(req, res){
  Todo.findByIdAndRemove(req.params.id, function(err){
  if(err){
      res.send(err);
  } else {
      res.send('deleted');
  }
  });
});

app.get('/', (req, res) => {
 res.send('APP')
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`The server is runing on port ${PORT}`)
})