let sym1 = Symbol('abc');
let sym2 = Symbol('abc');
console.log(sym1 === sym2);
console.log(Symbol() === Symbol());
console.log(typeof sym1);

class App {
  constructor(mode) {
    console.log('モード:' + mode.toString());
    switch (mode) {
      case App.DEV:
        console.log('開発中');
        break;
      case App.TEST:
        console.log('テスト項目あり');
        break;
      case App.PROD:
        console.log('デプロイ準備');
        break;
      default:
        console.log('指定されたIDをお願いします');
        break;
    }
  }
}

App.DEV = Symbol('dev');
App.TEST = Symbol('test');
App.PROD = Symbol('prod');
const app = new App(App.DEV);

const person = {};
const EMAIL = Symbol('email_id');
person.name = '太郎';
person.age = 30;
person[EMAIL] = 'xxx@some.com';
console.log(person[EMAIL]);
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));
console.log(JSON.stringify(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Reflect.ownKeys(person));

let arr = [10, 20, 30];
let iter = arr[Symbol.iterator]();
console.log(iter);
