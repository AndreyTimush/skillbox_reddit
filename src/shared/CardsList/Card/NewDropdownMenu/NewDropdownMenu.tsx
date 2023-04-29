import React, { useEffect, useRef } from "react";
import styles from "./newdropdownmenu.css";
import ReactDOM from "react-dom";

interface IPropsDropdwonMenu {
  element: React.ReactNode;
  onClose?: () => void;
}

export function NewDropdownMenu({ element, onClose }: IPropsDropdwonMenu) {
  const node = document.querySelector("#dropdown_root");
  if (!node) return null;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.listContainer}>
      <div className={styles.list}>{element}</div>
    </div>,
    node
  );
}