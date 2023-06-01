import { useEffect, useState } from "react";
import ProductInterface from "./ProductInterface";
import styles from "./Products.module.css";
import ProductCard from "../ProductCard/ProductCard";

const Products = (props: { uri: string }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const uri = "http://localhost:3016" + props.uri;
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) =>
        data.map((product: ProductInterface, index: number) => (
          <div className="col-lg-4 mb-3" key={index}>
            <div className={styles.card}>
              <ProductCard product={product} />
            </div>
          </div>
        ))
      )
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        console.log(`An error occured: ${e}`);
      });
  }, [props.uri]);
  return (
    <div>
      {loading && (
        <p className="row" style={{ margin: "5%" }}>
          Sorry no products found!
        </p>
      )}
      {!loading && (
        <div className="row" style={{ margin: "5%" }}>
          {data}
        </div>
      )}
    </div>
  );
};

export default Products;
