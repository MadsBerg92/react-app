import fs from "fs/promises";

const DATA_FILE = "data.json";

export interface Product {
  productID: number;
  name: string;
  description: string;
  long_description: string;
  picture: string;
  category: string;
  price: number;
  set: string;
}

interface Data {
  product: Product[];
}

//Reads all data and parses it.
export async function readData() {
  let allData = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(allData);
}

//Return all products from file
export async function getAllProducts(): Promise<Product[]> {
  const data = await readData();
  return data.product;
}

export async function saveProducts(
  product: Product[] = [],
  data: Data
): Promise<void> {
  //Stringify converts JS value to JSON format string
  //writefile stores data
  data.product = product;
  await fs.writeFile(DATA_FILE, JSON.stringify(data));
}

//Get product by ID
export async function getByID(prodId: number): Promise<Product[]> {
  const prodArr = await getAllProducts();
  const index = prodArr.findIndex(
    (currentProd) => currentProd.productID === prodId
  );
  if (index === -1) {
    throw new Error(`Product with ID:${prodId} doesn't exist`);
  } else {
    return [prodArr[index]];
  }
}

//Get featured products
export async function getFeatProducts(): Promise<Product[]> {
  const data = await readData();
  const prodIds: number[] = data.featProducts;
  const prodArr: Product[] = data.product;
  let featProducts: Product[] = [];
  for (let i = 0; i < prodArr.length; i++) {
    if (prodIds.includes(prodArr[i].productID)) {
      featProducts.push(prodArr[i]);
    }
  }
  return featProducts;
}

//get products by category
export async function getProdByCategory(category: string): Promise<Product[]> {
  const productArr = await getAllProducts();
  const categoryArr = productArr.filter(
    (product) => product.category === category
  );
  return categoryArr;
}

//Get product by category section
export async function getProdByCategorySection(
  section: string
): Promise<Product[]> {
  const data = await readData();
  const prodArr: Product[] = [];
  const categoryArr: string[] = [];
  data.category.forEach(
    (c: { name: string; section: string; description: string }) => {
      if (c.section === section) {
        categoryArr.push(c.name);
      }
    }
  );
  data.product.forEach((p: Product) => {
    if (categoryArr.includes(p.category)) {
      prodArr.push(p);
    }
  });
  if (prodArr.length === 0)
    throw new Error(`No products with the section: ${section}`);
  return prodArr;
}

//Get product by searching
export async function getProdBySearch(searchQuery: string): Promise<Product[]> {
  const productArr = await getAllProducts();
  const regex = new RegExp(".*" + searchQuery + ".*", "i");
  const categoryArr = productArr.filter((product) => regex.test(product.name));
  return categoryArr;
}

export async function getProductsList(
  products: { productID: number }[]
): Promise<Product[]> {
  const data = await readData();
  let returnProducts: Product[] = [];
  for (let i = 0; i < products.length; i++) {
    returnProducts.push(findProduct(products[i].productID, data));
  }
  return returnProducts;
}

function findProduct(productID: number, data: { product: any[] }): Product {
  const product = data.product.find((p: Product) => p.productID === productID);
  if (product === undefined)
    throw new Error(`Product with productID: ${productID} doesn't exist`);
  return product;
}

// export async function getProductSetImage( productIDs: number ): Promise<Product[]>{
//   const product = await getByID(productIDs)
//   if(product.)

// }
