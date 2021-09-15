const { urlencoded } = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();


//middleware
app.use(urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');



//connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => console.log("Connected to mongodb -> todos ..."))
  .catch((err) => console.log(err));



//use routes
app.use(require('./routes/todoRouter'));


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started ... on ${port}`));