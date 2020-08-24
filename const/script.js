//const
//1.(大文字推奨)定数
//2.ブロックスコープ
//3.宣言時に初期値を代入する必要がある
//4配列の要素及びオブジェクトのプロパティは変更できる
//5.古いforループでは使えない


let num = 100;
num = 50;
console.log(num); //50

const num2 = 100;
num2 = 50;
console.log(num2); //error

let num3;
num3 = 10;
console.log(num3); //10

const num4; //error

const NUMS = [1, 2, 3];
NUMS.push(4);
console.log(NUMS); //[1,2,3,4];
NUMS.pop();
console.log(NUMS); //[1,2,3]

const OBJ = Object.freeze({
  num: 1
});
OBJ.num = 2;
console.log(OBJ);
OBJ.str = 'a';
console.log(OBJ);

const COMPANY = Object.freeze({
  name: '〇〇株式会社',
  address: {
    country: '日本',
    prefecture: '東京都',
    ward: '新宿区'
  }
});
COMPANY.address.area = '歌舞伎町';
console.log(COMANY);

let nums = [1, 2, 3, 4];
//使えない
for (const i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
