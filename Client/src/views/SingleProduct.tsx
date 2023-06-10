// this is the page that shows the single product
import { useParams } from "react-router-dom";
import SingleProductPage from "../components/SingleProductPage/SingleProductPage";

const SingleProduct = () => {
  const { id } = useParams();
  return <SingleProductPage id={id}></SingleProductPage>;
};

export default SingleProduct;
