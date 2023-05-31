import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Panorama from "./components/Panorama/Panorama";
import panorama from "../public/images/panorama.jpeg";
import NavBar from "./components/NavBar/NavBar";
// import OffCanvasX from "./components/OffCanvas";
import ProductCard from "./components/ProductCard/ProductCard";
import eggshell from "../public/images/eggshell.webp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Panorama src={panorama}></Panorama>
      <ProductCard src={eggshell}></ProductCard>
      <Footer></Footer>
    </>
  );
}

export default App;
