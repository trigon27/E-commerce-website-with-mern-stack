import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductList from "../ProductList/components/ProductList";
import Slider from "./slider";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Slider></Slider>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
};

export default Home;
