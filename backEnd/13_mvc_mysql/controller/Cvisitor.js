const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js >> ", result);
    res.render("visitor", { data: result });
  });
};

exports.postVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js >> ", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
    // res.render("visitor", { data: result });
  });
};

exports.deleteVisitor = (req, res) => {
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js >> ", result);
    res.send({ isDelete: result, id: req.body.id });
  });
};

exports.getVisitor = (req, res) => {
  console.log("hi");
  console.log(req.query);
  Visitor.getVisitor(req.query.id, (result) => {
    console.log("Cvisitor.js >> ", result); // model callback에서 넘겨주는 rows[0]
    res.send(result);
  });
};

exports.patchVisitor = (req, res) => {
  console.log("patch req.body 확인", req.body);

  Visitor.patchVisitor(req.body, () => {
    res.send("수정 성공!");
  });
};
