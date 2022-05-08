import cx from "classnames";

import styles from "./Button.module.css";
import { capitalize } from "common/helpers/capitalize.js";

export const Button = ({
  size = "big", // big, small
  theme = "regular", // regular, light, conrast
  Icon,
  fullWidth = false,
  children,
  className,
  onClick = () => {},
  ...props
}) => {
  // класс собираем
  const buttonClass = cx(styles._, className, {
    [styles[`theme${capitalize(theme)}`]]: true,
    [styles[`size${capitalize(size)}`]]: true,
    [styles.iconOnly]: !children,
    [styles.widthFlexible]: fullWidth,
  });

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {Icon && <Icon className={styles.icon} />}
      {children && <div className={styles.text}>{children}</div>}
    </button>
  );
};
