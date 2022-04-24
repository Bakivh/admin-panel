import cx from "classnames";

import { useSelector, useDispatch } from "react-redux";
import { setCurPageActionCreator } from "store/actionCreators/PageActionCreators";

import styles from "./DataTableFooter.module.css";

export const DataTableFooter = ({ className, dataSize }) => {
  const { curPage, rowsPerPage } = useSelector((state) => state.page);

  const dispatch = useDispatch();

  const pageCount = Math.ceil(dataSize / rowsPerPage);

  const handleClick = (e) => {
    const newPage = e.currentTarget.innerText;
    dispatch(setCurPageActionCreator(newPage));
  };

  let pages = [];

  console.log(curPage);

  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <div
        className={
          i == curPage ? cx(styles.pageNum, styles.curPageNum) : styles.pageNum
        }
        key={i}
        onClick={handleClick}
      >
        {i}
      </div>
    );
  }

  return (
    <div className={cx(styles._, className)}>
      <div className={styles.leftBar}></div>
      <div className={styles.pages}>{pages}</div>
    </div>
  );
};
