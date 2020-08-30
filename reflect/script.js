// function func(a, b, c) {
//   this.x = a;
//   this.y = b;
//   this.z = c;
// }
// const obj = {};
// Reflect.apply(func, obj, [644, 123, 7]);
// console.log(obj);

// function func() {
//   console.log(this);
// }
// Reflect.apply(func, 'Hello', []);

// let list = [5, 76, 32, 7];
// console.log(Reflect.apply(Math.min, undefined, list));

// class One {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Two {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`初めまして、${this.name}です`);
//   }
// }
// let guy1 = new One('太郎');
// console.log(guy1);

// let guy2 = Reflect.construct(One, ['次郎'], Two);
// console.log(guy2);
// guy2.greet();

// class One {
//   constructor(name) {
//     this.name = name;
//   }
//   get intro() {
//     return `私の名前は${this.name}です`;
//   }
// }
// let guy1 = new One('太郎');
// console.log(Reflect.get(guy1, 'name'));
// console.log(Reflect.get(guy1, 'intro'));
// console.log(Reflect.get(guy1, 'intro', { name: '三郎' }));

// Reflect.set(guy1, 'age', 30);
// console.log(guy1.age);

// console.log(Reflect.has(guy1, 'name'));

class One {
  constructor(name) {
    this.name = name;
  }
}
let guy1 = new One('太郎');
Reflect.preventExtensions(guy1);
guy1.place = '東京';
guy1.name = '次郎';
console.log(guy1);

console.log(Reflect.isExtensible(guy1));
console.log(Reflect.isExtensible({}));

console.log(Reflect.ownKeys(guy1));

console.log(Reflect.getOwnPropertyDescriptor(guy1, 'name'));

let obj = {};
let check = Reflect.defineProperty(obj, 'name', {
  value: '太郎',
  configurable: true,
});
console.log(obj.name);
console.log(check);

let boo = Reflect.deleteProperty(obj, 'name');
console.log(boo);
console.log(obj.name);
