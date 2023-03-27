console.log("connected?");

for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}

for (let i = 0; i < 10; i = i + 3) {
  console.log(`안녕 ${i}`);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지의 합
let sum = 0;
let n = 11;
for (let i = 0; i < n; i++) {
  sum += i + 1;
}

console.log(sum);

// 배열의 요소를 모두 출력해보기
let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열의 요소의 합 더하기
let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;

for (let i = 0; i < numsArr.length; i++) {
  numsSum += numsArr[i];
}

console.log(numsSum);

// 1~20 짝수일 때의 합 구하기
sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) sum += i;
}

console.log(sum);

// 10000까지의 숫자 중 13의 배수이면서 홀수인 숫자를 찾자.
// for문과 if문의 중첩 사용

for (let i = 0; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) console.log(i);
}

// prompt로 입력받은 수까지 13의 배수이면서 홀수인 숫자를 찾자.
number = Number(prompt("숫자를 입력하세요."));

for (let i = 0; i <= number; i++) {
  // &&은 false가 나타나는 순간 끝내므로 참인 경우가 더 적을 조건을 앞으로 쓰자.
  if (i % 13 === 0 && i % 2 === 1) console.log(i);
}

// 구구단 출력
for (let i = 2; i < 10; i++) {
  console.log(`---${i}단---`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// while

let n2 = 1;
while (n2 < 5) {
  console.log(n2);
  n2++;
}

n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 === 0) console.log(n2);
  n2--;
}
n2 = 1;
while (true) {
  console.log("안녕");
  if (n2 === 10) break;
  n2++;
}

// confirm()함수는 alert처럼 ()안의 문구가 씌인 창을 띄운다.
// 확인을 누르면 true, 취소를 누르면 false를 반환한다.
n2 = 0;
while (confirm("계속 진행")) {
  n2++;
  alert(`${n2}번째 alert창`);
}

// continue
let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum3 += i;
}

console.log(sum3);

// 0~100 중에서 2 또는 5의 배수 총합 구하기
sum = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0 || i % 5 === 0) sum += i;
}

console.log(sum);
