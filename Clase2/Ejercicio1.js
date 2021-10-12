const fs = require("fs");

// const data = fs.readFileSync("text.txt");

// console.log(data.toString());
// console.log("Programa terminado");

fs.readFile("text.txt", function name(error, data) {
  if (error) return console.log(error);

  console.log(data.toString());
});

console.log("Programa terminado");
