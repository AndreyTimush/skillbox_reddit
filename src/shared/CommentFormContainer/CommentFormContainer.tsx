import React, { ChangeEvent, FormEvent } from "react";
import styles from "./commentform.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState, updateComment } from "../../store/reducer";
import { CommentForm } from "../CommentForm";

export function CommentFormContainer() {
  const value = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <CommentForm
    // value={value}
    // onChange={handleChange}
    // onSubmit={handleSubmit}
    />
  );
}