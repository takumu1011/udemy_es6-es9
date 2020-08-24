let sum = (a, b) => a + b;
console.log(sum(10, 30));
console.log(typeof sum);
console.log(sum instanceof Function);

let setName = (name) => ({ value: name });

let employee = setName('太郎');
console.log(employee.value);

//1.親スコープのthisを引き継ぐ
function Person() {
  this.name = '太郎';
  this.introduction = function () {
    setTimeout(() => console.log(this.name));
  };
}
let person = new Person();
person.introduction();

let test = () => {
  'use strict';
  return this;
};

console.log(test() === window);

let test2 = function () {
  'use strict';
  console.log(this);
};
test2(); //undefined

//2.コンストラクタには使えない
// let Person2 = () => {};
// let person2 = new Person2();

//3.prototypeが存在しない
let Person3 = () => {};
console.log(person.prototype);

//4.argumentsが存在しない
function foo() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  return (temp) => temp * arguments[0];
}
// let foo = () => {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   return (temp) => temp * arguments[0];
// };
let bar = foo(10, 30);
console.log(bar(6));
