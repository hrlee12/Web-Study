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
    callback();
  });
};

exports.checkAccount = (data, callback) => {
  console.log(data);
  const sql = `select * from user_mvc where userid = '${data.userid}' and pw = '${data.pw}' LIMIT 1;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("모델 checkAccount >>> ", rows);
    callback(rows);
  });
};

exports.showProfile = (userid, callback) => {
  const sql = `select * from user_mvc where userid = '${userid}' LIMIT 1;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("모델 showProfile >>> ", rows);
    callback(rows);
  });
};

exports.deleteAccount = (id, callback) => {
  const sql = `delete from user_mvc where userid = '${id}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("model delete_profile >>> ", rows);
    callback();
  });
};

exports.editAccount = (data, callback) => {
  const sql = `update user_mvc set userid = '${data.userid}', name= '${data.name}', pw = '${data.pw}'
  where id = '${data.id}';`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("모델 editAccount >>> ", rows);

    callback();
  });
};
