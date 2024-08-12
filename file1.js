const express = require('express');
const app = express();
const port = 3000;

// Rota para exibir os nomes do grupo na página inicial
app.get('/', (req, res) => {
  res.send('<h1>Nomes do Grupo</h1><p>Membro 1, Membro 2, Membro 3</p>');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
