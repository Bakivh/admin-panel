import cx from "classnames";

import styles from "./Button.module.css";

export const Button = ({
  size = "big", // big, small
  theme = "regular", // regular, light, conrast
  Icon,
  fullWidth = false,
  children,
  className,
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
      throw Error("wrong theme");
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
      throw Error("wrong theme");
  }

  // класс собираем
  const buttonClass = cx(styles._, themeClass, sizeClass, className, {
    [styles.iconOnly]: !children,
    [styles.widthFlexible]: fullWidth,
  });

  return (
    <button className={buttonClass}>
      {Icon && <Icon className={styles.icon} />}
      {children && <div className={styles.text}>{children}</div>}
    </button>
  );
};
