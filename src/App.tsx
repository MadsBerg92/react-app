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
import OffCanvasX from "./components/OffCanvas";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <NavBar></NavBar> <OffCanvasX scroll={true} backdrop={true}></OffCanvasX>
      <Panorama src={panorama}></Panorama>
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
