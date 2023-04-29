import React, { useEffect, useRef, useState } from "react";
import styles from "./onecomment.css";
import { EIcons, Icon } from "../Icon";
import { Text } from "../Text";
import { Break } from "../Break";
import { CommentForm } from "../CommentForm";
import { CommentFormContainer } from "../CommentFormContainer";

interface IOneComment {
  comment: any;
  name?: string;
}

export function OneComment({ comment, name }: IOneComment) {
  const [isCommentFormOpened, setIsCommentFormOpened] = useState(false);
  const isActiveInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onClickFocus = () => isActiveInputRef.current?.focus();
    onClickFocus();
  }, [isCommentFormOpened]);

  const date = new Date(comment.data.created);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Icon name={EIcons.anon} size={20} />
        <div className={styles.author}>{comment.data.author}</div>
        <div className={styles.label}>
          {new Date(comment.data.created).toLocaleString()}
        </div>
        <div className={styles.league}>Лига юристов</div>
      </div>
      <div className={styles.commentText}>
        <Text size={14}>{comment.data.body}</Text>
      </div>
      <div className={styles.commentFooter}>
        <ul className={styles.modalDropdown}>
          <li>
            <button
              className={styles.menuItem}
              onClick={() => {
                setIsCommentFormOpened(!isCommentFormOpened);
              }}>
              <Icon size={16} name={EIcons.comments} />
              Ответить
            </button>
          </li>
          <li>
            <button className={styles.menuItem}>
              <Icon size={16} name={EIcons.shared} />
              Поделиться
            </button>
          </li>
          <li>
            <button className={styles.menuItem}>
              <Icon size={16} name={EIcons.warning} />
              Пожаловаться
            </button>
          </li>
        </ul>

        <div className={styles.commentResponseFormWrapper}>
          {isCommentFormOpened && (
            <CommentFormContainer
            // onClose={() => {
            //   setIsCommentFormOpened(false);
            //{}} }
            // isActiveInputRef={isActiveInputRef}
            // commentAuthor={comment.data.author}
            />
          )}
        </div>
      </div>
      <ul>
        {comment.data.replies
          ? comment.data.replies.data.children.map((comment: any) => {
              return (
                <OneComment
                  comment={comment}
                  name={comment.data.author}
                  key={comment.data.id}
                />
              );
            })
          : false}
      </ul>
    </div>
  );
}