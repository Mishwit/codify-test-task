import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  options: string[];
  defaultOption: string;
};

export const Select: React.FC<Props> = ({
  options,
  defaultOption = options[0],
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(defaultOption);

  const optionClick = (option: string) => {
    setActiveOption(option);
    setIsSelectOpen(false);
  };

  return (
    <div className={styles.selectWrapper}>
      <button
        className={styles.customSelect}
        type="button"
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <span className={styles.selectSelected}>{activeOption}</span>

        <Image
          className={clsx(styles.arrow, isSelectOpen && styles.arrowOpened)}
          src="/select-arrow.svg"
          alt=""
          height={16}
          width={28}
        />
      </button>

      {isSelectOpen && (
        <ul className={styles.selectItems}>
          {options.map((option) =>
            activeOption === option ? null : (
              <li key={option} onClick={() => optionClick(option)}>
                {option}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
