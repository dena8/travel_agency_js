const sequelize = require("../config/sequelize");
const { Model, DataTypes, Sequelize } = require("sequelize");

class Tour extends Model {}

Tour.init(
  {
    id: { type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    region: { type: DataTypes.STRING, allowNull: false },
    participants: { type: DataTypes.INTEGER, allowNull: false },
    difficultyLevel: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    enabled: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue:true},
  },
  {
    sequelize,
    modelName: 'Tour',
  }
);

module.exports = Tour;
