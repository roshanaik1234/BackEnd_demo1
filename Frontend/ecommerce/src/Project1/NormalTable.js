import React, { useEffect, useState } from 'react'

const NormalTable = () => {
      const [studentList,setstudentList]=useState([]);

    useEffect(() => { 
    fetch("http://localhost:3000/studentList") // Replace with your API
      .then((response) => response.json())
      .then((data) => setstudentList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log("studentList",studentList)
  return (
    <>
   <div>
    <p>Hello Roshan</p>
   <div><h1>student count : {studentList.length}</h1></div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Course</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody id="studentTable">
     {
      studentList.map((student)=>{
        return(
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.gender}</td>
          <td>{student.course}</td>
          <td>{student.grade}</td>
        </tr>
        )
      })
     }
    </tbody>
  </table>
   </div>
   </>
  )
}

export default NormalTable
