"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";

export default function Boat() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    return (
      <section className={styles.boat} ref={containerRef}>
          <div className={styles.imageContainer} ref={imageContainerRef}>
              <Image
                  src="/images/clouds.jpg"
                  alt="boat"
                  fill
                  ref={imageRef}
                  quality={100}
                  sizes="100vw"
                  priority
                  unoptimized
              />
          </div>
      </section>
    );
}