import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Sort from "../../components/sort/Sort";
import ProductFilter from "../productfilter/ProductFilter";

function Filter() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <div className=" container mx-auto px-4 mt-5 ">
        <div
          className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value="Purchase Orginization">Orginization</option>
                <option value="Indian market">Indian marke</option>
                <option value="Us market">Us market</option>
                <option value="Top Supliers">Top Supliers</option>
              </select>
              <select
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value="Company">Company</option>
                <option value="Style">Style</option>
                <option value="Bevarages">Bevarages</option>
                <option value="Coffe Products">Coffe Products</option>
              </select>
              <select
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value="Plant">Plant</option>
                <option value="Helmet">Helmet</option>
                <option value="Fruits added Sugar">Fruits added Sugar</option>
                <option value="Fruits added No Sugar">
                  Fruits added No Sugar
                </option>
              </select>
            </div>
            <div className="pt-4">
              <div className="relative grid grid-cols-2">
                <div className="absolute flex items-center ml-2 h-full">
                  <svg
                    className="w-4 h-4 fill-current text-primary-gray-dark"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="searchkey"
                  id="searchkey"
                  placeholder="Search here"
                  className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                />
                <div className="mx-auto md:mt-0 md:w-1/3 p-2">
                  <button className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm">
                    Upload
                  </button>
                </div>
                <Sort />
                <ProductFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" container mx-auto px-4 mt-5 ">
          <div
            className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
            style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div>
              <div className="flex  gap-4 mt-4">
                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <option value="All categories">All categories</option>
                  <option value="Facilities Management">
                    Facilities Management
                  </option>
                  <option value="Cleaning Suplies">Cleaning Suplies</option>
                  <option value="Cutting Tools">Cutting Tools</option>
                  <option value="Food&Beverage">Food&Beverage</option>
                  <option value="Furnature">Furnature</option>
                  <option value="Maintance,Repair And Operations">
                    Maintance,Repair And Operations
                  </option>
                  <option value="Inks&Toners">Inks&Toners</option>
                  <option value="Hand Tools">Hand Tools</option>
                  <option value="Office Furnature&Supplies">
                    Office Furnature&Supplies
                  </option>
                  <option value="Office Suplies">Office Suplies</option>
                </select>
                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <option value="Fruits">Fruits</option>
                </select>
                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <option value="Vegitables">Vegitables</option>
                </select>
                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <option value="Dairy">Dairy</option>
                </select>
                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <option value="Meat&Poultry">Meat&Poultry</option>
                </select>
                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <option value="Sea food">Sea food</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
