// require는 import와 같음.
// 라이브러리를 가져와서 이 파일에서 쓸 수 있게 함.
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/practice1", function (req, res) {
  res.render("practice1");
});

app.get("/practice2", function (req, res) {
  res.render("practice2");
});

app.get("/practice1/result1", function (req, res) {
  console.log(req.query);
  res.render("result1", { userInf: req.query });
});

app.post("/practice2/result2", function (req, res) {
  console.log(req.body);
  res.render("result2", { userInf: req.body });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
