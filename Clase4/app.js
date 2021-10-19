const express = require("express");

const PORT = 45000;

const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(PORT, () => {
  console.log(`Corriendo en http:localhost:${PORT}`);
});
