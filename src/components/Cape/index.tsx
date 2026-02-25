import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import styles from './style.module.scss';
import PImage from "@/ui/Parallax/index";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function CapeSection() {
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
            yPercent: 110, 
            duration: 1.8,
            ease: 'expo.out', 
            stagger: 0.1,
            scrollTrigger: {
                trigger: container.current,
                start: 'top 55%',
                toggleActions: "play none none reverse"
            },
        });
    }, { scope: container });

    return (
        <section ref={container} className={styles.capeWrapper}>
            <div className={styles.imageContainer}>
                <PImage
                    src="/images/wolf.jpg"
                    alt="Howling"
                />
            </div>

            <div className={styles.content}>
                <span className={styles.subtitle}>02. Howling</span>
                <p ref={textRef} className={styles.mainText}>
                    My dear I always feared the ocean <br />
                    And, somehow, this one word in my mouth that&#39;s left unspoken <br />
                    And I said....<br />
                </p>
            </div>
        </section>
    );
}