import IncreaseDecrease from "../incresedecrese/IncreseDecrese";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Allitems() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            ALL ITEMS
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <button>
                  <img
                    className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                </button>
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simfoni
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  <IncreaseDecrease /> <AiOutlineHeart />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simfoni
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  <IncreaseDecrease />
                  <AiOutlineHeart />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    <Link
                      to={"/"}
                      className="text-sm font-medium text-gray-700 "
                    ></Link>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simfoni
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  <IncreaseDecrease />
                  <AiOutlineHeart />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simfoni
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  <IncreaseDecrease />
                  <AiOutlineHeart />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:w-1/5  drop-shadow-lg ">
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  simfoni
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p className="leading-relaxed mb-3">
                  <IncreaseDecrease />
                  <AiOutlineHeart />
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"></h1>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-3 sm:w-1/5  drop-shadow-lg ">
              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <div className="flex justify-center cursor-pointer">
                  <img
                    className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    simfoni
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    This is title
                  </h1>
                  {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                  <p className="leading-relaxed mb-3">
                    <IncreaseDecrease />
                    <AiOutlineHeart />
                  </p>
                  <div className=" flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 sm:w-1/5  drop-shadow-lg ">
              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <div className="flex justify-center cursor-pointer">
                  <img
                    className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    simfoni
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    This is title
                  </h1>
                  {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                  <p className="leading-relaxed mb-3">
                    <IncreaseDecrease />
                    <AiOutlineHeart />
                  </p>
                  <div className=" flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 sm:w-1/5  drop-shadow-lg ">
              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <div className="flex justify-center cursor-pointer">
                  <img
                    className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    simfoni
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    This is title
                  </h1>
                  {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                  <p className="leading-relaxed mb-3">
                    <IncreaseDecrease />
                    <AiOutlineHeart />
                  </p>
                  <div className=" flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 sm:w-1/5  drop-shadow-lg ">
              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <div className="flex justify-center cursor-pointer">
                  <button>
                    <img
                      className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                      src="https://dummyimage.com/720x400"
                      alt="blog"
                    />
                  </button>
                </div>
                <div className="p-5 border-t-2">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    simfoni
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    This is title
                  </h1>
                  {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                  <p className="leading-relaxed mb-3">
                    <IncreaseDecrease />
                    <AiOutlineHeart />
                  </p>
                  <div className=" flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 sm:w-1/5  drop-shadow-lg ">
              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <div className="flex justify-center cursor-pointer">
                  <img
                    className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    simfoni
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    This is title
                  </h1>
                  {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                  <p className="leading-relaxed mb-3">
                    <IncreaseDecrease />
                    <AiOutlineHeart />
                  </p>
                  <div className=" flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Allitems;
