const express = require('express');
const cors = require('cors')
const connect = require('./connection');
const book = require('./routes/book')
const app = express();
connect();
app.use(cors())
app.use(book)
app.listen(3000, (err)=> {
    if(err){
        console.log("problem....")
    } else {
        console.log("Server is running on 3000...")
    }
})