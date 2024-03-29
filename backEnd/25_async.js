console.log("connected?");
// async / await
// 비동기 처리 패턴 중 가장 최신 문법
// promise 기반 코드를 더 가독서 있게 하기 위해 등장

// 구조
// 함수 앞에 async 키워드 붙이기
// 비동기 처리 메서드 앞에 awiat 키워드 붙이기 (해당 작업을 기다려 줄 것)
async function 함수명() {
  await 비동기처리_메서드명();
}

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["수박", "키위", "레몬"]; // 과일 배열
      //   return fruits;
      resolve(fruits);
      //   reject(new Error());
    }, 1000);
  });
}

/* 
// #1 promise then() 사용시
fetchFruits().then(function (fruits) {
  console.log(fruits);
});

 */

// #2 async/await 사용시
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printItems();

// 예외 처리 try catch 구문
// 구조
try {
} catch (error) {
  // 에러 발생하면 실행
}

// try 블록 코드가 실행
// try 블록에서 에러가 없다면, catch 블록은 건너뜀
// try 블록에서 에러가 있다면, try 블록 실행이 중단 -> catch 블록 코드 실행

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민!");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝~!");
      product = "제로 콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
let product, price;

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

exec();
