const express = require('express');

const app = express();

app.listen(3333, () => {
  console.log("PORTA 3333");
});

module.exports = app;