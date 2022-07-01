const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LibraryApp');
const Schema = mongoose.Schema;
const Product = new Schema({
    book : String,
    author : String,
    price : String,
    imageUrl : String 
})

const booklist = mongoose.model('book',Book);
module.exports = booklist;