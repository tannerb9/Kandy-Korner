import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";
import EmployeeList from "./employees/EmployeeList";
import EmployeeDetail from "./employees/EmployeeDetail";

const ApplicationViews = () => {
  const isAutheticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <>
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={(props) => {
          if (isAutheticated()) {
            return <ProductList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/products/:productId(\d+)/details"
        render={(props) => {
          if (isAutheticated()) {
            return <ProductDetail {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (isAutheticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)/details"
        render={(props) => {
          if (isAutheticated()) {
            return <EmployeeDetail {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
