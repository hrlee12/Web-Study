// TODO : visitor 모델(-> 테이블 구조) 정의
// sequelize 모델과 mysql table 연결(대응)

const Visitor = function (Sequelize, DataTypes) {
  // Sequelize: models/index.js 에서 sequelize
  // DataTypes: models/index.js에서 Sequelize
  // const model = Sequelize.define(
  //     param1,
  //     param2,
  //     param3,
  // )
  const model = Sequelize.define(
    "visitor", // param1: 서버에서 사용할 테이블 이름 설정
    // param2 : 컬럼 정의
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        //INT NOT NULL PRIMARY KEY AUTO_INCREMENT
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    // param3 : 모든 옵션 정의
    {
      tableName: "visitor", // db에서의 테이블 이름
      freezeTableName: true, // 테이블명 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    }
  );
  return model;
};

module.exports = Visitor;
