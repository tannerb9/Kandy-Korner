import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";
import NavBar from "../home/nav/NavBar";
// import ProductCard from "./ProductCard";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [productType, setProductType] = useState({});
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DataManager.getProductType(props.match.params.productId).then((product) => {
      setProductType(product.productType);
    });
  }, []);

  useEffect(() => {
    DataManager.getWithLocations("products", props.match.params.productId).then(
      (product) => {
        setProduct({
          name: product.name,
          price: product.price,
          productTypeId: product.productTypeId,
        });
        setLocations({ location: product.locationId });
        setIsLoading(false);
      }
    );
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
      <NavBar />
      <div className="card">
        <div className="card-content">
          <h3>{product.name}</h3>
          <h3>Type: {productType.name}</h3>
          <h3>Price: ${product.price}/lb</h3>
          <h3>Sold at:</h3>
          <div className="locationsContainer"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
