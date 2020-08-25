let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1); //[1,2,3]
console.log(arr2); //[1,2,3,4]

const message = 'Hello world';
const char = [...message];
console.log(char);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

const array3_spread = [...array1, ...array2];
console.log(array3_spread);

function add(a, b) {
  return a + b;
}
let nums = [1, 2];
console.log(add(...nums));
