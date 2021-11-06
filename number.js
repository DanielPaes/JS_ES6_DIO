const myNumber = 12.4032;

// Transforma um número para String
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString); // typeof retorna o tipo de dado na variável

// Retorna número com um n casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

// Transforma uma string em int
console.log('\nString parseada para float: ', parseInt('13.22'));