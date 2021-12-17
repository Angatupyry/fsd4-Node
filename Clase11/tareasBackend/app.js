const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Client } = require("pg");
if (process.env.ENV !== "production") {
  require("dotenv").config();
}
const { resolve } = require("path");
const { config } = require("dotenv");
config({ path: resolve(__dirname, "./.env") });

const { router: authRouter } = require("./routes/auth");
const { router: tareasRouter } = require("./routes/tareas");

const { verifyToken } = require("./middlewares/jwt-validate");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/tareas", tareasRouter);

app.get("/test", async (request, response) => {
  const client = new Client();
  client.connect();

  client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
    if (err) {
      console.error(err.stack);
      response.send("Error: " + err.stack);
    } else {
      console.log(res.rows[0].message);
      response.send(res.rows[0].message);
    }
    client.end();
  });
});

app.get("/ping2", (request, response) => {
  const client = new Client();
  client.connect();

  client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
    if (err) {
      console.error(err.stack);
      response.send("Error: " + err.stack);
    } else {
      console.log(res.rows[0].message);
      response.send(res.rows[0].message);
    }
    client.end();
  });
});

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});
