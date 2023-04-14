let socket = io.connect();
// ⭕❌
socket.on("connect", () => {
  console.log("⭕Client Socket Connected >> ", socket.id);
});

const textBox = document.querySelector("#form-server");

// [실습1]
function sayHello() {
  // client -> server 정보 보내기
  // socket.emit(event, data): 데이터 '전송'
  // => event라는 이름으로 data를 전송
  socket.emit("hello", { who: "client", msg: "hello" });

  // socket.on(event, callback) : 데이터 받기
  // event에 대해서 정보를 받아 callback 함수 실행
  socket.on("helloRes", (data) => {
    textBox.textContent = `${data.who} : ${data.msg}`;
  });
}
function sayStudy() {
  socket.emit("study", { who: "client", msg: "study" });
  socket.on("studyRes", (data) => {
    textBox.textContent = `${data.who} : ${data.msg}`;
  });
}
function sayBye() {
  socket.emit("bye", { who: "client", msg: "bye" });
  socket.on("byeRes", (data) => {
    textBox.textContent = `${data.who} : ${data.msg}`;
  });
}
