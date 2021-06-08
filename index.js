const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Travel Agency App!')
})

app.listen(port, () => {
  console.log(`Travel agency app listening at http://localhost:${port}`)
})