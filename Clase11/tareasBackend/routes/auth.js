const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET, verifyToken } = require("../middlewares/jwt-validate");

const { listaDeTareas } = require("./tareas");

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ success: true });
});

router.post("/registro", async (req, res) => {
  if (req.body.mail && req.body.name && req.body.password) {
    // Formato del mail
    if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
      res
        .status(400)
        .json({ success: false, message: "Formato de mail incorrecto" });
      return;
    }

    const existeUser = usuarios.find((u) => {
      return u.mail === req.body.mail;
    });

    if (existeUser) {
      res.status(400).json({ success: false, message: "Mail repetido" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    console.log("Salt", salt);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = {
      name: req.body.name,
      mail: req.body.mail,
      password: password,
    };

    usuarios.push(newUser);

    return res.status(200).json({ success: true, newUser });
  } else {
    return res.status(400).json({
      success: false,
      message: "Faltan datos (requeridos: mail, name, password)",
    });
  }
});

router.post("/login", async (req, res) => {
  const user = usuarios.find((u) => u.mail === req.body.mail);
  if (!user) {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Contraseña no válida" });
  }

  // Crear el token
  const token = jwt.sign(
    {
      name: user.name,
      mail: user.mail,
    },
    TOKEN_SECRET
  );

  console.log("Login en auth, listaDeTareas", listaDeTareas);
  res.status(200).json({
    error: null,
    data: "Login exitoso",
    token,
    listaDeTareas: listaDeTareas,
  });
});

//Listar usuarios solo puede ser consumida por alguien autorizado
router.get("/usuarios", verifyToken, (req, res) => {
  // Podemos acceder a los datos del usuario que hizo la request
  // Segun el JWT que envio en los headers de la request
  console.log(req.user);

  res.json({ error: null, usuarios });
});

module.exports = router;

const usuarios = [
  {
    name: "César",
    mail: "crolon@curso.com",
    password: "$2a$10$PhozXJLJ484qQ9t0/BMUxOyfut96MTxX.r4Tu4u/UE4TNaz/UjcWi",
  },
];
