//var
// 関数スコープ

//let
//1.同じスコープ内で同じ変数名を再定義できない
//2.ブロックスコープ

var num = 0;
var num = 3;
console.log(num); //3;

let num2 = 0;
let num2 = 3;
console.log(num2); //error

if (true) {
  var str = 'あいうえお';
}
console.log(str); //あいうえお

if (true) {
  let str2 = 'あいうえお';
}
console.log(str2); //undefined
