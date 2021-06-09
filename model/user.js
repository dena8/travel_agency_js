const pool = require('../config/database');

const Customer = function(customer) {
  this.email = customer.email;
  this.name = customer.name; 
};

module.exports= Customer.create =  (newCustomer,result) => {
  // pool.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
  //   if (err) {
  //     console.log("error: ", err);
  //     result(err, null);
  //     return;
  //   }
  //   result(null,res);    
  // });
 pool.query("INSERT INTO customers SET ?", newCustomer);
  
};
