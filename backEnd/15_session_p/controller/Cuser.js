const userData = { id: "banana", pw: "1234" };

exports.main = (req, res) => {
  // 세션 읽기 (사용)
  // user 값이 없다면; undefined
  // user 값이 있다면; 로그인한 아이디 값
  const userSession = req.session.user;
  console.log(userSession);

  // 세션이 있으면 로그인 여부(true/false)
  if (userSession !== undefined) {
    res.render("index", { isLogin: true, user: userSession });
  } else {
    res.render("index", { isLogin: false });
  }
};

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.checkLogin = (req, res) => {
  console.log(req.body);
  console.log(req.body.userid);
  console.log(req.body.pw);
  if (req.body.userid === userData.id && req.body.pw === userData.pw) {
    // console.log("success!");
    // req.session.name = "login";
    // res.render("index", {
    //   isLogin: req.session.name,
    //   id: "banana",
    //   pw: "1234",

    req.session.user = req.body.userid;
    console.log("req.session >>>", req.session);

    res.redirect("/");
    // } else {
    //   console.log("failㅜ.ㅜ");
    //   res.render("index", { isLogin: req.session.name, loginFailed: true });
  } else {
    res.send(`
    <script>
    alert('로그인 실패...');
    document.location.href = '/';
    </script>
    `);
  }
};

exports.logout = (req, res) => {
  // 세션 읽기
  const userSession = req.session.user;

  if (userSession !== undefined) {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  } else {
    // 유저가 브라우저에서 /logout 경로로 직접 접근할 때
    res.send(`
  <script>
  alert('잘못된 접근입니다');
  document.location.href = '/';

  </script>
  `);
  }
};

// req 객체

// req.session : '사용자'별로 해당 객체({}) 안에 세션 정보 유지
// req.session.키 = 값 // 세션 쿠키 설정
// req.session.키;     // 세션 쿠키 사용(읽기)
// req.session.destroy(callback);   // 세션 삭제
