"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import styles from './style.module.scss';
import Link from 'next/link';
import Magnetic from "@/ui/Magnetic/index";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Footer() {
    const container = useRef<HTMLDivElement>(null);
    const bigTextRef = useRef<HTMLHeadingElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = new SplitText(bigTextRef.current, {
            type: 'lines',
            linesClass: styles.lineInner,
        });

        split.lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.classList.add(styles.lineMask);
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
        });

        tl.from(split.lines, {
            yPercent: 100,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.1,
        })
            .from(
                linksRef.current?.querySelectorAll('a') || [],
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                },
                '-=0.5'
            );
    }, { scope: container });

    return (
        <footer ref={container} className={styles.footer}>
            <div className={styles.mainContent}>
                <h2 ref={bigTextRef} className={styles.bigText}>
                    Safe harbor found.<br />
                    Let’s build the next beacon.
                </h2>

                <div ref={linksRef} className={styles.links}>
                    <Magnetic><Link href="#" className={styles.link}>LinkedIn</Link></Magnetic>
                    <Magnetic><Link href="#" className={styles.link}>GitHub</Link></Magnetic>
                    <Magnetic><Link href="#" className={styles.link}>Portfolio</Link></Magnetic>
                    <Magnetic><Link href="mailto:sthapliyal085@gmail.com" className={styles.link}>Email</Link></Magnetic>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <span>© 2026 Saurabh Thapliyal</span>
            </div>
        </footer>
    );
}