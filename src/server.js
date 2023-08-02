const express = require('express');
const { todoRoutes } = require('./routes/todo.routes');

const app = express();

app.use('/todo', todoRoutes);

app.listen(3333, () => {
  console.log("PORTA 3333");
});

module.exports = app;