import styles from "./SingleProductPage.module.css";
import { CartCall, addToCart } from "../../scripts/addToCart";
import { useContext, useEffect, useState } from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { UserDetailsContext } from "../../Context/UserDetailsContextProvider";
import getProduct from "../../scripts/APICallers/getProduct";

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

interface SingleProductProps {
  id: string | undefined;
}

const SingleProductPage = (props: SingleProductProps) => {
  const { id } = props;

  useEffect(() => {
    if (id) {
      getProduct(id)
        .then((productData) => {
          setData(productData);
        })
        .catch((error) => {
          console.log("Error fetching product data:", error);
        });
    }
    console.log(data);
  }, [id]);

  const [data, setData] = useState<ProductInterface | null>(null);
  const [selectedindex, setselectedAmount] = useState(0);
  const user = useContext(UserDetailsContext);

  const productCall: CartCall = {
    productID: parseInt(id!),
    selectionIdx: selectedindex,
    quantity: 1,
  };

  const handleClick = async () => {
    const cartAmount = await addToCart(user.userDetails.email, [productCall]);
    const updatedUserDetails = {
      ...user.userDetails,
      cartAmount: cartAmount,
    };
    user.updateUserDetails(updatedUserDetails);
    {
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.productPage}>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xl={8} md={12} className={styles.mainRow}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={6} className={styles.imageContainer}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={data?.picture}
                          className={styles.productImage}
                          alt={data?.name}
                          onClick={handleShow}
                        />
                      </div>
                    </Col>
                    <Col md={6} className={styles.contentContainer}>
                      <h2 className={styles.productTitle}>{data?.name}</h2>

                      <p className={styles.productCategory}>{data?.category}</p>
                      <Row>
                        <hr className={styles.linearLine} />

                        <Col md={12}>
                          <p className={styles.productDescription}>
                            {data?.description}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <hr className={styles.linearLine} />
                        <Col
                          md={12}
                          className={styles.longDescriptionContainer}
                        >
                          <p className={styles.productLongDescription}>
                            {data?.long_description}
                          </p>
                        </Col>
                      </Row>
                      <Row className={styles.buttonContainer}>
                        <Col md={6} className={styles.selectionContainer}>
                          <div className="cart">{data?.price} DKK</div>
                        </Col>
                        <Col md={6} className={styles.addToCartContainer}>
                          <Button
                            onClick={handleClick}
                            color="normal"
                            id={styles.cartbtn}
                            // iconClass="iconCart"
                          >
                            Add to Cart
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleProductPage;
