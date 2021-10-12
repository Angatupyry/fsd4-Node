const multiplicarPositivos = (numeroUno, numeroDos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numeroUno > 0 && numeroDos > 0) {
        const resultado = numeroUno * numeroDos;
        resolve(resultado);
      } else {
        reject("bla");
      }
    }, 3000);
  });
};

multiplicarPositivos(10, 2)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("Hola");
  });

const main = async () => {
  try {
    const resultado = await multiplicarPositivos(10, 2);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

main();
