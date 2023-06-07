import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import ProductInterface from "../Products/ProductInterface";
import { Container } from "react-bootstrap";
import { useState } from "react";
import pic from "../../../public/images/sæt/mørkeblåt_sæt.jpg";

const ProductCard = (props: { product: ProductInterface }) => {
  const [selectedindex, setselectedAmount] = useState(0);
  // const [selectedSet, setSelectedSet] = useState(false);

  let description = props.product.description;

  const handleOnMouseOver = (e: { currentTarget: { src: string } }) => {
    if (props.product.set != "") {
      e.currentTarget.src = props.product.set;
    } else {
      e.currentTarget.src = props.product.picture;
    }
  };

  if (description.length > 41) {
    description = description.substring(0, 45) + "..";
  }

  return (
    <Row className={styles.productRow}>
      <Col md={4}>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Card.Img
              variant="top"
              onMouseOver={handleOnMouseOver}
              onMouseLeave={(e) =>
                (e.currentTarget.src = props.product.picture)
              }
              src={props.product.picture}
              alt={props.product.name}
            />
          </div>

          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.title}>
              {props.product.name}
            </Card.Title>
            <Card.Text className={styles.text}>
              {props.product.description}
            </Card.Text>
            <Card.Text className={styles.text}>
              {props.product.price} dkk
            </Card.Text>
            <div className={styles.btn}>
              <Button variant="outline-dark" className={styles.button}>
                Køb nu
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductCard;

// interface ProductCardProps {
//   src: string;
// }

// const ProductCard = ({ src }: ProductCardProps) => {
//   return (
//     <Row className={styles.productRow}>

//       <Col md={4}>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={src} />
//           <Card.Body>
//             <Card.Title>Eggshell Cup</Card.Title>
//             <Card.Text>Beautiful cup with a simple design</Card.Text>
//             <Button variant="outline-dark">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={4}>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={src} />
//           <Card.Body>
//             <Card.Title>Eggshell Cup</Card.Title>
//             <Card.Text>Beautiful cup with a simple design</Card.Text>
//             <Button variant="outline-dark">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={4}>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={src} />
//           <Card.Body>
//             <Card.Title>Eggshell Cup</Card.Title>
//             <Card.Text>Beautiful cup with a simple design</Card.Text>
//             <Button variant="outline-dark">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={4}>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={src} />
//           <Card.Body>
//             <Card.Title>Eggshell Cup</Card.Title>
//             <Card.Text>Beautiful cup with a simple design</Card.Text>
//             <Button variant="outline-dark">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={4}>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={src} />
//           <Card.Body>
//             <Card.Title>Eggshell Cup</Card.Title>
//             <Card.Text>Beautiful cup with a simple design</Card.Text>
//             <Button variant="outline-dark">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default ProductCard;
