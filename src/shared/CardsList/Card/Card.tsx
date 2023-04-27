import React from "react";
import styles from "./card.css";
import { TextContent } from "./TextContent";
import { Controls } from "./Controls";
import { Preview } from "./Preview";
import { Menu } from "./Menu";

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}