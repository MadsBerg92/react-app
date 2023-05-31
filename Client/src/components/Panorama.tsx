import Carousel from "react-bootstrap/Carousel";
import styles from "./Panorama.module.css";

interface PanoramaProps {
  src: string;
}

const Panorama = ({ src }: PanoramaProps) => {
  return (
    <Carousel className={styles["carousel-container"]}>
      <Carousel.Item>
        <img
          className={`${styles["carousel-image"]} d-block w-100`}
          src="../../public/images/keramik1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles["carousel-image"]} d-block w-100`}
          src="../../public/images/keramik2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles["carousel-image"]} d-block w-100`}
          src="../../public/images/keramik.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Panorama;
