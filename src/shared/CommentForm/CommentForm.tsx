import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./commentform.css";
import { Formik, useFormik } from "formik";

interface IFormProps {
  comment: string;
}

export function CommentForm() {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTouched(true);

    setValueError(validateValue());

    const isFormValid = !validateValue();
    if (!isFormValid) return;
    alert("Форма отправлена!");
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function validateValue() {
    if (value.length <= 3) return "Введите больше 3 символов";
    return "";
  }

  const validate = (values: IFormProps) => {
    const errors = {} as IFormProps;
    if (values.comment.length <= 3) {
      errors.comment = "Введите больше 3-х символов";
    }
    console.log("errors = ", errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validate,
    onSubmit: (values) => {
      if (!formik.errors.comment) {
        alert("Форма отправлена!");
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="comment">Your comment</label>
      <textarea
        className={styles.input}
        id="comment"
        name="comment"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.comment}
        aria-invalid={formik.errors.comment ? "true" : undefined}
      />
      {formik.touched.comment && formik.errors.comment ? (
        <div>{formik.errors.comment}</div>
      ) : null}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
    // <form className={styles.form} onSubmit={handleSubmit}>
    //   <textarea
    //     className={styles.input}
    //     onChange={handleChange}
    //     value={value}
    //     aria-invalid={validateValue() ? "true" : undefined}
    //   />
    //
    //   {touched && validateValue() && <div>{validateValue()}</div>}
    //
    //   <button type="submit" className={styles.button}>
    //     Комментировать
    //   </button>
    // </form>
  );
}