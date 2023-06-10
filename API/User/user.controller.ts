// import * as userModel from "./user.model";
// import { Request, Response } from "express";

// export async function postUser(req: Request, res: Response) {
//   try {
//     const newUser = req.body;
//     let data = await userModel.readData();
//     await userModel.add(newUser, data);
//     res.status(200);
//   } catch (error) {
//     // res.statusMessage=
//     res.status(409).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// export async function getUser(req: Request, res: Response) {
//   try {
//     let email = req.params.email;
//     let user = await userModel.getByUsername(email);
//     res.json(user);
//   } catch (error) {
//     res.status(204).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// export async function getOrders(req: Request, res: Response) {
//   try {
//     let email = req.params.email;
//     let user = await userModel.getOrderByUsername(email);
//     res.json(user);
//   } catch (error) {
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// export async function putUser(req: Request, res: Response) {
//   try {
//     let email = req.params.email;
//     let user = req.body;
//     await userModel.updateUser(email, user);
//   } catch (error) {
//     // res.statusMessage=
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }

// export async function deleteUser(req: Request, res: Response) {
//   try {
//     let email = req.params.email;
//     let data = await userModel.readData();
//     await userModel.remove(email, data);
//   } catch (error) {
//     // res.statusMessage=
//     res.status(400).send((error as Error).message);
//   } finally {
//     res.end();
//   }
// }
