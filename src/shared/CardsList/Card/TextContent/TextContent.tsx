import React, { useContext, useState } from "react";
import styles from "./textcontent.css";
import { postsContext } from "../../../context/postsContext";
import { Post } from "../../../Post";

interface ITextContentProps {
  title: string;
  author: string;
  thumbnail: string;
  id: string;
}

export function TextContent({
  title,
  author,
  thumbnail,
  id,
}: ITextContentProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={thumbnail} alt="avatar" />
          <a href="#user-url" className={styles.username}>
            {author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span> 4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a
          href="#post-url"
          className={styles.postLink}
          onClick={() => {
            setIsModalOpened(true);
          }}>
          {title}
        </a>
        {isModalOpened && (
          <Post
            id={id}
            onClose={() => {
              setIsModalOpened(false);
            }}
          />
        )}
      </h2>
    </div>
  );
}