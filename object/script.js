let name = '太郎';
let age = 30;
let obj = {
  name,
  age,
  place: '東京',
  ['birth' + 'day']: 3,
  notify() {
    console.log(this.name);
  },
};
console.log(obj);
console.log(obj['name']);
console.log(obj.birthday);
