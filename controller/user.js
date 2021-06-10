const {createCustomer, getAllCustomers} = require("../model/user");

const Customer = function (customer) {
  this.email = customer.email;
  this.name = customer.name;
};

module.exports = {
  get: {
    async getAllCustomers(req,res,next){
     const customers = await getAllCustomers;     
     res.json(customers);
    }
  },
  post: {
    async postUser(req, res, next) {
      const newCustomer = new Customer(req.body);
      await createCustomer(newCustomer);
      res.json({ message: "User successfully created" });
    },
  },
};
