import { response } from "express";
import ProductInterface from "../../components/Products/ProductInterface";

const getProdCategories = function (
  category: string
): Promise<ProductInterface[]> {
  const url = `http://localhost:3016/category/section/${category}}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
