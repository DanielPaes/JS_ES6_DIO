// Criando um array

const arr = [1, 2, 3];

const arr2 = new Array('a', 'b', 'c');

for(i of arr){
    console.log(i);
}

for(i of arr2){
    console.log(i);
}

const arr3 = Array.of(4, 5, 6);

for(i of arr3){
    console.log(i);
}

// Push - adiciona elemento ao final do array e retorna seu novo tamanho

const frutas = ['melancia', 'laranja', 'maça'];
let tamanho = frutas.push('uva');

console.log(frutas);
console.log(tamanho);


// Pop - Remove o último elemento da array e o retorna

const rm = frutas.pop();

console.log(rm);
console.log(frutas);

// Unshift - Adiciona um elemento no início da array e retorna seu novo  tamanho

const add = frutas.unshift('Pessego');

console.log(add);
console.log(frutas);

// Shift - Remove o primeiro elemento da array e o retorna

const sh = frutas.shift();

console.log(sh);
console.log(frutas);

// Concat - concatena um ou mais arrays e retorna um novo array

const array1 = [1, 2, 3];
const array2 = ['x', 'y', 'z'];

const array3 = array1.concat(array2);

console.log(array3);

// Slice - fatia um array

const ar = [1, 2, 3, 4, 5];

console.log(ar.slice(0, 2));

console.log(ar.slice(2));

console.log(ar.slice(-1));

console.log(ar.slice(-3));

// Splice - Altera um array

const arspl = [1, 2, 3, 4, 5];

let ret = arspl.splice(2);
console.log(ret);
console.log(arspl);

arspl.splice(0, 0, 'first');

console.log(arspl);