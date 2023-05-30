import React from "react";

import styles from "./Panorama.module.css";

interface PanoramaProps {
  src: string;
}

const Panorama = ({ src }: PanoramaProps) => {
  return (
    <div className="panoramaContainer">
      <img className={styles.panorama} src={src}></img>;
    </div>
  );
};

export default Panorama;
