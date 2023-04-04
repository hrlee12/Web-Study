const express = require("express");
const controller = require("../controller/Cmain");
/* 
controller = {
    main : 해당 함수
    comments : 해당 함수
}
 */
const router = express.Router();

router.get("/", controller.main);

router.get("/comments", controller.comments);

router.get("/comment/:id", controller.comment);

// 다른 파일에서 require했을 때 보낼 것.
// require 할 때 이 파일 전~~부가 다 가는게 아님.
module.exports = router;
