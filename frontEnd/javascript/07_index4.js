console.log(1);

// 산술 연산자
let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
// 실수로 나눔.
console.log(a / b);
console.log(a * b);
console.log(a % b);

//논리연산자
/* 
or : ||
and : &&
not !
*/
console.log(true || false);
console.log(true && false);
console.log(true && true);
console.log(!true);

// 비교 연산자
/* 
== : 타입이 달라도 형변환했을 때 값이 같으면 true
ex) '2' == 2     O
=== : 타입까지 검사 
ex) 2 == 2    O
    '2' == 2  X
그냥 깰꼼쓰하게 === 세개 쓰자. 
*/
console.log("===========================");
console.log("2" == 2);
console.log("2" === 2);
console.log("2" === "2");
console.log(2 === 2);
console.log(true == true);
console.log("0 == false :", 0 == false);

// 자동 형변환
let num1 = "3";
let num2 = 2;
let num3 = "10";

// +연산자는 문자가 들어가면 붙여짐.
console.log(num1 + num3);
console.log(num1 + num2);

// +는 문자열에서도 쓰이는 애라서 연산이 안 되지만
// 나머지는 숫자에서만 쓰이므로 숫자로 자동형변환해줌.
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num3 % num1);

// 비교연산자는 문자끼리는 자동형변환 X
// 왜냐 문자끼리도 비교연산자를 사용하기 때문 !
// 숫자랑 문자가 같이 있으면 숫자로 형변환 !
console.log(num1 <= num3);
console.log(num1 > num2);
console.log();

/* 문자->숫자 자동형변환 정리

덧셈 연산자 : 안됨 
나머지 사칙연산자(- / *) : 됨 (문자끼리도 됨. 어메이징)
비교연산자 : 문자끼리는안됨
            숫자랑 문자 같이 있으면 됨. 
*/
// 단축평가
// 조건합(||)과 조건곱(&&)의 성질을 이용함.
function test(name) {
  const obj = {
    // 둘 중에 하나라도 참이면 참
    // -> 앞의 것이 참이면 뒤의 것 안 보고
    //    앞의 것이 거짓이면 뒤의 것 봄.
    a: name || "기본이름",
  };
  console.log(obj);
}

let d = 2;
d > 1 && console.log("d는 1보다 크다. ");

test();
