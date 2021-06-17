const { User, Authority } = require("../model/index");
const jwt = require("jsonwebtoken");
const {isAdmin} = require('../middleware/auth')


module.exports = {
  get: {},
  post: {
    async register(req, res, next) {
      const { username,password, email } = req.body;   
      if(await User.count()==1){
        const guideAuthority = await Authority.findOne({ where: { Authority: "GUIDE_ROLE" } })
        await User.create({
          username,
          password,
          email,
          authorityId: guideAuthority.id
        });
        res.send({ massage: "created" });
        return;
      }   

      const authority =
        (await User.count()) < 1
          ? await Authority.findOne({ where: { Authority: "ADMIN_ROLE" } })
          : await Authority.findOne({ where: { Authority: "USER_ROLE" } });

            

      await User.create({
            username,
            password,
            email,
            authorityId: authority.id,
          });
   
      res.send({ massage: "created" });
    },
    async login(req, res, next) {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });

      if(!await User.comparePassword(password,user)){
        res.send(new Error('not work'));
        }

      if (user == null) {
        res.status(404).send({ message: "Wrong username or password" });
      }
      const userAuthority = await Authority.findOne({
        where: { id: user.authorityId },
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
