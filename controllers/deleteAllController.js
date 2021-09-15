const Todo = require("../models/todoModel");

//delete all todos
const delete_all = (req, res) => {
          
    Todo.deleteMany({})
      .then(()=> {
          console.log('All deleted');
          res.redirect("/")
        })
        .catch((err) => console.log(err))
  }

  module.exports = {delete_all}