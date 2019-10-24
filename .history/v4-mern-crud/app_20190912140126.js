const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const app = express();


//DB CONNECTION
//DB CONNECTION
const url =  'mongodb://localhost/Todos'
mongoose.connect( url, {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(() => console.log("DB Connected successfully"));



app.get('/', (req, res) => {
 res.send('APP')
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`The server is runing on port ${PORT}`)
})