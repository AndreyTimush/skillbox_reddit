import React, { useContext } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card";
import { postsContext } from "../context/postsContext";

export function CardsList() {
  const { posts } = useContext(postsContext);

  let postsList = [];
  if (posts !== undefined && posts !== "") {
    postsList = posts[0];
  }

  return (
    <ul className={styles.cardsList}>
      {!!!posts
        ? []
        : postsList.map((post: any) => (
            <Card key={post.data["id"]} post={post} />
          ))}
    </ul>
  );
}