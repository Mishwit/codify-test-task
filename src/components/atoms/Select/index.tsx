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
  options = [
    "За последний месяц",
    "За последние 6 месяцев",
    "За последний год",
  ];

  activeOption = "За последний месяц";
  return (
    <div className={styles.selectWrapper}>
      <div
        className={styles.customSelect}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <span className={styles.selectSelected}>{activeOption}</span>

        <Image
          className={clsx(styles.arrow, isSelectOpen && styles.arrowOpened)}
          src="/select-arrow.svg"
          alt=""
          height={12}
          width={24}
        />
      </div>

      {isSelectOpen && (
        <div className={styles.selectItems}>
          {options.map((option) => (
            <span key={option}>{option}</span>
          ))}
        </div>
      )}
    </div>
  );
};
