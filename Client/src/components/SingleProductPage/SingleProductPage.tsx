// import { useEffect, useState, useContext } from "react";
// import getProduct from "../../scripts/APICallers/getProduct";
// import { UserDetailsContext } from "../../Context/UserDetailsContextProvider";

// interface ProductInterface {
//   productID: number;
//   name: string;
//   description: string;
//   long_description: string;
//   picture: string;
//   category: string;
//   price: number;
//   set: string;
// }

// interface SingleProductProps {
//   id: string | undefined;
// }
// const SingleProductPage = (props: SingleProductProps) => {
//   const { id } = props;

//   useEffect(() => {
//     if (id) {
//       getProduct(id)
//         .then((productData) => {
//           setData(productData);
//         })
//         .catch((error) => {
//           console.log("Error fetching product data:", error);
//         });
//     }
//   }, [id]);

//   const [data, setData] = useState<ProductInterface | null>(null);
//   const [selectedindex, setselectedAmount] = useState(0);
//   const user = useContext(UserDetailsContext);
// };

// export default SingleProductPage;
