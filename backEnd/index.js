// setTimeout()
// setTimeout(code, delay) : delay 동안 기다리다가 code 함수 실행
// delay는 ms단위라서 1000 -> 1초
// setTimeout() 함수는 호출 따로 안해도 자동으로 호출됨.
/* 
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

// 1초 후에 body태그의 배경색상을 빨간색으로 바꾸기
setTimeout(() => {
  document.querySelector("body").style.backgroundColor = "red";
}, 1000);

setTimeout(() => {
  document.querySelector("h1").style.color = "blue";
}, 1000);
 */

//=======================================================================
// 비동기 처리
// ex) 편의점에 들어가서 음료수를 사고 나오는 상황
/*
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민!");
}

function pickDrink() {
  // setTimeout을 이용해 3초 고민한 후에 코드 실행
  setTimeout(function () {
    console.log("고민 끝~!");
    product = "제로 콜라";
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}


// 변수를 선언만 하고 할당을 안하면 undefined 들어감. 
let product;
let price;
goMart();
pickDrink();
pay(product, price);
*/

//===============================================================
// 앞선 코드의 문제점을 콜백 함수로 해결해보자!
// 다른 함수의 실행이 끝난 후 실행되는 함수
// 어떤 함수의 파라미터로 쓰임.
/* 
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민!");
}

function pickDrink(callback) {
  // callback: 매개변수가 될 콜백 함수
  setTimeout(function () {
    console.log("고민 끝~!");
    product = "제로 콜라";
    price = 2000;
    callback(product, price); //매개변수로 넘긴 콜백함수를 실행
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// 변수를 선언만 하고 할당을 안하면 undefined 들어감.
let product;
let price;
goMart();
pickDrink(pay);
 */

//=============================================================
// 콜백 지옥
// 콜백함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
// -> 가독성/유지보수 최약

// 1초마다 배경색이 변경되는 코드
// 빨 -> 주 -> 노 -> 초 -> 파

setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
