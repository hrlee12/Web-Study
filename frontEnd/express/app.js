const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(port + " is open !");
});

// public폴더를 static으로 나타낼거야.
// get보다 앞에 와야 함. 
app.use("/static", express.static(__dirname + "/public"));

// request : 서버가 클라이언트에게 보내는 요청
// response : 서버가 클라이언트게 보내는 응답
// 입력값 순서 지키기.
// /는 root
app.get("/", function (request, response) {
  //   response.send("hello express");
  response.render("test");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/login/register", (req, res) => {
  res.render("register");
});


app.set("view engine", "ejs");
app.set("/views", "views");

