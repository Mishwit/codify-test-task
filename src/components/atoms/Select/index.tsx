"use client";
import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  options: string[];
  activeOption: string;
};

export const Select: React.FC<Props> = ({ options, activeOption }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(activeOption);
  options = [
    "За последний месяц",
    "За последние 6 месяцев",
    "За последний год",
  ];

  return (
    <div className={styles.selectWrapper}>
      <div
        className={styles.customSelect}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <span className={styles.selectSelected}>{selectedOption}</span>

        <Image
          className={clsx(styles.arrow, isSelectOpen && styles.arrowOpened)}
          src="/select-arrow.svg"
          alt=""
          height={16}
          width={28}
        />
      </div>

      {isSelectOpen && (
        <div className={styles.selectItems}>
          {options.map((option) => (
            <span
              key={option}
              onClick={() => {
                setSelectedOption(option);
                setIsSelectOpen(false);
              }}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
