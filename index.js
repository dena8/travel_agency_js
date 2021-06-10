
require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT;

const db = require('./config/sequelize');
db.sync();

require('./config/express')(app);
require('./config/routes')(app);



app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


app.listen(port, (err) => {
  if(err){
    throw new Error('Error starting application')
  }
  console.log(`Travel agency app listening at http://localhost:${port}`)
}); 