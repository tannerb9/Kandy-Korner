import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import ProductList from "./products/ProductList";

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
            return <ProductList />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
