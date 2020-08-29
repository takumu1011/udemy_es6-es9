// setTimeout(function () {
//   console.log('3秒後のアウトプット');
// }, 3000);

// let promise = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve('3秒後のアウトプット');
//   }, 3000);
// });
// promise.then(function (value) {
//   console.log(value);
// });

function getName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('太郎');
    }, 2000);
  });
}
function getAge() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(30);
    }, 2000);
  });
}
// getName()
//   .then((value) => {
//     console.log(value);
//     return getAge();
//   })
//   .then((value) => console.log(value));

Promise.all([getName(), getAge()]).then((value) =>
  console.log(value[0], value[1])
);
