const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Todo = new Schema({
    test: {
        type: String
    }
});
module.exports = mongoose.model('Todo', Todo)