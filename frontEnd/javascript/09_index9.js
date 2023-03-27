/* 
js 표준 내장 객체
자바스크립트가 기본적으로 가지고 있는 객체

1) object
2) array
3) string
4) number
5) boolean

6) math
7) date : 시간, 날짜에 대한 정보를 얻기 위해 사용
*/

let now = new Date();
console.log(now);
console.log(now.getDate() + "일");
console.log(now.getDay());
console.log(now.getFullYear() + "년");
console.log(now.getMonth() + 1 + "월");
console.log(now.getMinutes() + "분 " + now.getSeconds() + "초");
console.log(now.getMilliseconds());
console.log(now.getDay());

// 평일인지 주말인지 나타내기
// 어차피 주말/평일 양자택일이라 나머지 하나는 default로 처리.
switch (now.getDay()) {
  case 0:
  case 6:
    console.log("주말입니다.");
    break;
  default:
    console.log("평일입니다.");
    break;
}

console.log(
  now.getDay() === 0 || now.getDay() === 6 ? "주말입니다." : "평일입니다."
);

// Math 객체
// Date는 생성해서 변수에 담아서 써야됨.
// 속성
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min([1, 2, 3]));
// 0이상 1미만의 수 반환
console.log(Math.random());
console.log(Math.round(5.1)); //반올림
console.log(Math.floor(5.5)); //내림
console.log(Math.ceil(5.22)); //올림
// 0부터 99까지
console.log(Math.floor(Math.random() * 100));
// 1부터 100까지
console.log(Math.floor(Math.random() * 100)+1);
console.log();
