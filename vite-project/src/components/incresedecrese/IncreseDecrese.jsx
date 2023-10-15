import React, { useState } from "react";

function IncreaseDecrease(props) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const inputStyle = {
    width: "160px",
    height: "30px",
    textAlign: "center", // Center-align the text inside the input field
  };

  return (
    <div className="col-md-3 mt-3">
      <button
        type="button"
        onClick={handleDecrement}
        className="input-group-text"
      >
        -
      </button>
      <input type="text" value={quantity} readOnly style={inputStyle} />
      <button
        type="button"
        onClick={handleIncrement}
        className="input-group-text"
      >
        +
      </button>
    </div>
  );
}

export default IncreaseDecrease;
