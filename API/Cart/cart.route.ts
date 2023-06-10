// import express from "express";
// import * as cartContr from "./cart.controller";
// export const cartRouter = express.Router();

// // middleware specific to this route
// cartRouter.use(express.json());

// //Get specific cart
// cartRouter.get("/cart/:email", cartContr.getSpecificCart);

// //Put new items in cart.
// cartRouter.post("/cart/:email/product", cartContr.postProductToCart);

// //Create Order
// cartRouter.post("/cart/:email/order", cartContr.createOrder);

// //Delete a quantity of a product from the cart.
// cartRouter.delete(
//   "/cart/:email/product/:productID",
//   cartContr.deleteProductCart
// );

// //Get cart obj from products
// cartRouter.put("/cart/returncart", cartContr.returnProductToCart);
