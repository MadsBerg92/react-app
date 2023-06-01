import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Panorama from "./components/Panorama/Panorama";
import panorama from "../public/images/panorama.jpeg";
import NavBar from "./components/NavBar/NavBar";
// import OffCanvasX from "./components/OffCanvas";
import ProductCard from "./components/ProductCard/ProductCard";
import Footer from "./components/Footer/Footer";
import keramik3 from "../public/images/keramik3.jpg";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Panorama src={panorama}></Panorama>
      <ProductCard src={keramik3}></ProductCard>
      <Footer></Footer>
    </>
  );
}

export default App;
