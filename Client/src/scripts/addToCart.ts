export interface CartCall {
  productID: number;
  selectionIdx: number;
  quantity: number;
}

export const addToCart = async (email: string, products: CartCall[]) => {
  if (email !== "") {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products),
    };
    const response = await fetch(
      `http://localhost:3016/cart/${encodeURIComponent(email)}/product`,
      requestOptions
    );
    if (response.ok) {
      const cartAmount = await response.json();
      return cartAmount;
    } else {
      return;
    }
  }

  if (localStorage.getItem("Cart")) {
    let cart: CartCall[] = JSON.parse(localStorage.getItem("Cart") || "[]");
    products.forEach((p) => {
      const existingProduct = cart.find(
        (item) =>
          item.productID === p.productID && item.selectionIdx === p.selectionIdx
      );
      /* Update quantity of existing product */
      if (existingProduct) {
        existingProduct.quantity += p.quantity;
      } else {
        /* Add new product to cart */
        cart.push(p);
      }
    });
    localStorage.setItem("Cart", JSON.stringify(cart));
    return cart.length;
  } else {
    localStorage.setItem("Cart", JSON.stringify(products));
    return 1;
  }
};
