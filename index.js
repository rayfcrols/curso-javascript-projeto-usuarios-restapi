const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
  .include('routes')
  .include('utils')
  .into(app);

app.listen(4000, '0.0.0.0', () => {
  console.log('servidor rodando!');
});
