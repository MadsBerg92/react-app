import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Alert from "./components/Alert";
import { useState } from "react";
import { BsCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import Panorama from "./components/Panorama";
import panorama from "../public/images/panorama.jpeg";
import NavBar from "./components/NavBar";
// import OffCanvasX from "./components/OffCanvas";
import ProductCard from "./components/ProductCard";
import eggshell from "../public/images/eggshell.webp";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <NavBar></NavBar>
      <Panorama src={panorama}></Panorama>
      <ProductCard src={eggshell}></ProductCard>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>PAS PÅ!</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My monkey</Button> */}
      {/* <BsCalendarFill color="red" size="40">
        {" "}
      </BsCalendarFill> */}
      {/* <Like></Like> */}
    </>
  );
}

export default App;
