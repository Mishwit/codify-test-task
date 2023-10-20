"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  options: string[];
  activeOption: string;
};

export const Select: React.FC<Props> = ({ options, activeOption }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  return (
    <div className={styles.selectWrapper}>
      <div
        className={styles.customSelect}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <span className={styles.selectSelected}>{activeOption}</span>
        {/* <img src="./select-arrow.svg" alt="" /> */}
        <div className={styles.arrow} />
      </div>
      {isSelectOpen && (
        <div className={styles.selectItems}>
          {options.map((option) => (
            <span key={option}>{option}</span>
          ))}
        </div>
      )}
    </div>
    // <div
    //   className={styles.customSelect}
    //   onClick={() => setIsSelectOpen(!isSelectOpen)}
    // >
    //   <select>
    //     <option value="lastMonth">За последний месяц</option>
    //     <option value="lastSixMonth">За последние 6 месяцев</option>
    //     <option value="lastYear">За последний год </option>
    //   </select>
    //   <div className={styles.selectSelected}>За последний месяц</div>
    //   <div className={`selectItems ${isSelectOpen ? "" : "selectHide"}`}>
    //     <div>За последний год </div>
    //     <div>За последние 6 месяцев</div>
    //   </div>
    // </div>
  );
};
// export const Select = () => {
//   const options = [
//     "За последний месяц",
//     "За последние 6 месяцев",
//     "За последний год",
//   ];
//   const [selectedOption, setSelectedOption] = useState(options);
//   const selectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <div>
//       <select className="select" value={selectedOption} onChange={selectChange}>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };
