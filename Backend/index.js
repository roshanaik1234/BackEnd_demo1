const express = require('express')
require('dotenv').config()
console.log(process.env.PORT)
const app = express()


// when deploy on production

const port = process.env.PORT||3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/roshan",(req,res)=>{
res.send("Hello Roshan")
})

app.get("/login",(req,res)=>{
res.send("<h1>Hello Roshan</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// Notes
// hot reloading=====reload automatic in react js
// nodemon package install avoid reload manully restart server