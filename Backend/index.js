const express = require('express')
require('dotenv').config()
console.log(process.env.PORT)
var cors = require('cors')
const app = express()
 
app.use(cors())
app.disable("etag"); 

// when deploy on production

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/roshan",(req,res)=>{
res.send("Hello Roshan")
})

app.get("/login",(req,res)=>{
res.send("<h1>Hello Roshan</h1>")
})

app.get("/studentList",(req,res)=>{
const studentList=[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "age": 20,
    "gender": "Male",
    "course": "Computer Science",
    "grade": "A"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "age": 21,
    "gender": "Female",
    "course": "Mechanical Engineering",
    "grade": "B+"
  },
  {
    "id": 3,
    "name": "Rohan Patel",
    "age": 19,
    "gender": "Male",
    "course": "Civil Engineering",
    "grade": "A-"
  },
  {
    "id": 4,
    "name": "Neha Gupta",
    "age": 22,
    "gender": "Female",
    "course": "Electronics",
    "grade": "B"
  },
  {
    "id": 5,
    "name": "Karan Singh",
    "age": 20,
    "gender": "Male",
    "course": "Information Technology",
    "grade": "A+"
  },
  {
    "id": 6,
    "name": "Simran Kaur",
    "age": 23,
    "gender": "Female",
    "course": "Business Administration",
    "grade": "B-"
  },
  {
    "id": 7,
    "name": "Aditya Joshi",
    "age": 21,
    "gender": "Male",
    "course": "Biotechnology",
    "grade": "A"
  },
  {
    "id": 8,
    "name": "Isha Mehta",
    "age": 19,
    "gender": "Female",
    "course": "Architecture",
    "grade": "A-"
  },
  {
    "id": 9,
    "name": "Rahul Nair",
    "age": 22,
    "gender": "Male",
    "course": "Electrical Engineering",
    "grade": "B+"
  },
  {
    "id": 10,
    "name": "Ananya Rao",
    "age": 20,
    "gender": "Female",
    "course": "Psychology",
    "grade": "A"
  }
]

res.send(studentList)

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// Notes
// hot reloading=====reload automatic in react js
// nodemon package install avoid reload manully restart server