import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((result) => result.json())
      .then((resp) => {
        setData(resp.data); 
      });
  }, []);
  
  console.warn(data);
  
  return (
    <div className="App">
      <h1>Dummy Api</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
              <td>{employee.profile_image}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
