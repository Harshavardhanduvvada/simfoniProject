import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar"; // Import Sidebar or adjust the path accordingly

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Sidebar />
      <p></p>

      <Footer />
    </div>
  );
}
export default Layout;
