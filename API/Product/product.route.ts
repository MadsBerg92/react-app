import express from "express";
import * as prodContr from "./product.controller";

export const productRouter = express.Router();

//middleware specific to this route

productRouter.use(express.json());

//route handlers

//Get most important information about all products that are offered:
productRouter.get("/product", prodContr.getProducts);

//Get all important information about all featured products that re offered:
productRouter.get("/product/feat", prodContr.getFeatProducts);

//Get all details about a specific product:
productRouter.get("/product/:id", prodContr.getSpecificProduct);

//Get most important information about all products that are offered:
productRouter.put("/product/list", prodContr.getProductList);
