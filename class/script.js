// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   console.log('Personのnameは' + this.name);
// };
// var taro = new Person('太郎');
// console.log(taro);
// taro.getName();

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(`Personのnameは${this.name}`);
  }
}

let jiro = new Person('次郎');
console.log(jiro);
jiro.getName();

console.log(typeof Person);
console.log(typeof jiro);
console.log(jiro instanceof Person);
