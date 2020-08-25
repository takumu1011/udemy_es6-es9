let arr = [1, 2, 3];
// let one = arr[0];
// let two = arr[1];
// let [one, two] = arr;
let [one, ...rest] = arr;
console.log(one);
console.log(two);
console.log(rest);

let a, b;
[a = 1, b = 2] = [10];
console.log(a);
console.log(b);

function returnArray() {
  return [10, 20];
}
let [c, d] = returnArray();
console.log(c);
console.log(d);

let person = {
  name: '太郎',
  age: 30,
};
let { name: hoge = '次郎', age: fuga } = person;
console.log(hoge);
console.log(fuga);
