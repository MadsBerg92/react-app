import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import ProductInterface from "../Products/ProductInterface";
import { Container } from "react-bootstrap";
import { useState } from "react";

const ProductCard = (props: { product: ProductInterface }) => {
  const [selectedindex, setselectedAmount] = useState(0);
  let description = props.product.description;
  if (description.length > 41) {
    description = description.substring(0, 45) + "..";
  }

  return (
    <Row className={styles.productRow}>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={props.product.picture}
            alt={props.product.name}
          />

          <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>{props.product.description}</Card.Text>
            <Card.Text>{props.product.price} dkk</Card.Text>
            <Button variant="outline-dark">Køb nu</Button>
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
