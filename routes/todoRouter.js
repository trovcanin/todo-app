const express = require('express');
const router = express.Router();

//controllers
const addOneController = require('../controllers/addOneController');
const deleteAllController = require('../controllers/deleteAllController');
const deleteOneController = require('../controllers/deleteOneController');
const indexController = require('../controllers/indexController');


router.get('/', indexController.home_page);
router.post('/add/todo', addOneController.add_todo);
router.get('/delete/todo/:_id', deleteOneController.delete_one);
router.get('/delete/all-todos', deleteAllController.delete_all);

module.exports = router;
