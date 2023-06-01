import { response } from "express";
import ProductInterface from "../../components/Products/ProductInterface";

const getProductsInfo = function (
  category: string
): Promise<ProductInterface[]> {
  const url = `http://localhost:3016&/product`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getProductsInfo;
