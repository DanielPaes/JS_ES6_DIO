const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array

console.log(persons.length);

// Verificar se é um array

console.log('A variável person é um array:', Array.isArray(persons));

// Iterar os itens do array

persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
});

// Filtrar array

const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Nova lista apenas com homens: ', mens);

// Retornar um novo

const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('Pessoas com adição do curso: ',personWithCourse);

// Transformar um array em outro tipo:

const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
},0); // O zero é atribuído ao age.

console.log('Somatório das idades: ', totalAge);

// Juntuando operações

const totalEvenAges = persons 
                        .filter(person => person.age % 2 ===0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        },0);

console.log('Soma das idades pares: ', totalEvenAges);
