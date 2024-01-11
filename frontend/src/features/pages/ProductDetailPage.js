import React from "react";
import ProductDetail from "../ProductList/components/ProductDetail";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetailPage;
