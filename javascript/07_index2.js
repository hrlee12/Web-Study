/* alt+shift+a */

/* 
자료형
    기본
        string
        number
        boolean
        null
        undefined
        NaN

    객체형
        array
        object
*/

// 1. string : 문자열 따옴표로 감싸기 따옴표 상관없음.

let myname = "길동";
let email = "gildong@naver.com";
let city = "서울";

console.log(myname);

console.log(email);
console.log(city);

// 문자의 변수를 동시에 출력
// 콤마로 연결하면 띄어쓰기 출력.
// 붙여서 출력하고 싶으면 +
console.log("내 이름은", myname, "이고 이메일은 ", email, "입니다.");
console.log("내 이름은" + myname + "이고 이메일은 " + email + "입니다.");

//템플릿 리터럴
// 그냥 따옴표 말고 back 따옴표로 해야됨. 1옆에 있는 아이.
console.log(`내 이름은 ${myname}이고 이메일은 ${email}입니다. `);

// Number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);
// nan : not a number
console.log("apple" - 3);

// boolean
let checked = true;
let unchecked = false;
console.log(checked);
console.log(unchecked);

// undefined : 아무것도 할당 안 해주면 undefined형이 됨.
let undef;
console.log(undef);

// null
let empty = null;
console.log(empty);

// Array : 다른 종류의 자료형을 요소로 가질 수 잇음.
let fruits = ["a", 1, 2, true, null];
// let fruits2 = new Array['apple', 'banana', 'peach'];

console.log(fruits[0], fruits[1]);

// 2차원 배열
let korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean[0][0]);

let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(letters[3][0] + letters[1][3] + letters[0][1]);

// object
// object의 내부의 값들을 프로퍼티라고 함.
// object 내부에 함수 선언 가능
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
  mew: function () {
    return "냐용";
  },
};
// 점 표기법
// 오브젝트이름.key이름
console.log(cat);
console.log(cat.name);
console.log(cat.mew());

// 대괄호 표기법
// 오브젝트이름["key이름"]
console.log(cat["name"]);

let hyori = {
  name: "이효리",
  age: 25,
  isCute: true,
  job: "student",
  status: "fighting",
  hugry: function () {
    return "give me a dinner";
  },
};

console.log(hyori);
console.log(hyori.isCute);
console.log(hyori["isCute"]);
console.log(hyori.hugry());
// typeof 데이터
// typeof를 array나 null에 사용하면 object이 나옴.
console.log(typeof "name");
console.log(typeof hyori.name);
console.log(typeof hyori.hugry);
console.log(typeof NaN);

console.log(typeof 1, "isn't", typeof "is", "data type.");
console.log(
  "typeof를 array나 null에 사용하면,",
  typeof null,
  "결과를 얻을 수 있습니다. "
);

// 형변환
// prompt로 받은 값은 문자열로 저장됨.
// let mathScore = Number(prompt("수학 점수를 입력하세요."));
// let engScore = Number(prompt("영어 점수를 입력하세요"));
// console.log(typeof mathScore);
// console.log(typeof engScore);
// let avg = (mathScore + engScore) / 2;

// console.log("평균은 " + avg + "입니다.");

let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof str1.toString());

// 숫자인 문자열은 보이는 그대로 바꿈.
let n1 = true;
let n2 = false;
let n3 = "123.3";
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof Number(n1), Number(n1));
console.log(typeof Number(n2), Number(n2));
console.log(typeof Number(n3), Number(n3));
console.log(parseInt(n3));

// 템플릿 리터럴 안에는 함수도 넣을 수 있음 !!!!!!!
console.log(`${parseInt(1.2)} isn't ${typeof "1"} data type`);

let a;
a = "gyfl";
console.log(a);
