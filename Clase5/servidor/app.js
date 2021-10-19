const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  return res.send("Hola");
});

app.get("/users", (req, res) => {
  const nombre = `${req.query.name} ${req.query.lastName} ${req.query.edad}`;

  return res.send(`Mi nombre es:  ${nombre}`);
});

app.get("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  const response = await axios(`https://api.github.com/users/${userId}`);

  console.log(response);
  console.log(response.data);

  return res.send({ success: true, user: response.data });
});

app.get("/repositorios/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const response = await axios(`https://api.github.com/users/${userId}`);

    const reposUrl = response.data.repos_url;

    const repos = await axios(reposUrl);

    const reposName = [];

    repos.data.forEach((r) => {
      reposName.push(r.name);
    });

    return res.send({ success: true, repositorios: reposName });
  } catch (error) {}
});

app.listen(PORT, () => console.log(`Escuchando en el puerto: ${PORT}`));
