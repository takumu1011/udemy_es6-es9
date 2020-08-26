class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (name === '') {
      console.log('入力してください');
    } else {
      this._name = name;
    }
  }
}
let taro = new Person('太郎');
console.log(taro);
taro.name = '';
taro.name = '次郎';
console.log(taro.name);
