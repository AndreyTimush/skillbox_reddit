import React, { useEffect, useRef } from "react";
import styles from "./post.css";
import ReactDOM from "react-dom";
import { CommentForm } from "../CommentForm";
import { CommentsList } from "../CommentsList";
import { useCommentsData } from "../../hooks/useCommentsData";
import { CommentFormContainer } from "../CommentFormContainer";
import { useNavigate } from "react-router-dom";

interface IPost {
  onClose?: () => void;
  // id: string;
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  // const [comments] = useCommentsData({ id: props.id });

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        navigate("/posts");
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const node = document.querySelector("#modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>
        Следует отметить, что новая модель организационной деятельности поможет
      </h2>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          accusantium ad aspernatur commodi dolore dolorem eveniet
          exercitationem fuga hic iste labore officia praesentium quaerat quis
          repellendus sunt temporibus vero, voluptas!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          dicta harum itaque iure maxime nulla numquam optio perferendis sequi
          veniam! Autem blanditiis quidem quisquam similique soluta. Explicabo
          obcaecati recusandae repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          amet at autem consectetur culpa cumque debitis deserunt, dicta dolore
          ea enim ex laudantium odit quasi quo quod sunt voluptatem voluptatum.
        </p>
      </div>
      {/* <CommentFormContainer /> */}
      {/* <CommentsList comments={comments} /> */}
    </div>,
    node
  );
}
