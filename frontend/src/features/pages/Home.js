import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductList from "../ProductList/components/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
};

export default Home;
