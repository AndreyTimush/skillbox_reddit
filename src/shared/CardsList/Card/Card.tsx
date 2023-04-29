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
  return (
    <li className={styles.card}>
      <TextContent
        title={post.data["title"]}
        author={post.data["author"]}
        thumbnail={post.data["thumbnail"]}
        id={post.data["id"]}
      />
      <Preview imgPreview={post.data["url"]} />
      <Menu />
      <Controls />
    </li>
  );
}