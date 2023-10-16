import { useSelector } from "react-redux";

function Suppliers() {
  const searchResultsDrp = useSelector(
    (state) => state.reducer["inputResults"]
  ).slice(4, 9);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Top suppliers
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4 items-center">
          {searchResultsDrp.map((product, index) => (
            <div key={index} className="p-4 sm:w-1/5 drop-shadow-lg">
              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <div className="container">
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src={product.image_url} // Use the product's image_url here
                    alt="Supplier"
                    style={{ height: "150px" }}
                  />
                  <p className="text-gray-900 item-center">{product.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Suppliers;
