import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
  imgPreview: string;
}

export function Preview({ imgPreview }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={imgPreview} />
    </div>
  );
}