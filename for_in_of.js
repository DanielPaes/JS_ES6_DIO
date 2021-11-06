let arr = [1, 2, 3];
arr.foo = "hello";

for(let x of arr){ // Executa apenas os iteraveis
    //console.log(x);
    console.log(x);
}

console.log('\n\n') // Executa todos objetos
for(let x in arr){
    console.log(arr[x]);
}

