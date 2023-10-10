function calculateImc(weight, height) {
  return new Promise((resolve, reject) => {
    if (isNaN(weight) || isNaN(height)) {
      reject("Ambos devem ser números");
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showImc(weight, height) {
  calculateImc(weight, height)
    .then((result) => {
      let avaliation = "";

      if (result <= 18.5) avaliation = "magreza";
      else if (result <= 24.9) avaliation = "normal";
      else if (result <= 29.9) avaliation = "sobrepeso";
      else if (result <= 39.9) avaliation = "obesidade";
      else avaliation = "obesidade grave";

      console.log(`${result}: ${avaliation}`);
    })
    .catch((err) => {
      console.log(`A promise foi rejeitada! Motivo: ${err}`);
    })
    .finally(() => {
      console.log("Terminou a promise");
    });
}

showImc("oie", 1.86);
showImc(80, 1.86);
