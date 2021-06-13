const sequelize = require("../config/sequelize");
const { Model, DataTypes, Sequelize, QueryTypes } = require("sequelize");
const User = require("./user");

class Authority extends Model {}

Authority.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    authority: { type: DataTypes.STRING, allowNull: false }  
  },
  {
    hooks: {
      // afterCreate: () => {
      //   this.create({ authority: "Guide" });
      //   // console.log("This is after create");
      // },
    },
    sequelize,
  },
  {
    sequelize,
    modelName: "Authority",
  }
);
// Authority.addHook("afterCreate", function () {
//   this.create({ authority: "Guide" });
//   console.log("FROM HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
// });

// sequelize.query(
//   "INSERT INTO Authorities(id,authority,createdAt,updatedAt) VALUES('DEFAULT','ASD','2021-06-12 09:23:44','2021-06-12 09:23:44')",
//   { type: QueryTypes.INSERT }
// );

Authority.hasMany(User, { type: DataTypes.UUID, allowNull: false });

module.exports = Authority;
