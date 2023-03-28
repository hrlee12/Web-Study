// function red() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "red";
//       resolve();
//     }, 1000);
//   });
// }

// function orange() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "orange";
//       resolve();
//     }, 1000);
//   });
// }
// function yellow() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       resolve();
//     }, 1000);
//   });
// }
// function green() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "green";
//       resolve();
//     }, 1000);
//   });
// }
// function blue() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "blue";
//       resolve();
//     }, 1000);
//   });
// }

// red()
//   .then(function () {
//     return orange();
//   })
//   .then(function () {
//     return yellow();
//   })
//   .then(function () {
//     return green();
//   })
//   .then(function () {
//     return blue();
//   });

// function colorChange() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       colorList = ["red", "orange", "yellow", "green", "blue"];
//       document.querySelector("body").style.backgroundColor = colorList[count];
//       count += 1;
//       resolve();
//     }, 1000);
//   });
// }

// let count = 0;
// colorChange()
//   .then(colorChange)
//   .then(colorChange)
//   .then(colorChange)
//   .then(colorChange);

function colorChange(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

// 동기화 하려고 할 땐, 미리 선언된 함수는 함수의 ()제외하고 식별자만 적는다.
// 그런데 값을 입력해줘야 할 땐?
// 익명함수 안에 담아서 하면 된다.
// 그리고 return은 resolve()에 값을 입력해줘서 그 값을 보내야 할 때 필요하다.
// 입력값 없으면 굳이 안 써도 됨.
colorChange("red")
  .then(() => {
    colorChange("orange");
  })
  .then(() => {
    colorChange("yellow");
  })
  .then(() => {
    return colorChange("green");
  })
  .then(() => {
    return colorChange("blue");
  });
