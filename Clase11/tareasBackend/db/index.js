const { Pool } = require("pg");

const config = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
};

const pool = new Pool(config);

module.exports = {
  query: (text, params) => pool.query(text, params),
};

const usuarioBd = await db.query("Select * from users where mail = $1", [
  req.body.mail,
]);
// Fijarme que no exista
const existeUser = usuarioBd.rowCount > 0;

const resBd = await db.query(
  "Insert into users(name, mail, password) values ($1, $2, $3)",
  [newUser.name, newUser.mail, newUser.password]
);
