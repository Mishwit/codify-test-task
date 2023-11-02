import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

import utils from "../.../../.../../../../utils/data.json";

type Props = {
  amount: number[];
};

export const Chart: React.FC<Props> = ({ amount }) => {
  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartAmount}>
        {amount.map((amount) => (
          <span key={amount}>{amount}</span>
        ))}
      </div>

      <div className={styles.chartGraph}>
        <div className={styles.chartDays}>
          {/* <div className={styles.chartStripes}>
            <div className={clsx(styles.stripe)}></div>
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
          </div> */}

          {/* <div className={styles.dates}> */}
          {/* Month */}
          {/* {Object.entries(utils.finance.periods[0].graph.month)
              .filter((day, index) => (index + 1) % 5 === 0 || index === 0)
              .map(([day, value]) => (
                <span key={day}><div className={styles.stripe}></div>{day < 10 ? `0${day}` : day}</span>
              ))}
          </div> */}

          {/* Half-year */}
          {/* {Object.entries(utils.finance.periods[0].graph.half_year).map(
              ([month, value]) => (
                <span key={month}>
                  <div className={styles.stripeHalfYear}></div>
                  {month}
                </span>
              )
            )} */}

          {/* Year */}
          <div className={styles.datesYear}>
            {Object.entries(utils.finance.periods[0].graph.year).map(
              ([month, value]) => (
                <span key={month}>
                  <div className={styles.stripeYearActive}></div>
                  {month}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
