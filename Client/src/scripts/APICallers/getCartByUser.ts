import { CartInterface } from "../LoadCart";




const getCartByUser =  function (email: string): Promise<CartInterface> {
    const url = `http://localhost:3016/cart/${encodeURIComponent(email)}`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

export default getCartByUser;