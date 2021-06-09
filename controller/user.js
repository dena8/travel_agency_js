const createCustomer = require('../model/user');

const Customer = function(customer) {
    this.email = customer.email;
    this.name = customer.name; 
  };

module.exports ={
    get:{},
    post:{
         postUser(req,res,next){                   
            const newCustomer = new Customer(req.body);           
            createCustomer(newCustomer,function(err,result){
                if(err){
                    res.send(err);
                }
                res.json({ message: 'User successfully created'});
           })
        
        }
    },
}