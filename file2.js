const express = require('express');
const app = express();
const port = 3000;

// Rota para exibir os dados do JSON
app.get('/data', (req, res) => {
  const jsonData = require('./data/data.json');
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
