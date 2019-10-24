const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const bodyParser = require(bodyParser);
const cors = require('cors');
const app = express();

//MIDDLEWARE
app.use(cors());


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


app.get('/', (req, res) => {
 res.send('APP')
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`The server is runing on port ${PORT}`)
})