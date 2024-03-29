const express = require("express");
const app = express();
const PORT = 8000;

// view engine 등록
app.set("view engine", "ejs");
// ejs를 담을 views 폴더 경로 설정
app.use("/views", express.static(__dirname + "/views"));

// body-parser 사용하기
// post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.urlencoded({ extended: true }));
// json 형태로 데이터를 주고 받음.
app.use(express.json());

// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!

// localhost:PORT/ 접속했을 때, index.ejs를 보여주겠다
app.get("/", function (req, res) {
  // views/index.ejs 파일을 찾아서 응답
  const myTitle = "폼 실습을 합시다~~~";
  res.render("index", { title: myTitle });
});

/* app.get("/getForm", function (req, res) {
  res.render("test");
});

app.get("/test", function (req, res) {
  res.render("test");
});
 */
app.get("/getForm", function (req, res) {
  // form으로 submit 하면 request 객체가 서버로 감.
  // request 객체의 query는 입력한 값
  console.log(req.query);
  // res.send("get 요청 성공!!!");
  res.render("result", {
    title: "GET요청 폼 결과 확인하기",
    userInf: req.query,
  });
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  // res.send("post 요청 성공!!");
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInf: req.body,
  });
});

app.listen(PORT, function () {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});
