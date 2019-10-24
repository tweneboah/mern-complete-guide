const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const videoRouter = require('./routes/videos')
const app = express();

//DB
const DB_URL = process.env.DATABASE_URL || 'mongodb://localhost/i-Tube'

  mongoose.connect( DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
    })
    .then(() => console.log("DB Connected successfully.."));

    //Middleware
    app.use(bodyParser.json());

    app.use('/', videoRouter)
    app.get('/', (req, res) => {
        res.send('<h1>i-Tube App</h1>')
    });


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})