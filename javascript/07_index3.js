var name = "홍길동";
console.log(name);

// 재선언
var name = "이몽룡";
console.log(name);

/* let
그냥 기본 변수라고 생각하면 됨. 
선언과 동시에 초기화 안 해도 됨. 
재선언 불가능
재할당 가능

*/

let a = 1;
a = 2;
console.log(a);

let aa;
aa = 2;
console.log(aa);

/* const
상수
선언과 동시에 초기화
상수명은 대문자로 하자 
재선언 X 재할당 X
 */
const B = 3;
console.log(B);

// 식별자(변수, 함수) 이름 규칙
// 특수문자는 _ $만 가능
// 숫자는 맨 처음에 올 수 없음
// 예약어 금지

let $ = 5;
console.log($);

let _ = 6;
console.log(_);
