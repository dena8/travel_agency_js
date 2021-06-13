const sequelize = require("../config/sequelize");
const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

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

User.beforeCreate((user, options) => {
  bcrypt.hash(user.password, 5, function (err, hash) {
    if (err) {
      console.log(err);
    }
    user.password = hash;
    console.log("user.password", user.password);
  });
});

module.exports = User;
