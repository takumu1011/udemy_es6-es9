// let obj = {
//   name: '太郎',
//   age: 30,
// };

// let obj = new Object({
//   name: '太郎',
//   age: 30,
// });
// console.log(obj);

// let map = new Map([
//   ['name', '太郎'],
//   ['age', 30],
// ]);

// console.log(map);

let taro = { name: '太郎' };
let jiro = { name: '次郎' };
let saburo = { name: '三郎' };

let brothers = new Map();
brothers.set(taro, '長男').set(jiro, '次男');
console.log(brothers);
console.log(brothers.get(taro));
console.log(brothers.has(jiro));
brothers.clear();
console.log(brothers.size);

let nick = { name: 'ニック' };
let wm = new WeakMap();
wm.set(nick, '長男');
nick = {};
console.log(wm.get(nick));
