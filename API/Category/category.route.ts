import express from "express";
import * as catContr from "./category.controller";

export const categoryRouter = express.Router();

// middleware specific to this route
categoryRouter.use(express.json());

// route handlers
categoryRouter.get("/category", catContr.getAllCategories);

categoryRouter.post("/category", catContr.postCategory);

categoryRouter.get("/category/:name", catContr.getCategory);

categoryRouter.get("/category/section/:name", catContr.getCategorySection);
