// map()

const list = ["a", "b", "c", "d", "e"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

const newList = list.map((val, idx, arr) => {
  console.log(val);
  console.log(idx);
  console.log(arr);

  return val + val;
});
console.log(newList);
// filter()
// js 배열 내장 함수
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아서
// true면 요소 유지, false면 버려서 "새로운 배열"을 반환

const animals = ["dog", "cat", "rabbit"];

// 매개변수에 각각의 원소가 들어감.
const newAnimals = animals.filter((animal) => {
  return animal.length > 3;
});
console.log(newAnimals);

const newAnimals2 = animals.filter((animal) => {
  return animal.includes("a");
});
console.log(newAnimals2);

const nums = [1, 2, 3, 4, 5];
const words = ["dog", "cat", "rabbit", "apple", "wow"];

const doubbleNums = nums.map((number) => {
  return number * 2;
});

console.log(doubbleNums);

const newWords = words.filter((word) => {
  return word.includes("t");
});

console.log(newWords);

const tripleNums = nums.map((num) => num * 3);
console.log(tripleNums);
console.log(tripleNums.includes(3));

const aaa = ["a", "b", "c"];
const bbb = ["d", "e", "f"];

// concat() : 배열 합치기
console.log(aaa.concat(bbb));

const arr1 = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
];

const arr2 = [
  { name: "d", id: 4 },
  { name: "e", id: 5 },
  { name: "f", id: 6 },
];

const arr3 = arr1.concat(arr2);
console.log(arr3);
