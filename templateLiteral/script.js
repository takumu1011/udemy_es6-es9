let str1 = `あい
うえお`;
console.log(str1);
console.log(typeof str1);

let name = '太郎';
let age = 30;
let str2 = `私の名前は${name}です`;
console.log(str2);

function func(str, ...exp) {
  console.log(str);
  console.log(exp);
}
// func('abc');
func`私の名前は${name}で、${age}歳です`;

let rawText = String.raw`エスケープで→\nでしています`;
console.log(rawText);
