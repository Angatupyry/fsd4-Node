const fs = require("fs");

const listarUsuarios = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./users.json", "", function (err, users) {
      if (err) {
        reject(err);
      }

      const userJson = JSON.parse(users);
      resolve(userJson);
    });
  });
};

module.exports = { listarUsuarios };
