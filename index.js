const express = require('express');
const app = express()
const port = 3000

require('./config/express')(app);


app.listen(port,(err)=>{
  if(err){
      throw new Error('error application')
  }
  console.log(`Travel agency app listening at http://localhost:${port}`);
});