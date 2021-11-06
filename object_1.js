let user = {
    name: 'Daniel'
};

console.log(user);

console.log('Nome: ', user.name);

// Alterando valor de uma propriedade (atributo) do objeto

user.name = 'João';
console.log('Nome: ', user.name);

user['name'] = 'Pedro';
console.log('Nome: ', user.name);

const prop = 'name';
user[prop] = 'Outro nome';
console.log('nome: ', user.name);

// Criando outro atributo

user.sobrenome = 'Da Silva';

console.log('\nnome: ' +  user.name + '\nsobrenome: ' + user.sobrenome);

console.log(user);

// Deletando um atributo

delete user.sobrenome;

console.log(user);