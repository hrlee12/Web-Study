const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/ajax", function (req, res) {
  console.log(req.query);
  // res.send()로 클라이언트에게 데이터를 보내줘야 프론트엔드에서 쓸 수 있음.
  res.send(req.query);
});

app.get("/get", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});
app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2-1. /axios 를 처리하는 라우터
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log("웹 서버 실행 !!");
  console.log(`http://localhost:${PORT}`);
});
