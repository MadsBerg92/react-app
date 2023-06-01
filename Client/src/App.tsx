import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Panorama from "./components/Panorama/Panorama";

import NavBar from "./components/NavBar/NavBar";
// import OffCanvasX from "./components/OffCanvas";
import ProductCard from "./components/ProductCard/ProductCard";
import Products from "../src/components/Products/Products";

import Footer from "./components/Footer/Footer";
import keramik3 from "../public/images/keramik3.jpg";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Panorama></Panorama>
      <Products uri="/product/feat"></Products>
      {/* <ProductCard uri={keramik3}></ProductCard> */}
      <Footer></Footer>
    </>
  );
}

export default App;
