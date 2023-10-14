import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Suppliers() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Top suppliers
          </h1>
          <div class="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4 items-center">
          <div className="p-4 sm:w-1/5  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden,"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="container">
                <img
                  className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                  src=""
                  alt="blog"
                  style={{ height: "150px" }}
                />
                <p className="text-gray-900 item-center">Your Text Goes Here</p>
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src=""
                  alt="blog"
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src=""
                  alt="blog"
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          </div>
          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src=""
                  alt="blog"
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src=""
                  alt="blog"
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Suppliers;
