import React, { useEffect, useState } from "react";
import NavBar from "../home/nav/NavBar";
import DataManager from "../../modules/DataManager";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    DataManager.get("employees", props.match.params.employeeId).then(
      (employee) => {
        setEmployee({
          name: employee.firstName + " " + employee.lastName,
          address: employee.address,
          phone: employee.phone,
          location: employee.locationId,
        });
      }
    );
  }, []);

  return (
    <>
      <NavBar />
      <div className="">
        <h3>{employee.name}</h3>
        <h3>Address: {employee.address}</h3>
        <h3>Phone: {employee.phone}</h3>
        <h3>Store: {employee.location}</h3>
      </div>
    </>
  );
};

export default EmployeeDetail;
