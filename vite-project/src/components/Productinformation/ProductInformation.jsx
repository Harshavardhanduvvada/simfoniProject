import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../navbar/Navbar";
import Filter from "../../components/filter/Filter";
import Footer from "../../components/footer/Footer";
import Newarrivals from "../newarrivals/Newarrivals";
import IncreaseDecrease from "./IncreaseDecrease"; // Import IncreaseDecrease component here

function ProductInformation() {
  return (
    <Layout>
      <Navbar />
      <Filter />
      <div className="p-3 sm:w-1/5  drop-shadow-lg ">
        <div
          className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
          style={{
            backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          {/* Rest of your component */}
          <p className="leading-relaxed mb-3">
            <IncreaseDecrease /> {/* Use the IncreaseDecrease component here */}
            {/* <AiOutlineHeart /> */}
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <Newarrivals />
      <Footer />
    </Layout>
  );
}

export default ProductInformation;
