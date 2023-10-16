import { useState, useEffect } from "react";

import ProductFilter from "../productfilter/ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSuggestions,
  productListByName,
} from "../../store/actions/apiActions";
import { FaSearch, FaTimes } from "react-icons/fa";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function Filter() {
  const [searchTerm, setSearchTerm] = useState(null);

  const searchResultsDrp = useSelector(
    (state) => state.reducer["productDetails"]
  );
  console.log("searchResultsDrp", searchResultsDrp);
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.reducer["isLoading"]);
  console.log("isLoading", isLoading);
  useEffect(() => {
    dispatch(fetchSuggestions(searchTerm));
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const handleResultClick = (selectedBlock) => {
    //onSelect(selectedBlock); // Pass the entire selectedBlock
    //setSearchTerm("");
    //const history = useHistory();
    console.log(selectedBlock.value);
    dispatch(productListByName(selectedBlock));
    navigate("/NewArrivals");
    //setSearchResults([]); // Clear search results after selecting
  };

  return (
    <div>
      <div className=" container mx-auto px-4 mt-5 ">
        <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="Purchase Orginization">Orginization</option>
                <option value="Indian market">Indian marke</option>
                <option value="Us market">Us market</option>
                <option value="Top Supliers">Top Supliers</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="Company">Company</option>
                <option value="Style">Style</option>
                <option value="Bevarages">Bevarages</option>
                <option value="Coffe Products">Coffe Products</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="Plant">Plant</option>
                <option value="Helmet">Helmet</option>
                <option value="Fruits added Sugar">Fruits added Sugar</option>
                <option value="Fruits added No Sugar">
                  Fruits added No Sugar
                </option>
              </select>
            </div>
            <div className="pt-4">
              <div className="relative grid grid-cols-4">
                <div></div>

                <div className="search-bar">
                  <div className="search-input-container">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search..."
                      className="search-input"
                    />

                    {searchTerm ? (
                      <FaTimes
                        className="clear-icon"
                        onClick={() => setSearchTerm("")}
                      />
                    ) : (
                      <FaSearch className="search-icon" />
                    )}
                  </div>
                  <ul className="search-results">
                    {isLoading ? (
                      <li>Loading...</li>
                    ) : (
                      searchResultsDrp?.map((result) => (
                        <li
                          key={result.value}
                          onClick={() => handleResultClick(result)}
                        >
                          {result.value}
                        </li>
                      ))
                    )}
                  </ul>
                  <div></div>
                </div>

                <div className="p-2 grid-cols-2">
                  <button className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm">
                    Upload
                  </button>
                </div>

                <ProductFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 30 }}>
        <div className="container mx-auto px-4 mt-5 ">
          <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
            <div>
              <div className="flex  gap-4 mt-4">
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
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
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Fruits">Fruits</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Vegitables">Vegitables</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Dairy">Dairy</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="Meat&Poultry">Meat&Poultry</option>
                </select>
                <select className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
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
