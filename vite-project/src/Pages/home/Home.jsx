//import Card,CardContent from "@mui/joy";
import Layout from "../../components/layout/Layout";

import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/productCard";
import Allitems from "../../components/allitems/Allitems";
import Newarrivals from "../../components/newarrivals/Newarrivals";

import Categories from "../../components/categories/Categories";
import Suppliers from "../../components/suppliers/Suppliers";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <Layout>
      <Filter />
      <HeroSection />
      <Categories />
      <ProductCard />
      <Allitems />
      <Newarrivals />
      <Suppliers />
      <Footer />
    </Layout>
  );
}

export default Home;
