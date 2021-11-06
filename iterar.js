let arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, arr) => {
    console.log(`${index}: ${value} - ${arr}`);
});

const quad = arr.map(value => value*2);

console.log(quad);

let arr2 = [1, 2, 3, [4, 5]];
arr2 = arr2.flat();

console.log(arr2);


console.log(arr.map(value => [value*2]));
console.log(arr.flatMap(value => [value*2]));

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo);

const indexOFGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(indexOFGreaterThanTwo);

const fil = arr.filter(value => value % 2 === 0);
console.log(fil);

arr= [ 1, 2, 3, 1];

console.log(arr.indexOf(1));
console.log(arr.lastIndexOf(1));

console.log(arr.includes(1));
console.log(arr.includes(5));

console.log(arr.some(value => value > 2));
console.log(arr.some(value => value > 5));
 
console.log(arr.every(value => value % 2 === 0));

arr.sort();
console.log(arr);

arr.reverse();

console.log(arr);

console.log(arr.join(' - '));

let total = arr.reduce((total, value) => total += value, 0);