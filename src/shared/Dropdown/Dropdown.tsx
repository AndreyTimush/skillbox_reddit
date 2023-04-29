import React from "react";
import styles from "./dropdown.css";
import { Card } from "../CardsList/Card";
import { NewDropdownMenu } from "../CardsList/Card/NewDropdownMenu";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.container} onClick={handleOpen}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <NewDropdownMenu
          element={children}
          onClose={() => setIsDropdownOpen(false)}
        />
        // <div className={styles.listContainer}>
        //   <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
        //     {children}
        //   </div>
        // </div>
      )}
    </div>
  );
}