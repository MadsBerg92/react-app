import { CartInterface } from "../LoadCart";

export interface OrderInterface {
    id: number;
    date: Date;
    cart: CartInterface; 
  }


const getOrdersByUser = function (email: string) {
    const url = `http://localhost:3016/user/${email}/orders`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

export default getOrdersByUser;
