import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

interface ProductCardProps {
  src: string;
}

const ProductCard = ({ src }: ProductCardProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>Eggshell Cup</Card.Title>
        <Card.Text>Beautiful cup with simple design</Card.Text>
        <Button variant="outline-dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
