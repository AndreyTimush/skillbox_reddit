import React from "react";
import styles from "./icon.css";
import classNames from "classnames";
import {
  BlockIcon,
  CommentsIcon,
  IconAnon,
  MenuIcon,
  SaveIcon,
  SharedIcon,
  WarningIcon,
} from "../icons";

type TSizesImage = 28 | 20 | 16 | 14 | 12 | 10;

export enum EIcons {
  block = "BlockIcon",
  save = "SaveIcon",
  shared = "SharedIcon",
  comments = "CommentsIcon",
  warning = "WarningIcon",
  menu = "MenuIcon",
  anon = "AnonIcon",
}

const icons = {
  [EIcons.block]: <BlockIcon />,
  [EIcons.save]: <SaveIcon />,
  [EIcons.shared]: <SharedIcon />,
  [EIcons.comments]: <CommentsIcon />,
  [EIcons.warning]: <WarningIcon />,
  [EIcons.menu]: <MenuIcon />,
  [EIcons.anon]: <IconAnon />,
};

interface IIconProps {
  name: EIcons;
  size: TSizesImage;
}

export function Icon({ name, size }: IIconProps) {
  const classes = classNames(styles[`s${size}`]);
  return <div className={classes}>{icons[name]}</div>;
}