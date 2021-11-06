const user = {
    name: 'João',
    lastName: 'da Silva'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('Propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('Propriedades do objeto user:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'João da Silva'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);

console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26})); // Aqui a nova propriedade não é adicionada ao objeto de origem

console.log(user);

// Previne todas as alterações em um objeto

const newObj = {foo: 'bar'};
Object.freeze(newObj);
newObj.foo = 'change';

console.log(newObj);

// Permite apenas alterar as propriedades previamente existentes em um objeto:

const newObj2 = {foo: 'bar'};
Object.seal(newObj2);
newObj2.foo = 'changes';
newObj2.new = 'new';
newObj2.foo = 'changes2';
console.log(newObj2);



