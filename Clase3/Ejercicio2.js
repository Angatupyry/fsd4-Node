const fetch = require("node-fetch");

async function main() {
  try {
    const fetchResponse = await fetch(
      "https://api.github.com/users/angatupyry"
    );

    const response = await fetchResponse.json();

    const repositoriosFetch = await fetch(response.repos_url);

    const repos = await repositoriosFetch.json();

    repos.forEach((r) => {
      console.log(r.name);
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

main();
