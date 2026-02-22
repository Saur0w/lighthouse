"use client";

import styles from "./page.module.css";
import Landing from "@/app/components/Landing";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
    </div>
  );
}
