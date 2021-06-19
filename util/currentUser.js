require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../model/index");

module.exports = async (req) => {
  const tokenHeader = req.header("Authorization");
  const token = tokenHeader.slice(tokenHeader.indexOf(" ") + 1);

  const decodeToken = await jwt.verify(token, process.env.TOKEN_SECRET);

  const user = await User.findOne({
    where: { username: decodeToken.username },
  });

  return user;
};
