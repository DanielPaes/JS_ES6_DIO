const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é par`);
    } else {
        console.log(`O número ${item} é impar.\n`);
    }
})


array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2`);
    }
    if(item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3`);
    }
    if(item % 4 === 0) {
        console.log(`O número ${item} é divisível por 4\n`);
    }
});

array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2`);
    } else if(item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3`);
    } else if(item % 4 === 0) {
        console.log(`O número ${item} é divisível por 4\n`);
    }
});