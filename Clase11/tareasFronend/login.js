const button = document.getElementById("login");

const mailElement = document.getElementById("mail");
const passwordElement = document.getElementById("password");

button.addEventListener("click", () => {
  const mail = mailElement.value;
  const password = passwordElement.value;

  // Declaración de objetos para convertiro como un string y mandarlo en el fetch
  const bodyObj = {
    mail,
    password,
  };

  if (mail && password) {
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((res) => {
        return res.json;
      })
      .then((response) => {
        if (!response.error) {
          localStorage.setItem("token", response.token);

          alert("Login exitoso");
        }
      });
  } else {
    alert("Faltan datos");
  }
});
