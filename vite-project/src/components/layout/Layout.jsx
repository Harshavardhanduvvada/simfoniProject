import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>

      <p></p>
    </div>
  );
}
export default Layout;
