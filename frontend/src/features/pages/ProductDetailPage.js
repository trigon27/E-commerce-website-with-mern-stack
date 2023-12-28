import React from "react";
import ProductDetail from "../ProductList/components/ProductDetail";
import Navbar from "../Navbar/Navbar";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
    </div>
  );
};

export default ProductDetailPage;
