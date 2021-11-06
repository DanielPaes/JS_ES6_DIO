// Retorna o tamanho de uma string

const textSize = 'Texto'.length;
console.log(`Quantidade de letrias: ${textSize}`); // Obs: Usar ->> `` <<-  para referenciar variáveis usando o ${}

// Retorna um array quebrando a string por um delimitador

const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

// Busca por um valor e substitui por outro

const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

// Retorna a "fatia" de um valor

const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nString sem a última letra: ', allWithoutLastChar);

const secondChar = 'Texto'.slice(1);
console.log('\nString da segunda até a última letra: ', secondChar);

// Retorna os carcateres que estão dentro de um intervalo de índices

const partChar = 'Texto'.slice(1,3); // Excluí o elemento de índice 3
console.log('\nSeleção de caracteres dentro da String: ', partChar);






