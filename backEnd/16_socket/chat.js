const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 7020;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});

// io.on(event_name, callback)
// : socket과 관련된 통신 작업 처리
// 이벤트가 발생하면 콜백함수 실행
io.on("connection", (socket) => {
  // "connection" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // ⭕❌
  // 최초 입장시 연결
  // socket.id : 소켓 고유 아이디 -> 웹 페이지별로 id 생성!
  // 세션은 브라우저 별로 id 생성
  // -> 크롬에서 탭 2개 띄우면 socket.id는 각각 생김 (2개)
  console.log("⭕ Server Socket Connected >> ", socket.id);

  // [실습1]
  socket.on("hello", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("helloRes", { who: "hello", msg: "안녕" });
  });

  socket.on("study", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("studyRes", { who: "study", msg: "안녕공부" });
  });

  socket.on("bye", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("byeRes", { who: "bye", msg: "잘가" });
  });
});

// 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
