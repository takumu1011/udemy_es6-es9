class Person {
  constructor(name) {
    this._name = name;
  }
  greet() {
    console.log('こんにちは');
  }
  static jump() {
    console.log('ジャンプ');
  }
}

class Employee extends Person {
  constructor(name, dept) {
    super(name);
    this._dept = dept;
  }
  greet() {
    super.greet();
    console.log('お元気ですか');
  }
}
let workerA = new Employee('太郎', '企画開発部');
workerA.greet();
workerA.jump();
