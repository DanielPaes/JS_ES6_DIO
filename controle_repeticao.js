console.log('Exemplo de utilização do break:\n');

var index = 0;

while(true){
    index++;

    if(index >  2){
        break;
    }

    console.log(index);
}

console.log('\nExemplo da utilização de continue:\n');
const array = [1, 2, 3, 4, 5, 6];



for(let i = 0; i < array.length; i++){
    let element = array[i];

    if(element % 2 === 0 ){
        continue;
    }

    console.log(element)
}



