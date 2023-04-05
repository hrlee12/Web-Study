// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const AccountInf = require("../model/AccountInf");

exports.main = (req, res) => {
  res.render("index");
};

// body를 읽을 수 있게 안 했음.
exports.login = (req, res) => {
  console.log(req.body);
  let userInf = AccountInf.users;
  userInf = userInf.split("\n");
  for (let i = 0; i < userInf.length; i++) {
    userInf[i] = userInf[i].split("//");
  }
  console.log(userInf);
  let existData;
  for (let i = 0; i < userInf.length; i++) {
    if (req.body.id == userInf[i][0] && req.body.pw == userInf[i][1]) {
      res.send({ userName: userInf[i][2], success: true });
      return;
    }
  }

  if (req.body.id && req.body.pw) {
    res.send({ success: false, existData: true });
  } else {
    res.send({ success: false, existData: false });
  }
};
