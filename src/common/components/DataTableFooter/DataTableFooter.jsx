import cx from "classnames";

import { useSelector, useDispatch } from "react-redux";
import { setCurPageActionCreator } from "store/actionCreators/pageActionCreators";
import { calcCheckCount } from "store/selectors/calcCheckCount";

import styles from "./DataTableFooter.module.css";

export const DataTableFooter = ({ className, dataSize }) => {
  const { curPage, rowsPerPage } = useSelector((state) => state.page);

  const checkCount = useSelector(calcCheckCount);

  const dispatch = useDispatch();

  const pageCount = Math.ceil(dataSize / rowsPerPage);

  const handleClick = (e) => {
    const newPage = e.currentTarget.innerText;
    dispatch(setCurPageActionCreator(newPage));
  };

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <div
        className={cx(styles.pageNum, {
          [styles.curPageNum]: i.toString() === curPage,
        })}
        key={i}
        onClick={handleClick}
      >
        {i}
      </div>
    );
  }

  return (
    <div className={cx(styles._, className)}>
      <div className={styles.leftBar}>Выбрано записей: {checkCount}</div>
      <div className={styles.pages}>{pages}</div>
    </div>
  );
};
