const { User, Authority } = require("../model/index");
const jwt = require("jsonwebtoken");
const {isAdmin} = require('../middleware/auth')


module.exports = {
  get: {},
  post: {
    async register(req, res, next) {
      const { username,password, email } = req.body;   
      if(await User.count()==1){
        await User.create({
          username,
          password,
          email,
          AuthorityId: '2bd59486-2317-4e1d-9a8f-3a569075ared' 
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
            AuthorityId: authority.id,
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
