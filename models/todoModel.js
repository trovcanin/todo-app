const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema
({
    todo:
    {
        type:String,
        required:true
    }
}, {versionKey:false})

const Todo = mongoose.model('todo', todoSchema);
module.exports = Todo;