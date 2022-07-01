const express = require('express');
const booklist = require('./src/model/BookModel');
const app = new express();
const cors = require('cors');

app.use(cors());

app.get('/books', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");
    Book.find()
    .then(function(book){
       res.send(book);
    })
})

app.listen(3000);