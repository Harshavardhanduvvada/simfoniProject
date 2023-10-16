import { useSelector } from "react-redux";

function Categories() {
  const searchResultsDrp = useSelector((state) => state.reducer["inputResults"]).slice(0, 5);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            BEST SELLING CATEGORIES
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4 items-center">
          {searchResultsDrp.map((product, index) => (
            <div key={index} className="p-3 sm:w-1/5 drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src={product.image_url} // Use the product's image_url here
                    alt={product.name} // Use the product's name as alt text
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
