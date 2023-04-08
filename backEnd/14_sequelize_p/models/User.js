// TODO : visitor 모델(-> 테이블 구조) 정의
// sequelize 모델과 mysql table 연결(대응)

const User = function (Sequelize, DataTypes) {
  // Sequelize: models/index.js 에서 sequelize
  // DataTypes: models/index.js에서 Sequelize
  // const model = Sequelize.define(
  //     param1,
  //     param2,
  //     param3,
  // )
  const model = Sequelize.define(
    "user", // param1: 서버에서 사용할 테이블 이름 설정
    // param2 : 컬럼 정의
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    // param3 : 모든 옵션 정의
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = User;
