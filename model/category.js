const sequelize = require("../config/sequelize");
const { Model, DataTypes, Sequelize } = require("sequelize");
const Tour = require("./tour");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Category",
  }
);

//Authority.hasMany(User, { type: DataTypes.UUID, allowNull: false });
Category.hasMany(Tour,{ type: DataTypes.UUID, allowNull: false })

module.exports=Category;
