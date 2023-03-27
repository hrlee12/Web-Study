console.log("connected?");
/* 요소 선택 
    querySelector
    querySelectorAll
    getElementById            <-- 아이디는 한개만 있으므로 element
    getElementsByClassName    <-- 클래스는 여러개일 수도 있으므로 elements
                                배열형태로 출력
    getElement는 전부 다 가져옴 
    querySelector는 맨 먼저 나오는 애 하나
    querySelectorAll은 보나마나 다 가져옴. 
    전부 다 가져오는 애는 (id제외) 배열꼴로 나와서 for문, for each문 사용가능. 
    map, filter, find는 안됨. 
*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

// 1. getElementById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));
// 2. getElementsByClassName
// html collection의 형태로 가져옴(배열 같은 거)
console.log(document.getElementsByClassName("pink"));
// 요소 하나에 접근하고 싶으면 인덱스로
console.log(document.getElementsByClassName("pink")[0]);

// 3. getElementsbyTagName
// 해당되는 태그 전부를 가져옴.
console.log(document.getElementsByTagName("div"));

// 4. getElementsbyName
console.log(document.getElementsByName("id"));

// 5. querySelector
console.log(document.querySelector(".pink"));
console.log(document.querySelectorAll(".pink"));
console.log(document.querySelector("div"));
// 속성값으로 가져오는 것도 됨.
console.log(document.querySelector('[name="id"]'));

let pink = document.querySelectorAll(".pink");

console.log(pink);

for (let item of pink) {
  console.log(item);
}
