const Todo = require('../models/todoModel');

const home_page = async (req, res) => {
    
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo})

}


module.exports = {home_page};


    
