const express = require('express');
const ItemController = require('./app/controllers/ItemController');
const itemController = new ItemController();
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

app.get('/item', (req, res) => itemController.findAll(req, res));
app.post('/item', (req, res) => itemController.create(req, res));
app.get('/item/:id', (req, res) => itemController.findById(req, res));
app.put('/item/:id', (req, res) => itemController.update(req, res));
app.delete('/item/:id', (req, res) => itemController.delete(req, res));

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

