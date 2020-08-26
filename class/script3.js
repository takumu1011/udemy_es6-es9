class Person {
  static human = '人間';
  constructor(name) {
    this._name = name;
  }
  greet() {
    console.log('こんにちは');
  }
}
console.log(Person.human);
