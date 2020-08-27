let arr = 'あいうえお';
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

let arr2 = [10, 20, 30, 40];
for (let i of arr2) {
  console.log(i);
}

for (let i of arr2.keys()) {
  console.log(i);
}
for (let i of arr2.values()) {
  console.log(i);
}
for (let i of arr2.entries()) {
  console.log(i);
}

class ItrObj {
  constructor(chars) {
    this.chars = chars;
  }
  [Symbol.iterator]() {
    let count = 0;
    let arr = this.chars;
    return {
      next() {
        let valArr = Object.values(arr);
        let arrVAlue = valArr[count];
        count++;
        if (count <= valArr.length) {
          return {
            value: arrVAlue,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  }
}

let obj = new ItrObj({ a: 'あ', b: 'い', u: 'う' });
for (let i of obj) {
  console.log(i);
}
