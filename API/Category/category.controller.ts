import * as categoryModel from "./category.model";
import { Request, Response } from "express";

export async function getAllCategories(req: Request, res: Response) {
  let section = req.query.section as string;
  try {
    if (section === undefined) {
      let allCategories = await categoryModel.getAllCategories();
      res.json(allCategories);
    } else {
      let allCategories = await categoryModel.getSection(section);
      res.json(allCategories);
    }
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  } finally {
    res.end();
  }
}

export async function getCategory(req: Request, res: Response) {
  let name = req.params.name;
  try {
    const category = await categoryModel.getByName(name);
    res.json(category);
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  } finally {
    res.end();
  }
}
export async function getCategorySection(req: Request, res: Response) {
  let section = req.params.name;
  try {
    const category = await categoryModel.getSection(section);
    res.json(category);
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  } finally {
    res.end();
  }
}
export async function postCategory(req: Request, res: Response) {
  try {
    let category = req.body;
    await categoryModel.add(category);
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  } finally {
    res.end();
  }
}
