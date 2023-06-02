import fs from "fs/promises";

const DATA_FILE = "data.json";

interface Category {
  name: string;
  section: string;
  description: string;
}

interface Data {
  category: Category[];
}

export async function readData(): Promise<Data> {
  const data = await fs.readFile(DATA_FILE);
  return JSON.parse(data.toString()) as Data;
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const data = await readData();
    return data.category;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getSection(section: string): Promise<Category[]> {
  const allCategories = await getAllCategories();
  return allCategories.filter((category) => category.section === section);
}

export async function add(newCategory: Category): Promise<void> {
  const data = await readData();
  const categoryList = data.category;
  if (categoryList.some((category) => category.name === newCategory.name)) {
    throw new Error(`Category with name:${newCategory.name} already exists`);
  }
  categoryList.push(newCategory);
  await saveCategories(categoryList, data);
}

function findCat(categoryList: Category[], name: string): number {
  return categoryList.findIndex((currentCat) => currentCat.name === name);
}

export async function saveCategories(
  category: Category[] = [],
  data: Data
): Promise<void> {
  data.category = category;
  await fs.writeFile(DATA_FILE, JSON.stringify(data));
}

export async function getByName(name: string): Promise<Category> {
  const categoryList = await getAllCategories();
  const index = findCat(categoryList, name);
  if (index === -1) {
    throw new Error(`Category with name:${name} doesn't exist`);
  } else {
    return categoryList[index];
  }
}
