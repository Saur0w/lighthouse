"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: landingRef.current!,
                start: "top top",
                end: "+=250%",
            }
        });

        tl.to(imageContainerRef.current!, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power2.inOut",
        }, 0);

        tl.to(imageRef.current, {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
        }, 0);

    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Est. 2008</span>
                <h1 className={styles.title}>Lighthouse</h1>
            </div>

            <div className={styles.imageContainer} ref={imageContainerRef}>
                <Image
                    src="/images/lighthouse.jpg"
                    alt="Lighthouse"
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