const Todo = require("../models/todoModel");

const add_todo = (req, res) => {
    // const {todo} = req.body
    const todo = req.body.todo;
    
    const newTodo = new Todo({
        todo:todo
    })

    //save todo to db
    newTodo.save()
    .then(()=> {
        console.log(`Saved sucessfully! ${todo}`)
        res.redirect('/')
    })
    .catch((err) => console.log(err));

}

module.exports = {add_todo};