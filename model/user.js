const sequelize = require('../config/sequelize');
const {Sequelize} = require('sequelize');

const { Model, DataTypes, Deferrable } = require("sequelize");

class User extends Model{}

User.init({
  id: { type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
},
{
  sequelize,
  modelName: 'users',
});