"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const magneticRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const xTo = gsap.quickTo(magneticRef.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
        const yTo = gsap.quickTo(magneticRef.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magneticRef.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        magneticRef.current?.addEventListener("mousemove", handleMouseMove);
        magneticRef.current?.addEventListener("mouseleave", handleMouseLeave);

    }, { scope: magneticRef });
    return (
        <div ref={magneticRef} style={{ display: "inline-block" }}>
            {children}
        </div>
    )
}