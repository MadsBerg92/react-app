// import * as fs from "fs/promises";
// import { Cart, Order } from "../Cart/cart.model";

// const DATA_FILE = "data.json";

// export interface User {
//   username: string;
//   email: string;
//   firstname: string;
//   lastname: string;
//   password: string;
//   address: address;
//   cart: Cart;
//   orders: Order[];
// }
// export interface address {
//   road: string;
//   number: string;
//   city: string;
//   postcode: string;
//   country: string;
// }

// export interface UserInfo {
//   username: string;
//   email: string;
//   password: string;
//   firstname: string;
//   lastname: string;
//   address: address;
// }

// export interface Data {
//   user: User[];
// }

// //Reads all data and parses it.
// export async function readData() {
//   let allData = await fs.readFile(DATA_FILE, "utf8");
//   return JSON.parse(allData);
// }

// //Gets all user data
// export async function getAllUsers(): Promise<User[]> {
//   try {
//     let data = await readData();
//     return data.user;
//   } catch (err) {
//     console.log(err);
//   }
// }

// //Adds a user
// export async function add(user: UserInfo, data: Data): Promise<void> {
//   let userArray = data.user;
//   if (findUser(userArray, user.email) !== -1)
//     throw new Error(`User with Id:${user.email} already exists`);
//   const newuser: User = {
//     ...user,
//     cart: { products: [], sumPrice: 0 },
//     orders: [],
//   };
//   userArray.push(newuser);
//   await saveUsers(userArray, data);
// }

// // save array of users to file
// async function saveUsers(users: User[] = [], data: Data): Promise<void> {
//   //writeFile stores data
//   data.user = users;
//   await fs.writeFile(DATA_FILE, JSON.stringify(data));
// }

// //Return user by Name
// export async function getByUsername(email: String): Promise<UserInfo> {
//   let userArray = await getAllUsers();
//   let index = findUser(userArray, email);
//   if (index === -1)
//     throw new Error(`User with username:${email} doesn't exist`);
//   const user = userArray[index];
//   return {
//     username: user.username,
//     email: user.email,
//     password: user.password,
//     firstname: user.firstname,
//     lastname: user.lastname,
//     address: user.address,
//   };
// }

// //Return user by Name
// export async function getOrderByUsername(email: String): Promise<Order[]> {
//   let userArray = await getAllUsers();
//   let index = findUser(userArray, email);
//   if (index === -1)
//     throw new Error(`User with username:${email} doesn't exist`);
//   else return userArray[index].orders;
// }

// //Return index of user (-1 if not present)
// function findUser(userArray: User[], email: String): number {
//   return userArray.findIndex((currentUser) => currentUser.email === email);
// }

// // update existing customer
// export async function updateUser(email: string, user: UserInfo) {
//   const data = await readData();
//   let userArray = data.user;
//   let index = findUser(userArray, email); // findIndex
//   if (index === -1)
//     throw new Error(`Customer with username:${email} doesn't exist`);
//   else {
//     let olduser = userArray[index];
//     let newuser = {
//       username: user.username,
//       email: user.email,
//       firstname: user.firstname,
//       lastname: user.lastname,
//       password: user.password,
//       address: user.address,
//       cart: olduser.cart,
//       orders: olduser.orders,
//     };
//     userArray[index] = newuser;
//     await saveUsers(userArray, data);
//   }
// }

// export async function updateAll(userArray: User[], data: Data) {
//   await saveUsers(userArray, data);
// }

// // delete existing customer
// export async function remove(email: string, data: Data) {
//   let userArray = await getAllUsers();
//   let index = findUser(userArray, email); // findIndex
//   if (index === -1) throw new Error(`user with email:${email} doesn't exist`);
//   else {
//     userArray.splice(index, 1); // remove customer from array
//     await saveUsers(userArray, data);
//   }
// }

// export async function removeAll() {
//   let data = await readData();
//   await saveUsers([], data);
// }
