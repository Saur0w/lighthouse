import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './style.module.scss';
import PImage from "@/ui/Parallax/index";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutSection() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const split = new SplitText(textRef.current, {
            type: 'lines',
            linesClass: styles.lineInner,
        });

        split.lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.classList.add(styles.lineMask);
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.from(split.lines, {
            yPercent: 100,
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: container.current,
                start: 'top 55%',
                toggleActions: "play none none reverse"
            },
        });
    }, { scope: container });

    return (
        <section ref={container} className={styles.aboutWrapper}>
            <div className={styles.content}>
                <span className={styles.subtitle}>01. Hark!</span>
                <p ref={textRef} className={styles.mainText}>
                    Ye don’t build a thing for praise, lad.<br />
                    Ye build it because the sea demands it.<br />
                    And if it shines —<br />
                    it shines whether they’re watchin’ or not.
                </p>
            </div>

            <div className={styles.imageContainer}>
                <PImage
                    src="/images/robert.jpg"
                    alt="boat"
                />
            </div>
        </section>
    );
};
