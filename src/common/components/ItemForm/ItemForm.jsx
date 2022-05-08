import cx from "classnames";

import { ReactComponent as XLargeIcon } from "common/icons/x-large.svg";
import { ReactComponent as IconSave } from "common/icons/checkmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "common/components/Button/Button";
import { ItemFormInput } from "common/components/ItemFormInput/ItemFormInput";
import { ItemFormDropdown } from "common/components/ItemFormDropdown/ItemFormDropdown";
import {
  hideItemForm,
  setCurStatus,
} from "store/actionCreators/itemFormInputActionCreator";
import { updateByIdActionCreator } from "store/actionCreators/uploadDataActionCreator";

import styles from "./ItemForm.module.css";

export const ItemForm = ({
  //id,
  className,
}) => {
  const { showItemForm, curStatus, ...row } = useSelector(
    (state) => state.itemForm
  );

  //console.log("showItemForm ", showItemForm);

  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(hideItemForm());
  };

  const handleSaveClick = () => {
    //console.log("saved ");
    dispatch(
      updateByIdActionCreator({
        id: row.id,
        title: row.titleInput,
        type: row.typeInput,
        director: row.directorInput,
        status: row.statusInput,
        watch_dt: row.watch_dtInput,
      })
    );
    dispatch(setCurStatus("Сохранено"));
  };

  /*
  const inputClass = cx(styles.input, {
    [styles.input_incorrect]: incorrect,
    [styles.input_disabled]: disabled,
  });

  id: 1
  title: "Челюсти 1",
    type: "ужасы",
    director: "Спилберг",
    status: "watched",
    watch_dt: "2001-01-01",
*/
  return (
    showItemForm && (
      <div className={cx(styles._, className)}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeader__label}>Фильм Id {row.id}</div>
          <div
            className={styles.cardHeader__closeButton}
            onClick={handleCloseClick}
          >
            <XLargeIcon className={styles.cardHeader__xIcon}></XLargeIcon>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardContent__inputBlock}>
            <div className={styles.cardContent__label}>Название</div>
            <ItemFormInput className={styles.cardContent__input} name="title" />
          </div>
          <div className={styles.cardContent__inputBlock}>
            <div className={styles.cardContent__label}>Жанр</div>
            <ItemFormInput className={styles.cardContent__input} name="type" />
          </div>
          <div className={styles.cardContent__inputBlock}>
            <div className={styles.cardContent__label}>Режиссер</div>
            <ItemFormInput
              className={styles.cardContent__input}
              name="director"
            />
          </div>
          <div className={styles.cardContent__inputBlock}>
            <div className={styles.cardContent__label}>Дата просмотра</div>
            <ItemFormInput
              className={styles.cardContent__input}
              placeholder="yyyy-mm-dd"
              name="watch_dt"
            />
          </div>
          <div className={styles.cardContent__inputBlock}>
            <div className={styles.cardContent__label}>Статус</div>
            <ItemFormDropdown
              className={styles.cardContent__input}
              statuses={[
                "downloaded",
                "watched",
                "marked to watch",
                "marked not to watch",
              ]}
              name="status"
            />
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooter__status}>{curStatus}</div>
          <Button
            size="big"
            theme="regular"
            Icon={IconSave}
            onClick={handleSaveClick}
          >
            Сохранить
          </Button>
        </div>
      </div>
    )
  );
};
