import { useState } from "react";

function Sort({ handleSort }) {
  const [selectedOption, setSelectedOption] = useState("titleAsc");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    handleSort(value);
  };

  const selectStyle = {
    width: "200px",
    height: "38px",
    fontSize: "16px",
  };

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      style={selectStyle}
    >
      <option value="sortby">Sort By</option>
      <option value="titleAsc">Title: A to Z</option>
      <option value="titleDesc">Title: Z to A</option>
      <option value="priceHighToLow">Price: High to Low</option>
      <option value="priceLowToHigh">Price: Low to High</option>
    </select>
  );
}

export default Sort;
