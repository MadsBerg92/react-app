// import { Request, Response } from "express";
// import * as cartModel from "./cart.model";

// //Get specific cart
// export async function getSpecificCart(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   try {
//     const email = req.params.email;
//     const cart = await cartModel.getCartByUser(email);
//     res.json(cart);
//   } catch (error) {
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// //Put new products in cart
// export async function postProductToCart(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   try {
//     const email = req.params.email;
//     const productArr = req.body;
//     const cartSize: number = await cartModel.addProducts(email, productArr);
//     res.json(cartSize);
//   } catch (error) {
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// //return products in cart
// export async function returnProductToCart(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   try {
//     const productArr = req.body;
//     const cart = await cartModel.returnCart(productArr);
//     res.json(cart);
//   } catch (error) {
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// //Create Order
// export async function createOrder(req: Request, res: Response): Promise<void> {
//   try {
//     const email = req.params.email;
//     await cartModel.createOrder(email);
//   } catch (error) {
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// //Delete a product from the cart
// export async function deleteProductCart(req: Request, res: Response) {
//   try {
//     const email = req.params.email;
//     const pID = req.params.productID;
//     const deleteProduct = req.body;
//     await cartModel.deleteProduct(email, deleteProduct);
//   } catch (error) {
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// //Get information about a specific product in the cart.
// export async function getProductInfoOfCart(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   try {
//     const productID = parseInt(req.params.productID, 10);
//     const email = req.params.email;
//     const cart = await cartModel.getCartByUser(email);
//     const product = await cartModel.getProductInfo(cart, productID);
//     res.json(product);
//   } catch (error) {
//     res.status(400).send((error as Error).message);
//   }
// }
