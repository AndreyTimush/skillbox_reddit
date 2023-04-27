import React from "react";
import styles from "./preview.css";

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn1.vectorstock.com/i/1000x1000/99/85/nature-scene-with-wooden-houses-on-the-edge-vector-23039985.jpg"
      />
    </div>
  );
}