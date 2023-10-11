async function calculateImc(weight, height) {
  if (isNaN(weight) || isNaN(height)) {
    return Promise.reject("Ambos devem ser números");
  }
  return weight / (height * height);
}

async function showImc(weight, height) {
  try {
    const result = await calculateImc(weight, height);

    let avaliation = "";

    if (result <= 18.5) avaliation = "magreza";
    else if (result <= 24.9) avaliation = "normal";
    else if (result <= 29.9) avaliation = "sobrepeso";
    else if (result <= 39.9) avaliation = "obesidade";
    else avaliation = "obesidade grave";

    console.log(`${result}: ${avaliation}`);
  } catch (err) {
    console.log(`A promise foi rejeitada! Motivo: ${err}`);
  } finally {
    console.log("Terminou async await");
  }
}

showImc("oie", 1.86);
showImc(80, 1.86);
