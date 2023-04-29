import React from "react";
import styles from "./menuitemslist.css";
import { EColors, Text } from "../../../../Text";
import classNames from "classnames";
import { GenericList } from "../../../../GenericList";
import { generateId } from "../../../../../utils/react/generateRandomIndex";
import { EIcons, Icon } from "../../../../Icon";
import { merge } from "../../../../../utils/js/merge";

const classesCommentsItem = classNames(styles.menuItem, [styles.commentsItem]);
const classesSharedItem = classNames(styles.menuItem, [styles.sharedItem]);
const classesSaveItem = classNames(styles.menuItem, [styles.saveItem]);

const LIST = [
  {
    text: (
      <>
        <li className={classesCommentsItem}>
          <Icon name={EIcons.comments} size={14} />
          {/*<CommentsIcon />*/}
          <Text size={12} color={EColors.grey99}>
            Комментарии
          </Text>
        </li>
        <div className={styles.divider} />
      </>
    ),
  },
  {
    text: (
      <>
        <li className={classesSharedItem}>
          <Icon name={EIcons.shared} size={14} />
          {/*<SharedIcon />*/}
          <Text size={12} color={EColors.grey99}>
            Поделиться
          </Text>
        </li>
        <div className={styles.divider} />
      </>
    ),
  },
  {
    text: (
      <>
        <li className={styles.menuItem}>
          <Icon name={EIcons.block} size={14} />
          {/*<BlockIcon />*/}
          <Text size={12} color={EColors.grey99}>
            Скрыть
          </Text>
        </li>
        <div className={styles.divider} />
      </>
    ),
  },
  {
    text: (
      <>
        <li className={classesSaveItem}>
          <Icon name={EIcons.save} size={14} />
          {/*<SaveIcon />*/}
          <Text size={12} color={EColors.grey99}>
            Сохранить
          </Text>
        </li>
        <div className={styles.divider} />
      </>
    ),
  },
  {
    text: (
      <>
        <li className={styles.menuItem}>
          <Icon name={EIcons.warning} size={14} />
          <Text size={12} color={EColors.grey99}>
            Пожаловаться
          </Text>
        </li>
      </>
    ),
  },
].map(generateId);

export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <GenericList list={LIST.map(merge({ onClick: console.log }))} />
    </ul>
  );
}