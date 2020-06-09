import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";
// import ProductCard from "./ProductCard";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  // const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DataManager.get("products", props.productId).then((product) => {
      setProduct({
        name: product.name,
        breed: product.price,
        pic: product.productType,
      });
      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   DataManager.getWithLocations("products", props.match.params.productId).then(
  //     (product) => {
  //       setProduct(product);
  //       setLocations(product.);
  //     }
  //   );
  // });

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>{product.name}</h3>
          <h3>{product.productType}</h3>
          <h3>${product.price}/lb</h3>
          <h3>Sold at:</h3>
          <div className="locationsContainer"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
