// let obj = {
//   name: '太郎',
// };
// let handler = {
//   get(target, property) {
//     return property in target
//       ? Reflect.get(target, property)
//       : 'プロパティが存在しません';
//   },
// };
// let proxy = new Proxy(obj, handler);
// console.log(proxy);
// console.log(proxy.ename);

let obj = {
  age: 30,
};
let check = Reflect.set(obj, 'age', 20);
console.log(check);
console.log('年齢：', obj.age);

let handler = {
  set(target, property, value) {
    if (typeof value === 'number' || !isNaN(value)) {
      return Reflect.set(target, property, value);
    } else {
      console.log('数字を入力してください');
    }
  },
};
let proxy = new Proxy(obj, handler);
proxy.age = 40;
proxy.age = 'あいうえお';
console.log(proxy);
