const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let data = require('./data/data.json');

// Criar (POST)
app.post('/data', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Atualizar (PUT)
app.put('/data/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = data.findIndex(item => item.id === itemId);
  if (index !== -1) {
    data[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: "Item não encontrado" });
  }
});

// Deletar (DELETE)
app.delete('/data/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  data = data.filter(item => item.id !== itemId);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
