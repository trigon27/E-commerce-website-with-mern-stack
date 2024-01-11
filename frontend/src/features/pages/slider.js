import React from "react";
import cover from "../../Assets/cover.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-_AEE7D1 rounded-md mb-8">
      <div className="flex flex-col-reverse sm:flex-row">
        {/* Div with Image */}
        <div className="w-full sm:w-3/8 order-2 sm:order-1 flex items-center justify-center">
          <img
            src={cover}
            alt="Example Image"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Div with 3 Headings */}
        <div className="w-full sm:w-3/8 p-4 mt-10 ml-5 order-1 sm:order-2 mt-20">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-sm font-bold mb-2 mt-5 text-blue-500">
            SUMMER 2023
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold my-6">
            NEW COLLECTION
          </h2>
          <h3 className="text-sm sm:text-lg md:text-base lg:text-lg font-medium font-light mb-8">
            We know how large objects will act, but things on a small scale.
          </h3>
          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
