require("dotenv").config();
const sequelize = require("../config/sequelize");
const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const Tour = require('./tour');
const Authority = require("./authority");


class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.beforeCreate(async (user, options) => {
  const hashPassword = await bcrypt.hash(user.password,Number(process.env.SALT_ROUNDS));  
  user.password = hashPassword;
});

User.comparePassword = function(password,user){
  return bcrypt.compare(password, user.password);
}

Tour.belongsTo(User,{
  foreignKey: 'creatorId',
  as: 'creator' 
});
 
module.exports = User;
