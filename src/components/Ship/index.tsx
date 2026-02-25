"use client";

import styles from "./style.module.scss";
import PImage from "@/ui/Parallax/index";

export default function Ship() {
    return (
        <section className={styles.ship}>
            <div className={styles.imageContainer}>
                <PImage
                    src="/images/forest.jpg"
                    alt="ship"
                />
            </div>
        </section>
    );
}