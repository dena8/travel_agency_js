const { User, Authority } = require("../model/index");
const jwt = require("jsonwebtoken");

module.exports = {
  get: {},
  post: {
    async register(req, res, next) {
      const { username, password, email } = req.body;

      const authority =
        (await User.count()) < 1
          ? await Authority.findOne({ where: { Authority: "Admin" } })
          : await Authority.findOne({ where: { Authority: "User" } });

      await User.create({
        username,
        password,
        email,
        AuthorityId: authority.id,
      });
      res.send({ massage: "created" });
    },
    async login(req, res, next) {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });

      if (user == null) {
        res.status(404).send({ message: "Wrong username or password" });
      }
      const userAuthority = await Authority.findOne({
        where: { id: user.AuthorityId },
      });
      const authority = userAuthority.authority;
      const token = await jwt.sign(
        { username, roles: authority },
        process.env.TOKEN_SECRET
      );

      res.setHeader("Authorization", token);
      res.set("Authorization", token);

      res.send({ username, Authorization: token });
    },
  },
};
