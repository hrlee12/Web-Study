console.log("안녕");
helloWorld1();

function helloWorld1() {
  console.log("helloworld1");
}

helloWorld1();

function helloWorld2() {
  return "helloworld2";
}

console.log(helloWorld2());

function add(num1, num2) {
  console.log("안뇽");

  return num1 + num2;
}

console.log(add(1, 2));

let result = add(5, 5);

console.log(result);

function add2(num1, num2) {
  console.log(num1 + num2);
}

let result_2 = add2(1, 2);

console.log(result_2);

// 함수표현식으로 한 함수는 꼭 선언문 이후에 호출
let helloWorld3 = function () {
  console.log("helloworld3");
};

helloWorld3();

// 화살표 함수도 선언 이후에만 호출가능.
let helloWorld4 = () => {
  console.log("helloWorld4");
};

helloWorld4();

// 매개변수있는 버전

function sayHello1(text) {
  return "Hello " + text;
}

console.log(sayHello1("효리"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2("반가워", "효리"));

let sayHello3 = function (text) {
  return "Hello " + text;
};

console.log(sayHello3("효리"));

let sayHello4 = (text, name) => {
  return `${text} ${name}`;
};

console.log(sayHello4("반가워", "효리"));

let sayHello5 = () => {
  console.log("Hello!");
};

sayHello5();

function multifly(num1, num2) {
  return num1 * num2;
}

let multifly2 = function (num1, num2) {
  return num1 * num2;
};

let multifly3 = (num1, num2) => {
  return num1 * num2;
};
console.log(multifly(1, 2));
console.log(multifly2(2, 3));
console.log(multifly3(2, 4));

// 별표 두개 하면 제곱임
// ex) num ** 2 => 2제곱     num ** 3 => 세제곱
const SQUARE = (num) => {
  console.log(num ** 2);
};

SQUARE(3);
