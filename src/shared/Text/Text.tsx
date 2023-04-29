import React from "react";
import styles from "./text.css";
import classNames from "classnames";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  greyF3 = "greyF3",
  greyEC = "greyEC",
  greyD9 = "greyD9",
  grey99 = "grey99",
  greyC4 = "greyC4",
  grey66 = "grey66",
}

interface ITextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    color = EColors.black,
    bold = false,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    { [styles.bold]: bold }
  );
  return <As className={classes}>{children}</As>;
}