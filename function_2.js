this.name = 'arrow function';
const getNameArrowFn = () => this.name;

console.log(getNameArrowFn());

function getName(){
    return this.name;
}


const user = {
    name: 'Nome do objeto em execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn()); // Arrow function se refere ao escopo do algoritmo e não a um objeto
console.log(user.getName());