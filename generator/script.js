// function* generator() {
//   yield 10;
//   yield 20;
//   yield 30;
// }

// let generator = function* () {
//   yield 10;
//   yield 20;
// };
// let obj = {
//   *generator() {
//     yield 10;
//     yield 20;
//   },
// };
class Something {
  *generator() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
  }
}
let some = new Something();

let gen = some.generator();
console.log(gen.next());
console.log(gen.return(100));
console.log(gen.next());
console.log(gen.next());
