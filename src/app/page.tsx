import Image from "next/image";
import styles from "./page.module.css";
import { Select } from "@/stories/Select";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Select />
      </div>
    </main>
  );
}
