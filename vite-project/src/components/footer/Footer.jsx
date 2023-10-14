import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <div className=" container m-1 px-4 mt-5 ">
        <div
          className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Footer;
