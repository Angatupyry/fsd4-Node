// Crear servidor Express
// Requerir función listarUsuarios
// Crear enpoint que retorne los datos de la función

const express = require("express");
const { listarUsuarios } = require("./user");
const app = express();
const PORT = 8080;

app.get("/users", async (req, res) => {
  const resultUsers = await listarUsuarios();
  res.send(resultUsers);
});

app.listen(PORT, () => console.log(`Emitiendo en... localhost:${PORT}`));
