import { Request, Response } from "express";
import * as productsModel from "./product.model";

export async function getProducts(req: Request, res: Response): Promise<void> {
  const category = req.query.category as string;
  const categorysection = req.query.categorysection as string;
  const searchQuery = req.query.search as string;

  try {
    let products: productsModel.Product[];
    if (category) {
      products = await productsModel.getProdByCategory(category);
    } else if (categorysection) {
      products = await productsModel.getProdByCategorySection(categorysection);
    } else if (searchQuery) {
      products = await productsModel.getProdBySearch(searchQuery);
    } else {
      products = await productsModel.getAllProducts();
    }
    res.json(products);
  } catch (error) {
    res.status(400).send((error as Error).message);
  } finally {
    res.end();
  }
}

export async function getSpecificProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const idString = req.params.id;
    const productID = parseInt(idString);
    const product = await productsModel.getByID(productID);
    res.json(product);
  } catch (error) {
    res.status(400).send((error as Error).message);
  } finally {
    res.end();
  }
}

export async function getFeatProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const product = await productsModel.getFeatProducts();
    res.json(product);
  } catch (error) {
    res.status(400).send((error as Error).message);
  } finally {
    res.end();
  }
}

export async function getProductWithID(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const featProduct = await productsModel.getFeatProducts();
    res.json(featProduct);
  } catch (error) {
    res.status(400).send((error as Error).message);
  } finally {
    res.end();
  }
}

export async function putAllProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const data = await productsModel.readData();
    const products = req.body;
    await productsModel.saveProducts(products, data);
  } catch (error) {
    res.status(400).send((error as Error).message);
  } finally {
    res.end();
  }
}

export async function getProductList(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const productArr = req.body;
    const ProductList = await productsModel.getProductsList(productArr);
    res.json(ProductList);
  } catch (error) {
    res.status(400).send((error as Error).message);
  } finally {
    res.end();
  }
}
