import React from "react";
import styles from "./textcontent.css";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/104459/screenshots/15025216/media/69f2de9e7d2ba627dd6e10c5e9c7d80c.jpg"
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span> 4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить что новая модель организационной деятельности.
        </a>
      </h2>
    </div>
  );
}