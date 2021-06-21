const sequelize = require("../config/sequelize");
const { Model, DataTypes, Sequelize } = require("sequelize");
const{User} = require('./index');
const Category = require('./category');

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
    price: { type: DataTypes.DOUBLE, allowNull: false },
    enabled: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue:true},
    startDate:{type:DataTypes.DATE, allowNull:false}
  },
  {
    sequelize,
    modelName: 'Tour',
  }
);


Tour.belongsTo(Category,{
  foreignKey:'categoryId',
  as:'category'
})
module.exports = Tour;
