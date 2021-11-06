var partes = ['ombro', 'joelhos'];
var musicas = ['cabeça', ...partes, 'e', 'pés']; // Adicionou os elementos de partes

console.log(musicas);

const fn = (x, y, z) =>  [x, y, z];

var args = [0, 1, 2];

console.log(fn(...args));