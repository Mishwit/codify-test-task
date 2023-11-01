"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Select } from "@/components/atoms/Select";
import { Chart } from "@/components/atoms/Chart";

const options = [
  "За последний месяц",
  "За последние 6 месяцев",
  "За последний год",
];

const amount = [10000, 5000, 2000, 1000, 500, 0];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Select options={options} defaultOption={options[0]} />

        <Chart amount={amount} />
      </div>
    </main>
  );
}
