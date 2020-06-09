import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-location">{props.locale.name}</h3>
        <h3>Address: {props.locale.address}</h3>
        <h3>Phone: {props.locale.phone}</h3>
      </div>
    </div>
  );
};

export default LocationCard;
