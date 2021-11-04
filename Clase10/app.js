const express = require("express");

const cors = require("cors");

const authRouter = require("./routes/auth");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send(":D");
});

app.use("/auth", authRouter);

app.listen(PORT, function () {
  console.log(`Corriendo en el puerto: ${PORT}`);
});
