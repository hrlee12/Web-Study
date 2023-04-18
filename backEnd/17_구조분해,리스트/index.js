const lists = ["apple", "grape"];
// [item1, item2] = lists;
// 분해할당하면서 새로운 변수도 할당 가능. -> 기존의 배열에는 반영 안됨
[item1, item2, item3 = "peach"] = lists;
console.log("item1:", item1);
console.log(item3);
console.log(lists);

let x = 1,
  y = 2;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

const obj = {
  key1: "one",
  key2: "two",
};
console.log(obj.key1);
// 키 값이 같아야만 객체의 구조분해 가능함.
const { key1, key2: newKey, key3 = "three" } = obj;
console.log("key1: ", key1);
console.log("newKey: ", newKey);
console.log("key3", key3);

// spread 연산자
// 함수 호출에 점(...)을 사용하는 경우 spread연산자
const a1 = [1, 2, 3, 4, 5];
console.log(a1);
console.log(...a1);

// rest 파라미터 : 남은 인수들을 묶어서 배열로 반환.
// 함수 매개변수에 점(...)을 사용하는 경우 rest 매개변수
const date = { c: 30, d: 40, e: 50, f: 60 };
// c랑 d를 제외한 나머지는 rest에 배열의 요소로 할당.
const { c, d, ...rest } = date;
console.log("c: ", c);
console.log(rest);

// 배열 분해할당 실습
const newArr = ["one", "two", "three"];
const [one, two, three, four = "four"] = newArr;
console.log(one, two, three, four);
console.log("newArr ", newArr);

// swap
let newA = 10,
  newB = 20;
console.log(newA, newB);
[newA, newB] = [newB, newA];
console.log(newA, newB);

// 객체 분해할당 실습
const newObj = {
  one: "one",
  two: "two",
  three: "three",
};
console.log(newObj.one);
console.log(newObj.two);
console.log(newObj.three);

const { one: newOne, two: newTwo, three: newTrhee } = newObj;

// spread 연산자
// -> 객체의 값을 펼치는 연산자
// 요소들만 쏙쏙 뽑음.
const t1 = [1, 2, 3];
const t2 = [5, 6];
const t3 = [...t1, ...t2];
console.log("t3", t3);

const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};
console.log(chocochipCookie);

const noTopingCookies = ["촉촉한 쿠키", "안촉촉한 쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키"];
const allCookies = [...noTopingCookies, "초코칩 쿠키", ...topingCookies];
console.log(allCookies);
