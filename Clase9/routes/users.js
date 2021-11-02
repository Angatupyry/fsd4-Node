const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ success: true, users: users });
});

router.post("/", (req, res) => {
  const newUser = req.body;

  if (newUser.id && newUser.name && newUser.age) {
    users.push(newUser);
    res.send({ success: true, users: users });
  } else {
    res.send({ success: false, error: "Falta enviar algún campo" });
  }
});

router.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const newName = req.body.name;
  const newAge = req.body.age;

  const userIndex = users.findIndex((i) => i.id === userId);

  if (userIndex >= 0) {
    users[userIndex].name = newName;
    users[userIndex].age = newAge;
    return res.status(200).json({ success: true, users: users });
  } else {
    return res.send({ success: false, error: "No se encontró el usuario" });
  }
});

module.exports = router;

const users = [
  {
    id: 1,
    name: "Juan Perez",
    age: 30,
  },
  {
    id: 2,
    name: "Matias Gonzalez",
    age: 27,
  },
  {
    id: 3,
    name: "Pedro Corso",
    age: 23,
  },
  {
    id: 4,
    name: "Pablo Ventura",
    age: 33,
  },
];
