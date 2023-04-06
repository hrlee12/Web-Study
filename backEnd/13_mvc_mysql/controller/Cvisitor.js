const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data: Visitor.getVisitors() });

  // [after] mySQL DB
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
