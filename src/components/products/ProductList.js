import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import ProductForm from "./ProductForm";
import DataManager from "../../modules/DataManager";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return DataManager.getAll("products").then((products) => {
      setProducts(products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} {...props} />
      ))}
    </div>
  );
};

export default ProductList;
