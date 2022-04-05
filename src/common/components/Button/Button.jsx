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

  // чтобы не заставлять передавать пропсы с большой буквы
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  // класс собираем
  const buttonClass = cx(styles._, className, {
    [styles[`theme${capitalize(theme)}`]]: true,
    [styles[`size${capitalize(size)}`]]: true,
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
