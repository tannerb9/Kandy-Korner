import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {props.employee.firstName} {props.employee.lastName}
        </h3>
        <Link to={`/employees/${props.employee.id}/details`}>
          <button type="button">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
