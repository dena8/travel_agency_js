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
    sequelize,
    modelName: "Authority",
  }
);

Authority.hasMany(User, { type: DataTypes.UUID, allowNull: false });

module.exports = Authority;
