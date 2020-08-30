let str1 = 'hello';
console.log(str1.includes('ell'));
console.log(str1.includes('ell', 2));
console.log(str1.startsWith('he'));
console.log(str1.endsWith('lo'));
console.log(str1.repeat(3));
console.log(str1.replace('h', 'n'));
console.log(str1.search(/ll/));
console.log(str1.split(''));
console.log(str1);

let i;
i++;
console.log(i);
console.log(Number.isNaN(i));

let n = 1 / 0;
console.log(n);
console.log(Number.isFinite(n));

console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger('1'));
console.log(Number.isSafeInteger(3.1));

console.log(Math.sign(67889.2));
console.log(Math.sign(0));
console.log(Math.sign(-2));

console.log(Math.trunc(3.5555));
console.log(Math.cbrt(8));

console.log(Array.from('あいうえお'));
let set = new Set([10, 20, 'a', {}]);
console.log(Array.from(set));
let map = new Map([
  [1, '1'],
  [2, 'b'],
  [3, 'c'],
]);
console.log(Array.from(map.keys()));

let obj = {
  length: 3,
  0: '太郎',
  1: '次郎',
  2: '三郎',
};
console.log(Array.from(obj));

let arr1 = [1, 20, 10, 5, 30];
let results = arr1.filter((number) => number > 10);
console.log(results);

let results2 = arr1.find((number) => number > 10);
console.log(results2);

let results3 = arr1.findIndex((number) => number > 10);
console.log(results3);

let arr2 = [10, 20, 30];
console.log(arr2[Symbol.iterator]());
console.log(arr2.entries());

console.log(new Array(3));
console.log(Array.of(3));

let arr = [1, 2, 3, 4];
console.log(arr.fill(10, 1, 2));

let array = ['a', 'b', 'c', 'd', 'e'];
let array2 = array.copyWithin(0, 3);
console.log(array2);

let empty = {};
let obj1 = { a: 1 };
let obj2 = { b: 2 };
Object.assign(empty, obj1, obj2);
console.log(empty);
