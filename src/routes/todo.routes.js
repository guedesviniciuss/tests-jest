const { Router } = require('express');

const { createTodo } = require('../controller/todo.controller');

const todoRoutes = Router();

todoRoutes.post('/', createTodo);


module.exports = {
  todoRoutes
}