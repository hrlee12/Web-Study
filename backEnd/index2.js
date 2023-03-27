// Promise
// 비동기 함수를 동기처리하기 위해 만든 객체
// 성공, 실패를 분리해서 반환

// 성공이든 실패든 무언가의 최종 결과
// resolved : 성공
// rejected: 실패
// 프로미스를 콜백함수 전달할 필요 없음. 그냥 호출하면 됨!

// 1. 프로미스 생성 코드
// promise1 함수의 return 값이 Promise객체
// -resolve() : 성공한 경우, 프로미스 사용시 then 메서드와 연결.
// -reject() : 실패한 경우, 프로미스 사용시 catch 메서드와 연결.

/* 
function promise1(flag) {
  // 프로미스 객체 생성해서 리턴
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `Promise 상태는 fullfilled. then으로 연결됩니다. 이 때의 flag는 ${flag}입니다.`
      );
    } else {
      reject(
        `Promise 상태는 rejected. catch로 연결됩니다. 이 때의 flag는 ${flag} 입니다.`
      );
    }
  });
}

// 2. 프로미스 사용 (소비)하는 코드
promise1(5 > 3)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
 */
/* 
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민!");
}

function pickDrink(money) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝~!");
      product = "제로 콜라";
      price = money;
      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

function noPay() {
  console.log(`${price}를 지불할 돈이 부족합니다.`);
}

// 변수를 선언만 하고 할당을 안하면 undefined 들어감.
// then, catch에서 사용하는 변수는 pending 상태의 변수 고대로 가져다 씀.
let product;
let price;
goMart();

pickDrink(3000)
  .then(pay) // pickDrink 안에서 resolve 함수 샐행시 then으로 연결.
  .catch(noPay); // pickDrink 안에서 reject 함수 실행시 catch로 연결.

 */

//=================================================================
// Promise 체이닝
// 함수를 이용해 (4 + 3) * 2 - 1 == 1 연산을 해보자.
// 1. add(4, 3)
// 2. mul(add(4, 3), 2)
// 3. sub(mul(add(4, 3), 2))
// add -> mul -> sub 순으로 연산 필요

// step 1. 콜백함수로 해결하기
/* 
function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2;
    callback(result);
  }, 2000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result);
  }, 500);
}

// add -> mul -> sub
add(4, 3, function (x) {
    console.log("1: ", x); // x = 4+3
    mul(x, function (y) {
      console.log("2: ", y);
      sub(y, function (z) {
        console.log("3: ", x);
      });
    });
  });


  add(4, 3, mul) {
    mul(x, function (y) {
      console.log("2: ", y);
      sub(y, function (z) {
        console.log("3: ", x);
      });
    });
  });
     */

//==============================================================
// step 2. Promise 체이닝 이용
// 장점 1: then 메서드 연속 사용 가능 ->
// 장점 2: 예외 처리 간편
//

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 2000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      //   resolve(result);
      reject(new Error("의도적으로 예외처리"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3 :", result);
  })
  .catch(function (error) {
    console.log("실패!");
    console.log(error);
  });
