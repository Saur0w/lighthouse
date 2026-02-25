"use client";

import styles from "./style.module.scss";
import PImage from "@/ui/Parallax/index";

export default function Boat() {
    return (
        <section className={styles.boat}>
            <div className={styles.imageContainer}>
                <PImage
                    src="/images/boat.jpg"
                    alt="boat"
                />
            </div>
        </section>
    );
}