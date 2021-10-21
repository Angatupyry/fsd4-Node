const fs = require("fs");

fs.readFile("./users.json", "", (err, users) => {
  if (err) {
    reject(err);
  }

  const userJson = JSON.parse(users);
  resolve(userJson);
});
