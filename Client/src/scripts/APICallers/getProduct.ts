interface ProductInterface {
  productID: number;
  name: string;
  description: string;
  long_description: string;
  picture: string;
  category: string;
  price: number;
  set: string;
}

const getProduct = function (ID: string): Promise<ProductInterface | null> {
  const url = `http://localhost:3016/product/${ID}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data: ProductInterface[]) => {
      if (Array.isArray(data) && data.length > 0) {
        return data[0]; // Extract the first object from the array
      }
      return null;
    });
};

export default getProduct;
