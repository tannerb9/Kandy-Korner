import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3 className="card-product">{props.product.name}</h3>
          <Link to={`/products/${props.product.id}/details`}>
            <button type="button">Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
