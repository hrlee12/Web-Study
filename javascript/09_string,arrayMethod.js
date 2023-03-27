// 문자열 관련 함수 + 속성
/* 
toUpperCase() toLowerCase()
trim()
indexOf()
slice()
replace(), replaceAll()
repeat()
*/

let str1 = "Strawberry Moon";
let str2 = "   Strawberry Moon   ";
//문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[2]);

console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
console.log(str1.length);
console.log(str2.length);
// 인덱스를 -로 해서 뒤쪽으로 하는 것은 slice함수에만 가능하다 ! 그냥 인덱스 지정할 땐 당연히 ~~ 안됨 !!

// 매개변수 없는 함수
let msg = "Happy Birthday!";
//camel-case
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str2.trim());
console.log(str2);
console.log(str2.trim().length);

let msg2 = "   hello world!";
console.log(msg2.trim().toLowerCase());

// 매개변수 있는 함수
let fruit = "appleMange";
console.log(fruit.indexOf("a"));
// 문자가 시작하는 인덱스 반환
console.log(fruit.indexOf("apple"));
// 없는 문자는 -1 반환.
console.log(fruit.indexOf("c"));

// index가 3인 문자 반환. indexOf과 반대
console.log(fruit.charAt(3));

//아무것도 안 넣으면 전부 반환.
console.log(fruit.slice());
// 인자를 하나 넣으면 인덱스 5부터 전부 추출.
console.log(fruit.slice(5));
// 3부터 5까지
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

// 문자열 함수들을 써도 기존의 데이터는 안 변하고 적용시킨 값을 반환.
console.log(fruit);

let msg3 = "Wow! It is so amazing!!";
// 문자 한 개 아니고 여러개를 변환하는 것도 가능.
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3);
console.log(msg3.replaceAll("o", "a"));
console.log(msg3.replace("o", "a"));

let date = "23.03.10";
// split함수는 문자열을 배열로 변환시켜주는데 인자가 나누는 기준이 됨.
// 빈문자("")가 들어가면 문자를 하나하나 다 나눔. 아무것도 안 넣는 건 안 됨!
// '.'이 들어가면 .기준으로 요소로 나눔.
console.log(date.split(""));

console.log("hi".repeat(5));

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rabbit", "puppy", "hamster"];
// js의 배열은 처음에 할당한 메모리에서 변경불가능하지 않음.
// 그래서 길이가 5인 배열을 선언했지만
// 현재 길이를 넘어선 index5에 새로운 요소를 넣을 수 있음.
arr1[5] = 6;
console.log(arr1);
// 아예 혼자 동 떨어지게도 가능. 중간에 빈 칸 생김.
arr1[8] = 7;
console.log(arr1);
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1);
// 맨 마지막 요소를 꺼내서 반환함.
// 데이터도 변경되고 반환값도 있음.
console.log(arr1.pop());
console.log(arr1);

arr1.unshift("cat");
console.log(arr1);
// 맨 앞의 요소를 꺼내서 반환함. pop의 맨 첫번째 요소 버전.
console.log(arr1.shift());
console.log(arr1);

console.log(arr2.includes("quakka"));

console.log(arr2.indexOf("quakka"));

// 배열의 순서를 거꾸로 뒤집어 저장하고 반환함.
console.log(arr1.reverse());
console.log(arr1);

// split : 문자열 -> 배열
// join : 배열 -> 문자열
// 기존 데이터는 변경하지 않고 값을 반환함.
// split의 경우처럼 join도 인자를 아무것도 안 넣으면 ,까지 그대로 문자열 변환
// 요소들만 모아서 한 문자열로 하고 싶으면 ""빈 문자열을 넣자.
// 다른 걸 넣으면 그걸 요소 사이에 넣어서 문자열로 반환.
// 정의 다시 정리하기
str1 = arr1.join("");
console.log(str1);
str1 = arr1.join();
console.log(str1);

let arr3 = [1, 3, 5, 4, 6];
let alphabets = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr1.length; i++) {
  console.log(i);
}

for (let number of arr3) {
  console.log(number);
}

for (let alpha of alphabets) {
  console.log(alpha);
}

// forEach함수는 매개변수로 익명함수가 들어감.
// 매개변수 이름은 바뀌어도 되는데 순서는 그대로임.
// 데이터, 인덱스, 배열전체
arr3.forEach(function (data, index, array) {
  console.log(data, index, array);
});

// 두개만 쓰면 데이터, 인덱스
arr3.forEach((data, index) => {
  console.log(data, index);
});

// 한개만 쓰면 데이터
arr3.forEach((data) => {
  console.log(data);
});

// filter
console.log("-------");
arr3 = arr3.filter(function (num) {
  return num > 3;
});
console.log(arr3);

// 이런 형식의 리턴이 이 함수를 안 쓸때도 될까?
let six = arr2.filter(function (animal) {
  return animal.length >= 6;
});

console.log(six);

// map, find
// map() : 배열 내의 모든 원소에 대해 연산한 결과를 모아서 배열로 반환
arr4 = [1, 2, 3].map(function (el) {
  return el * 3;
});

console.log(arr4);

// 화살표 함수의 경우 , 중괄호와 return 생략 가능
// map함수가 아닐때도 기본으로 가능할까?
arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((num) => num * 10);
console.log(arr4);

// find : 특정 조건을 만족하는 첫번째 요소 반환.
let findresult = arr4.find((num) => num >= 30);
console.log(findresult);

// 1~100까지의 배열 for문을 사용하여 만들기!
// 해당 배열의 합을 for문, for of문, forEach문 사용해서 구하기
arr1 = [];
for (let i = 0; i < 100; i++) {
  arr1[i] = i + 1;
}
console.log(arr1);

arr1 = [];
for (let i = 0; i < 100; i++) {
  arr1.push(i + 1);
}

console.log(arr1);

let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(sum);

sum = 0;
for (let i of arr1) {
  sum += i;
}
console.log(sum);

sum = 0;
arr1.forEach((data) => (sum += data));
console.log(sum);

// 두 배열에서 동일한 요소만을 가지만 배열 same 만들기
// 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = [
  "수박",
  "사과",
  "참외",
  "오렌지",
  "파인애플",
  "망고",
  "토마토",
  "멜론",
];
let same = [];
let diff = [];
for (let i = 0; i < fruits2.length; i++) {
  if (fruits1.includes(fruits2[i])) same.push(fruits2[i]);
}

console.log(same);

for (let i = 0; i < fruits1.length; i++) {
  if (!fruits2.includes(fruits1[i])) diff.push(fruits1[i]);
  if (i < fruits2.length) {
    if (!fruits1.includes(fruits2[i])) diff.push(fruits2[i]);
  }
}

console.log(diff);

let same2 = fruits1.filter((fruit) => fruits2.includes(fruit));
console.log(same2);
