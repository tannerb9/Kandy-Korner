import React, { useEffect, useState } from "react";
import NavBar from "../home/nav/NavBar";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import DataManager from "../../modules/DataManager";

const ProductList = (props) => {
  const [products, setProducts] = useState({
    name: "",
    price: "",
    productTypeId: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <NavBar />
      <div className="container">Here I Am</div>
    </>
  );
};

export default ProductList;
