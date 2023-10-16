import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import { Provider } from "react-redux";
import store from "./store";
import Newarrivals from "./components/newarrivals/Newarrivals";
import ProductInformation from "./components/Productinformation/ProductInformation";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewArrivals" element={<Newarrivals />} />
          <Route path="/ProductInformation" element={<ProductInformation />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
