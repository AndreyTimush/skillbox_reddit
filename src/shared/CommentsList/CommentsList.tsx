import React from "react";
import styles from "./commentslist.css";
import { useCommentsData } from "../../hooks/useCommentsData";
import { OneComment } from "../OneComment";
import { Break } from "../Break";

export function CommentsList({ comments }: { comments: any }) {
  return (
    <div className={styles.container}>
      <ul className={styles.commentsContent}>
        {comments.map((comment: any) => {
          return <OneComment comment={comment} key={comment.data.id} />;
        })}
      </ul>
      <Break size={20} top />
    </div>
  );
}