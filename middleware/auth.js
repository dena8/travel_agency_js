require("dotenv").config();
const jwt = require('jsonwebtoken');

async function isAdmin (req,res,next){
    const tokenHeader = req.header('Authorization');
    const token = tokenHeader.slice(tokenHeader.indexOf(' ') + 1);
   

    const decodeToken = await jwt.verify(token,process.env.TOKEN_SECRET); 
    console.log(decodeToken.username,decodeToken.roles);
    next()


}

module.exports={
    isAdmin
}