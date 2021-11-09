const express = require("express");
const path = require("path");
const cors = require("cors");

const authRouter = require("./routes/auth");
const { router: tareasRouter } = require("./routes/tareas");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/auth", authRouter);
app.use("/tareas", tareasRouter);

app.listen(PORT, function () {
  console.log(`Corriendo en el puerto ${PORT}`);
});
