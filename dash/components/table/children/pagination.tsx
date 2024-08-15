import React from "react";
import styles from "./../table.module.css";
import Image from "next/image";

const Pagination = ({ currentPage, max }) => {
  return (
    <div className={styles.pagination}>
      <span className={styles.pagination_info}>
        Showing data {currentPage} to {currentPage * 8} of {max * 8} entries
      </span>
      <div className={styles.pills_wrapper}>
        <div className={styles.pill}>
          <Image
            src="/icons/small-arrow.svg"
            alt="arrow"
            width={8}
            height={12}
          />
        </div>
        <div className={`${styles.pill} ${styles.pill_active}`}>1</div>
        <div className={styles.pill}>2</div>
        <div className={styles.pill}>3</div>
        <div className={styles.pill}>4</div>
        ...
        <div className={styles.pill}>40</div>
        <div className={styles.pill}>
          <Image
            className={styles.next}
            src="/icons/small-arrow.svg"
            alt="arrow"
            width={8}
            height={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
