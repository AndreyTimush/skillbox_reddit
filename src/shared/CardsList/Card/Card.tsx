import React, { useContext } from "react";
import styles from "./card.css";
import { TextContent } from "./TextContent";
import { Controls } from "./Controls";
import { Preview } from "./Preview";
import { Menu } from "./Menu";
import { postsContext } from "../../context/postsContext";

interface ICardProps {
  post: any;
}

export function Card({ post }: ICardProps) {
  const avatar =
    post.data["thumbnail"] &&
    (post.data["thumbnail"].endsWith(".jpg") ||
      post.data["thumbnail"].endsWith(".png") ||
      post.data["thumbnail"].endsWith(".gif"));

  const previewImg =
    post.data["url"] &&
    (post.data["url"].endsWith(".jpg") ||
      post.data["url"].endsWith(".png") ||
      post.data["url"].endsWith(".gif"));

  return (
    <li className={styles.card}>
      <TextContent
        title={post.data["title"]}
        author={post.data["author"]}
        thumbnail={
          avatar
            ? post.data["thumbnail"]
            : "https://upload.wikimedia.org/wikipedia/commons/3/3d/%D0%9D%D0%B5%D1%82_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.jpg"
        }
        id={post.data["id"]}
      />

      <Preview
        imgPreview={
          previewImg
            ? post.data["url"]
            : "https://upload.wikimedia.org/wikipedia/commons/3/3d/%D0%9D%D0%B5%D1%82_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.jpg"
        }
      />
      <Menu />
      <Controls />
    </li>
  );
}
