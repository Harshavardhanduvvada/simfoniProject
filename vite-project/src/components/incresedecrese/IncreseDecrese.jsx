import { useState } from "react";

function IncreaseDecrease() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const inputStyle = {
    width: "100px",
    height: "30px",
    textAlign: "center",
  };

  const circleButtonStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(219, 39, 119)",
    cursor: "pointer",
    margin: 5,
    color: "#fff",
  };

  return (
    <div className="col-md-3 mt-3" style={containerStyle}>
      <div style={circleButtonStyle} onClick={handleDecrement}>
        <button type="button">-</button>
      </div>
      <input type="text" value={quantity} readOnly style={inputStyle} />
      <div style={circleButtonStyle} onClick={handleIncrement}>
        <button type="button">+</button>
      </div>
    </div>
  );
}

export default IncreaseDecrease;
