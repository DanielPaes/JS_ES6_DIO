// in
//something in somethingItems;

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;       // retorna true
3 in arvores;       // retorna true
6 in arvores;       // retorna true
"cedro" in arvores;  // retorna false
"length" in arvores; // retorna true (length é uma propriedade de array)

// Objetos predefinidos
"PI" in Math;       // Retorna true
var minhaString = new String("coral");
"length" in minhaString; // Retorna true


// Objetos personalizados
var meuCarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
};
"marca" in meuCarro;    // Retorna true
"modelo" in meuCarro;   // Retorna True

// instaceof
// objeto instanceof tipoObjeto

var dia = new Date();
console.log(dia instanceof Date);