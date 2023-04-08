// [before]
// const Visitor = require("../model/Visitor");

// [after]
// models 변수 값 : models/index.js에서 export한 db 객체
const models = require("../models"); // models/index.js 내보내는 값
// console.log(models);
exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // [before[]
  // Visitor.getVisitors((result) => {
  //   console.log("Cvisitor.js >> ", result);
  //   res.render("visitor", { data: result });
  // });

  // [after]
  models.Visitor.findAll().then((result) => {
    console.log("findAll >> ", result);
    res.render("visitor", { data: result });
  });
};

exports.postVisitor = async (req, res) => {
  // [before]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js >> ", result);
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  //   // res.render("visitor", { data: result });
  // });

  // [after]
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  console.log("create >> ", result);
  res.send(result);
};

exports.deleteVisitor = async (req, res) => {
  // [before]
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("Cvisitor.js >> ", result);
  //   res.send({ isDelete: result, id: req.body.id });
  // });

  // [after]
  const result = await models.Visitor.destroy({
    where: { id: req.body.id },
  });
  console.log(result);
  res.send({ isDelete: true, id: req.body.id });
};

exports.getVisitor = async (req, res) => {
  // [before]
  // console.log("hi");
  // console.log(req.query);
  // Visitor.getVisitor(req.query.id, (result) => {
  //   console.log("Cvisitor.js >> ", result); // model callback에서 넘겨주는 rows[0]
  //   res.send(result);
  // });

  // [after]
  const result = await models.Visitor.findOne({
    where: { id: req.query.id },
  });
  console.log("findOne >> ", result);
  res.send(result);
};

exports.patchVisitor = async (req, res) => {
  // [before]
  // console.log("patch req.body 확인", req.body);

  // Visitor.patchVisitor(req.body, () => {
  //   res.send("수정 성공!");
  // });

  // [after]
  const result = await models.Visitor.update(
    { name: req.body.name, comment: req.body.comment },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  // console.log("update >> ", result);
  res.send("수정완료 !");
};
