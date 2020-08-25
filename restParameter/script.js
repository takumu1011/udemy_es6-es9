function print(...arr) {
  // let arr = Array.prototype.slice.call(arguments);
  // console.log(arr);
  console.log(arguments);
}
print(1, 'a', 'true, {', [1, 2, 3]);

function restParam(...args) {
  console.log('長さ', args.length);
  console.log('中身', args);
}
// let array = [10, 20, 30];
// restParam(array);
restParam(10, 20, 30, 40);
