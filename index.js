//Express Framework
const express = require('express');
const app = express();

//Import Controllers 
const ItemController = require('./app/controllers/ItemController');
const itemController = new ItemController();

const ListController = require('./app/controllers/ListController');
const listController = new ListController();

//Define json
app.use(express.json());

//Routes
app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

//lista 
app.get('/list', (req, res) => listController.findAll(req, res));
app.post('/list', (req, res) => listController.create(req, res));
app.get('/list/:id', (req, res) => listController.findById(req, res));
app.put('/list/:id', (req, res) => listController.update(req, res));
app.delete('/list/:id', (req, res) => listController.delete(req, res));

//item
app.get('/item', (req, res) => itemController.findAll(req, res));
app.post('/item', (req, res) => itemController.create(req, res));
app.get('/item/:id', (req, res) => itemController.findById(req, res));
app.put('/item/:id', (req, res) => itemController.update(req, res));
app.delete('/item/:id', (req, res) => itemController.delete(req, res));




//Start server
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

