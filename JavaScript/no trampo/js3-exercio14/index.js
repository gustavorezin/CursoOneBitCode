// Media --------------------------------------------------------------------------------
const average = (...numbers) => {
  // acumulador inicia em 0 e a cada numero que passa no array 'numbers' ele vai somando
  const sum = numbers.reduce((acumulador, num) => acumulador + num, 0);
  return sum / numbers.length;
};

console.log(`Média = ${average(2, 6, 3, 7, 4)}`);

// Media ponderada ----------------------------------------------------------------------
const weightedAverage = (...entries) => {
  // Calcula a soma ponderada dos valores (num * peso)
  const sum = entries.reduce(
    (accum, { num, weight }) => accum + num * (weight ?? 1),
    0
  );

  // Calcula a soma dos pesos (ou usa o peso padrão igual a 1 se não for fornecido)
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `Média ponderada = ${weightedAverage(
    { num: 7, weight: 2 },
    { num: 9, weight: 5 },
    { num: 3 }
  )}`
);

// Mediana ------------------------------------------------------------------------------
const median = (...numbers) => {
  // Copia os números para uma nova array e a ordena em ordem crescente
  const orderedNumbers = [...numbers].sort((a, b) => a - b);

  // Encontra o índice do número do meio na array ordenada
  const middle = Math.floor(orderedNumbers.length / 2);

  // Verifica se a array possui um número ímpar de elementos
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }

  // Se a array possui um número par de elementos, calcula a média dos dois números do meio e retorna como mediana
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};

console.log(`Mediana = ${median(2, 4, 5, 7, 42, 99)}`);

// Moda ---------------------------------------------------------------------------------
const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);

  // Ordena a array de quantidades em ordem decrescente
  quantities.sort((a, b) => b[1] - a[1]);

  // Retorna o valor do primeiro par (maior quantidade)
  return quantities[0][0];
};

console.log(`Moda = ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
