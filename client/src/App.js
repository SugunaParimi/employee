import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Employee Details</h1>
      <div className="form">
        <label>Employee Number</label>
        <input type="number" name="employeeNumber" />
        <label>Employee Name</label>
        <input type="text" name="employeeName" />
        <label>Employee Address</label>
        <input type="text" name="employeeAddress" />
        <label>Employee PhoneNumber</label>
        <input type="number" name="employeePhoneNumber" />
        <label>Employee E-mail</label>
        <input type="email" name="employeeEmail" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
