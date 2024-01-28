import React from "react";
import Products from "../Products/Products";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {products.slice(0, 28).map((product, index) => (
        <Products data={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
