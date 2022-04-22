const array = [{ diam: 10, popul: 1000 }, { diam: 100, popul: 2000 }];
const array2 = [{ column: 'diam', comparison: 'maior que', value: 50 },
  { column: 'popul', comparison: 'maior que', value: 1500 },
  { column: 'popul', comparison: 'menor que', value: 1000 }];
const test = array2.map((el) => array.filter((e) => {
  if (el.comparison === 'maior que') {
    return e[el.column] > el.value;
  }
  if (el.comparison === 'menor que') {
    return e[el.column] < el.value;
  }
  if (el.comparison === 'igual a') {
    return e[el.column] === el.value;
  }
  return e;
}));
console.log(test[test.length - 1]); // Ajuda de Leo Araújo na lógica do requisito 3 e 4.