const createCustomer = require("../model/user");

const Customer = function (customer) {
  this.email = customer.email;
  this.name = customer.name;
};

module.exports = {
  get: {},
  post: {
    async postUser(req, res, next) {
      const newCustomer = new Customer(req.body);
      await createCustomer(newCustomer);
      res.json({ message: "User successfully created" });
    },
  },
};
