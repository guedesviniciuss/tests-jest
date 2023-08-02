const TodoModel = require('../model/todo.model');

const createTodo = (req, res, next) => {
  const createdTodo = TodoModel.create(req.body);
  return res.status(201).json(createdTodo);
}

module.exports = { createTodo }