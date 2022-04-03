import cx from "classnames";

import styles from "./Button.module.css";

import { ReactComponent as IconDefault } from "common/icons/moon.svg";

export const Button = ({
  size = "big", // big, small
  theme = "regular", // regular, light, conrast
  style = "regular", // regular, textOnly, iconOnly
  Icon = IconDefault,
  width,
  children,
}) => {
  let themeClass;
  let sizeClass;

  // определяем цвет (тему)
  switch (theme) {
    case "regular":
      themeClass = styles.themeRegular;
      break;
    case "light":
      themeClass = styles.themeLight;
      break;
    case "contrast":
      themeClass = styles.themeContrast;
      break;
    default:
      throw "wrong theme";
  }

  // размер
  switch (size) {
    case "big":
      sizeClass = styles.sizeBig;
      break;
    case "small":
      sizeClass = styles.sizeSmall;
      break;
    default:
      throw "wrong size";
  }

  // класс собираем
  const buttonClass = cx(styles._, themeClass, sizeClass, {
    [styles.iconOnly]: style === "iconOnly",
    [styles.widthFlexible]: width === "flexible",
  });

  return (
    <button className={buttonClass}>
      {style !== "textOnly" && <Icon className={styles.icon} />}
      {style !== "iconOnly" && <div className={styles.text}>{children}</div>}
    </button>
  );
};
