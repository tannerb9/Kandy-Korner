import React, { useEffect, useState } from "react";
import NavBar from "../home/nav/NavBar";
import DataManager from "../../modules/DataManager";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return DataManager.getAll("employees").then((employees) => {
      setEmployees(employees);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container-cards">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} {...props} />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
