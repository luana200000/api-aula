//Express Framework
const express = require('express');
const app = express();

//Import Controllers 
const DonutController = require('./app/controllers/DonutController');
const donutController = new DonutController();

//Define json
app.use(express.json());

//Routes
app.get('/', function(req, res) {
  res.send('Bem-vindo ao mundo dos donuts!');
});

//donut
app.get('/donut', (req, res) => donutController.findAll(req, res));
app.post('/donut', (req, res) => donutController.create(req, res));
app.get('/donut/:id', (req, res) => donutController.findById(req, res));
app.put('/donut/:id', (req, res) => donutController.update(req, res));
app.delete('/donut/:id', (req, res) => donutController.delete(req, res));

//Start server
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});
