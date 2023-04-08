// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user2",
  password: "1234",
  database: "codingon",
});

function query(sql) {
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    return rows;
  });
}

exports.createUser = (data, callback) => {
  const sql = `insert into user_mvc (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.pw}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("모델 >> ", rows);
    callback(rows);
  });
};
