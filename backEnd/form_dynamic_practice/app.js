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

app.get("/register", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/login", function (req, res) {
  console.log(req.body);
  res.send({ body: req.body, id: "banana", pw: "4321" });
});

app.listen(PORT, function () {
  console.log("웹 서버 실행!");
  console.log(`http://localhost:${PORT}`);
});
