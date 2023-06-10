import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./scripts/scrollToTop";
import HomePage from "./views/HomePage";
import SingleProduct from "./views/SingleProduct";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
