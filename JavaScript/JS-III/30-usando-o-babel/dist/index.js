"use strict";

// Media --------------------------------------------------------------------------------
var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  // acumulador inicia em 0 e a cada numero que passa no array 'numbers' ele vai somando
  var sum = numbers.reduce(function (acumulador, num) {
    return acumulador + num;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia = ".concat(average(2, 6, 3, 7, 4)));

// Media ponderada ----------------------------------------------------------------------
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  // Calcula a soma ponderada dos valores (num * peso)
  var sum = entries.reduce(function (accum, _ref) {
    var num = _ref.num,
      weight = _ref.weight;
    return accum + num * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);

  // Calcula a soma dos pesos (ou usa o peso padrão igual a 1 se não for fornecido)
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia ponderada = ".concat(weightedAverage({
  num: 7,
  weight: 2
}, {
  num: 9,
  weight: 5
}, {
  num: 3
})));

// Mediana ------------------------------------------------------------------------------
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  // Copia os números para uma nova array e a ordena em ordem crescente
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });

  // Encontra o índice do número do meio na array ordenada
  var middle = Math.floor(orderedNumbers.length / 2);

  // Verifica se a array possui um número ímpar de elementos
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }

  // Se a array possui um número par de elementos, calcula a média dos dois números do meio e retorna como mediana
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};
console.log("Mediana = ".concat(median(2, 4, 5, 7, 42, 99)));

// Moda ---------------------------------------------------------------------------------
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });

  // Ordena a array de quantidades em ordem decrescente
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });

  // Retorna o valor do primeiro par (maior quantidade)
  return quantities[0][0];
};
console.log("Moda = ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));