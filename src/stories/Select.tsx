"use client";
import React, { useState } from "react";
import "./select.css";

export const Select = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  return (
    <div
      className="customSelect"
      onClick={() => setIsSelectOpen(!isSelectOpen)}
    >
      <select>
        <option value="lastMonth">За последний месяц</option>
        <option value="lastSixMonth">За последние 6 месяцев</option>
        <option value="lastYear">За последний год </option>
      </select>
      <div className="selectSelected">За последний месяц</div>
      <div className={`selectItems ${isSelectOpen ? "" : "selectHide"}`}>
        <div>За последний год </div>
        <div>За последние 6 месяцев</div>
      </div>
    </div>
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
