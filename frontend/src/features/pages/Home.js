import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductList from "../ProductList/components/ProductList";
import Slider from "./slider";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Slider></Slider>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default Home;
