-- 데이터베이스 목록 확인
SHOW databases;

-- codingon 데이터베이스 선택
USE codingon;

-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 user 테이블이 있다면 기존 테이블 지움
DROP TABLE IF EXISTS user_mvc;

-- TODO: user 데이터베이스 생성
    CREATE TABLE user_mvc (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid VARCHAR(20) NOT NULL ,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
    );

-- user 데이블 데이터 추가
INSERT INTO user_mvc (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user_mvc (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user_mvc (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user_mvc (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
DESC user_mvc; 

-- user 테이블 데이터 조회
SELECT * FROM user_mvc;