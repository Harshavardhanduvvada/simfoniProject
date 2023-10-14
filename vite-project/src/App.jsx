import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Order from "./Pages/order/Order";
import Cart from "./Pages/cart/cart";
import Dashboard from "./Pages/admin/dashboard/Dashboard";
import Nopage from "./Pages/nopage/nopage";
import MyState from "./context/myState";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
