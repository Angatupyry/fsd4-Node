const express = require("express");
const userRoutes = require("./routes/users");

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hola, :D");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Esuchando en el puerto ${PORT}`);
});
