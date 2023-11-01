import React from "react";
import styles from "./styles.module.css";

import utils from "../.../../.../../../../utils/data.json";

type Props = {
  amount: [];
};

export const Chart: React.FC<Props> = ({ amount }) => {
  const utils = [];
  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartAmount}>
        {amount.map((amount) => (
          <span key={amount}>{amount}</span>
        ))}
      </div>
      <div className={styles.chartGraph}>
        <div className={styles.chartDays}>
          <div className={styles.chartStripes}>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
            <div className={styles.stripe}></div>
          </div>

          <div className={styles.days}>
            <span>1</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
  );
};
