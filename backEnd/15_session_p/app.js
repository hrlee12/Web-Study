const express = require("express");
const app = express();
const session = require("express-session");
const dotenv = require("dotenv");
const PORT = 7070;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});
console.log("config >>> ", process.env.SECRET_KEY);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
