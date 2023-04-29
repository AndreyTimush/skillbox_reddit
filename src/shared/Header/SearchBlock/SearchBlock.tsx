import React, { useContext, useEffect, useState } from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import { useUserData } from "../../../hooks/useUserData";
import { userContext } from "../../context/userContext";

export function SearchBlock() {
  const { iconImage, name } = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImage} username={name} />
    </div>
  );
}