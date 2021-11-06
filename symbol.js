const symbol1 = Symbol(1);
const symbol2 = Symbol(1);

// Symbols são únicos
console.log('symbol 1 é igual a symbol2:', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Pedro',
    lastName: 'da Silva'
}

console.log(user);

// Symbols criam propriedades que não são enumerables
for(const key in user){
    console.log(`\n Valor da propriedades: ${key}: ${user[key]}`);
}

console.log('Chaves: ', Object.keys(user));
console.log('Valores: ', Object.values(user));

// Exibir os symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

// A cessando todas as propriedades de um objeto
console.log('Todas propriedades do objeto user: ', Reflect.ownKeys(user));



