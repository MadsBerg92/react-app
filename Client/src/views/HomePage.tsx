import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Panorama from "../components/Panorama/Panorama";
import Products from "../components/Products/Products";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Panorama></Panorama>
      <Products uri="/product"></Products>
    </>
  );
};

export default HomePage;
