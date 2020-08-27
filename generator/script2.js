function* generator(first, last) {
  while (first <= last) {
    yield first++;
  }
}
let gen = generator(0, 3);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* fibonacci() {
  let n1 = 0;
  let n2 = 1;
  while (true) {
    let current = n1;
    n1 = n2;
    n2 = current + n1;
    yield current;
  }
}

let gen2 = fibonacci();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
