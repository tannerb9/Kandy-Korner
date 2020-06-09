import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";
import ProductCard from "./products/ProductCard";

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
    </>
  );
};

export default ApplicationViews;
