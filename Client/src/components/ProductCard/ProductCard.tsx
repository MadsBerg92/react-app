import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  src: string;
}

const ProductCard = ({ src }: ProductCardProps) => {
  return (
    <Row className={styles.productRow}>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>Eggshell Cup</Card.Title>
            <Card.Text>Beautiful cup with a simple design</Card.Text>
            <Button variant="outline-dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>Eggshell Cup</Card.Title>
            <Card.Text>Beautiful cup with a simple design</Card.Text>
            <Button variant="outline-dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>Eggshell Cup</Card.Title>
            <Card.Text>Beautiful cup with a simple design</Card.Text>
            <Button variant="outline-dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>Eggshell Cup</Card.Title>
            <Card.Text>Beautiful cup with a simple design</Card.Text>
            <Button variant="outline-dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>Eggshell Cup</Card.Title>
            <Card.Text>Beautiful cup with a simple design</Card.Text>
            <Button variant="outline-dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>Eggshell Cup</Card.Title>
            <Card.Text>Beautiful cup with a simple design</Card.Text>
            <Button variant="outline-dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductCard;
