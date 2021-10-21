// 1 Requiero la librería

const express = require("express");

// 2 Inicializo Express
const app = express();

// 3 Constante puerto
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  req.now = new Date();
  console.log(req.now);
  next();
});

// 4 Creo un enpoint de salida
app.get("/", (req, res) => {
  res.send(":D");
});

app.get("/tienda", (req, res, next) => {
  setTimeout(() => {
    try {
      objetoQueNoExiste.name = ":(";
      res.send("Hola");
    } catch (error) {
      return next(error);
    }
  }, 1000);
});

// 5 Levanto el servidor
app.listen(PORT, () => {
  console.log(`Servidor arriba en el puerto ${PORT}`);
});

// 6 Soy feliz :D
