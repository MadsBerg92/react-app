// import * as fs from "fs/promises";
// import { Product } from "../Product/product.model";
// import { User } from "../User/user.model";

// export type Cart = {
//   products: { product: Product; selectionIdx: number; quantity: number }[];
//   sumPrice: number;
// };

// export type Order = {
//   id: number;
//   date: Date;
//   cart: Cart;
// };

// const DATA_FILE = "data.json";

// //Reads all data and parses it.
// export async function readData() {
//   let allData = await fs.readFile(DATA_FILE, "utf8");
//   return JSON.parse(allData);
// }

// export async function getCartByUser(email: string): Promise<Cart | undefined> {
//   const data = await readData();
//   const user = data.user.find((user: User) => user.email === email);
//   return user.cart;
// }

// export async function saveCart(user: User, data): Promise<void> {
//   let userArray = data.user;
//   let index = userArray.find((u: User) => u.email === user.email); // findIndex
//   userArray[index] = user;
//   data.user = userArray;
//   await fs.writeFile(DATA_FILE, JSON.stringify(data));
// }

// export async function emptyCart(email: string): Promise<void> {
//   const data = await readData();
//   const user = data.user.find((user: User) => user.email === email);
//   if (user === undefined)
//     throw new Error(`User with username:${email} doesn't exist`);
//   user.cart = { products: [], sumPrice: 0 };
//   await saveCart(user, data);
// }

// export async function addProducts(
//   email: string,
//   newProducts: { productID: number; selectionIdx: number; quantity: number }[]
// ): Promise<number> {
//   const data = await readData();
//   const user = data.user.find((user: User) => user.email === email);
//   if (user === undefined)
//     throw new Error(`User with username:${email} doesn't exist`);
//   for (let i = 0; i < newProducts.length; i++) {
//     const p = newProducts[i];
//     const product = findProduct(p.productID, data);
//     user.cart = addToCart(user.cart, {
//       product: product,
//       selectionIdx: p.selectionIdx,
//       quantity: p.quantity,
//     });
//   }
//   user.cart.sumPrice = calSum(user.cart);
//   saveCart(user, data);
//   return user.cart.products.length;
// }

// function addToCart(
//   cart: Cart,
//   newproduct: { product: Product; selectionIdx: number; quantity: number }
// ): Cart {
//   const index = cart.products.findIndex(
//     (currentProduct) =>
//       currentProduct.product.productID === newproduct.product.productID &&
//       currentProduct.selectionIdx === newproduct.selectionIdx
//   );
//   if (
//     index !== -1 &&
//     newproduct.selectionIdx === cart.products[index].selectionIdx
//   ) {
//     cart.products[index] = {
//       product: newproduct.product,
//       selectionIdx: newproduct.selectionIdx,
//       quantity: cart.products[index].quantity + newproduct.quantity,
//     };
//   } else {
//     cart.products.push({
//       product: newproduct.product,
//       selectionIdx: newproduct.selectionIdx,
//       quantity: newproduct.quantity,
//     });
//   }
//   return cart;
// }

// function calSum(cart: Cart) {
//   let totalPrice: number = 0;
//   for (let i = 0; i < cart.products.length; i++) {
//     let p = cart.products[i];
//     totalPrice += p.product.price * p.quantity;
//   }
//   return totalPrice;
// }

// function findProduct(productID: number, data): Product {
//   const product = data.product.find((p: Product) => p.productID === productID);
//   if (product === undefined)
//     throw new Error(`Product with productID: ${productID} doesn't exist`);
//   return product;
// }

// export async function deleteProduct(
//   email: string,
//   deleteProduct: { productID: number; selectionIdx: number; quantity: number }
// ): Promise<void> {
//   const data = await readData();
//   const allUser: User[] = data.user;
//   const user = allUser.find((user) => user.email === email);
//   removeFromCart(
//     user.cart,
//     deleteProduct.productID,
//     deleteProduct.selectionIdx,
//     deleteProduct.quantity
//   );
//   user.cart.sumPrice = calSum(user.cart);
//   saveCart(user, data);
// }

// function removeFromCart(
//   cart: Cart,
//   productID: number,
//   selectionIdx: number,
//   quantity: number
// ): Cart {
//   const index = cart.products.findIndex(
//     (currentProduct) =>
//       currentProduct.product.productID === productID &&
//       currentProduct.selectionIdx == selectionIdx
//   );
//   if (index === -1) throw new Error(`Cart does not contain such product`);
//   if (cart.products[index].quantity > quantity) {
//     cart.products[index] = {
//       product: cart.products[index].product,
//       selectionIdx: selectionIdx,
//       quantity: cart.products[index].quantity - quantity,
//     };
//   } else {
//     cart.products.splice(index, 1);
//   }
//   return cart;
// }

// export async function getProductInfo(cart: Cart, productID: number) {
//   const index = cart.products.findIndex(
//     (cartProduct) => cartProduct.product.productID === productID
//   );
//   if (index === -1) throw new Error(`Cart does not contain such product`);
//   return cart.products[index];
// }

// export async function update(email: string, cart: Cart): Promise<void> {
//   const data = await readData();
//   const allUser: User[] = data.user;
//   const user = allUser.find((user) => user.email === email);
//   if (user === undefined)
//     throw new Error(`User with username:${email} doesn't exist`);
//   user.cart = cart;
//   await saveCart(user, data);
// }

// export async function createOrder(email: string): Promise<void> {
//   const data = await readData();
//   const user = data.user.find((user: User) => user.email === email);
//   if (user === undefined)
//     throw new Error(`User with username:${email} doesn't exist`);
//   if (user.cart.products.length === 0) throw new Error(`Users cart is empty`);
//   user.orders.push({ id: user.orders.length, date: Date(), cart: user.cart });
//   user.cart = { products: [], sumPrice: 0 };
//   await saveCart(user, data);
// }

// export async function returnCart(
//   newProducts: { productID: number; selectionIdx: number; quantity: number }[]
// ): Promise<Cart> {
//   const data = await readData();
//   let cart: Cart = { products: [], sumPrice: 0 };
//   for (let i = 0; i < newProducts.length; i++) {
//     const p = newProducts[i];
//     const product = findProduct(p.productID, data);
//     cart = addToCart(cart, {
//       product: product,
//       selectionIdx: p.selectionIdx,
//       quantity: p.quantity,
//     });
//   }
//   cart.sumPrice = calSum(cart);
//   return cart;
// }
