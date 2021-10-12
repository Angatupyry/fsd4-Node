const fetch = require("node-fetch");

// fetch("https://api.github.com/users/angatupyry")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     console.log("Github respondió", res);
//   });

async function main() {
  try {
    const response = await fetch("https://api.github.com/users/angatupyry");
    const result = await response.json();

    console.log("Github respondió", result);
  } catch (error) {
    console.log(error);
  }
}

main();
