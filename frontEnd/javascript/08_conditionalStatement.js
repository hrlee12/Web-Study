console.log("connected?");

// if 문
if (5 > 3) {
  console.log("얍");
}

// prompt로 입력받은 수가 10보다 큰지 작은지 알려주기
// prompt로 입력받는 값은 문자임.
// 알림창을 띄워 데이터를 입력받음.
let number = Number(prompt("숫자를 입력해주세요."));
console.log(typeof number);

if (number > 10) {
  console.log("이 수는 10보다 큽니다.");
} else {
  console.log("이 수는 10보다 작습니다.");
}

if (number > 10) {
  console.log("이 수는 10보다 큽니다.");
} else if (number === 10) {
  console.log("입력한 수는 10이네요!");
} else {
  console.log("입력한 수가 10보다 작습니다.");
}

// 프롬프트로 입력받은 점수의 등급 매기기
number = Number(prompt("점수를 입력해주세요."));

if (number > 100 || number < 0) {
  console.log("입력값이 잘 못 됐습니다.");
} else if (number >= 90) {
  console.log("A");
  -3 - 2;
} else if (number >= 80) {
  console.log("B");
} else if (number >= 70) {
  console.log("C");
} else if (number >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 프롬프트로 나이를 입력받아 세대를 알려주기
let age = Number(prompt("나이를 입력하세요"));

if (age >= 20) {
  console.log("성인입니다.");
} else if (age >= 17) {
  console.log("고등학생입니다.");
} else if (age >= 14) {
  console.log("중학생입니다.");
} else if (age >= 8) {
  console.log("초등학생입니다.");
} else if (age >= 0) {
  console.log("유아입니다.");
} else {
  console.log("입력값이 잘 못 됐습니다.");
}

// 중첩 if 실습
let userId = "user01";
let userPw = "1234qwer";
function loginUser() {
  let inputId = prompt("아이디를 입력해주세요.");
  let inputPw = prompt("비밀번호를 입력해주세요.");

  if (userId === inputId) {
    if (userPw === inputPw) {
      alert("로그인 성공");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  } else if (inputId === "") {
    alert("아이디를 입력하지 않았습니다.");
  } else {
    alert("아이디가 틀렸습니다.");
  }
}

// 함수에서 사용하는 데이터를 매개변수로 보내주지 않아도 됨.
// 함수 안에서 함수 밖의 변수도 사용가능.

// switch문
// switch문은 자동으로 한 케이스만 읽고 빠져나오는 게 아니라  해당하는 케이스로 이동해서 끝까지 읽는다.
// 그러므로 케이스 끝에 break를 꼭 넣자 !
let a = 4;

switch (a) {
  case 3:
    console.log("a가 3이군요!");
    break;
  case 4:
    console.log("a가 4이군요!");
    break;
  case 5:
    console.log("a가 5이군요!");
    break;
  default:
    console.log("a가 무슨 값인지 모르겠습니다.");
    break;
}

number = Number(prompt("점수를 입력해주세요."));
switch (parseInt(number / 10)) {
  case 10:
  case 9:
    console.log("A입니다.");
    break;
  case 8:
    console.log("B입니다.");
    break;
  case 7:
    console.log("C입니다.");
    break;
  case 6:
    console.log("D입니다.");
    break;
  default:
    console.log("F입니다.");
    break;
}

number % 2 === 0 ? console.log("짝수입니다.") : console.log("홀수입니다.");

let now = new Date().getHours();
console.log(now);

// js는 정수나누기 없음. 무조건 실수로 나눠짐.
// 그러니까 12보다 작으면 0, 12보다 크면 1로 값을 얻어야 할 땐,
// 나누기를 하고 정수로 변환하면 됨.
parseInt(now / 12) === 0
  ? console.log("오전입니다.")
  : console.log("오후입니다.");
