const express = require('express');

const app = express();

const url = process.env.PORT || 5000;

app.listen(url, () => {
 console.log(`The server is runing on port ${url}`)
})