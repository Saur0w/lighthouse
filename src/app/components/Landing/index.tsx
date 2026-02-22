"use client";

import Image from "next/image";
import styles from "./style.module.scss";

export default function Landing() {
    return (
        <section className={styles.landing}>
            <header className={styles.header}>
                <span className={styles.eyebrow}>Est. 2024</span>
                <h1 className={styles.title}>Lighthouse</h1>
            </header>

            <div className={styles.imageContainer}>
                <Image src="/images/lighthouse.jpg" alt="Lighhouse"
                       fill
                />
            </div>

        </section>
    );
}