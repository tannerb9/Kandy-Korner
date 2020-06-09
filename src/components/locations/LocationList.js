import React, { useEffect, useState } from "react";
import NavBar from "../home/nav/NavBar";
import DataManager from "../../modules/DataManager";
import LocationCard from "./LocationCard";

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);
  debugger;
  const getLocations = () => {
    return DataManager.getAll("locations").then((locations) => {
      setLocations(locations);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container-cards">
        {locations.map((locale) => (
          <LocationCard key={locale.id} locale={locale} {...props} />
        ))}
      </div>
    </>
  );
};

export default LocationList;
