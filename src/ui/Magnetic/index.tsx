"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const magneticRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={magneticRef} style={{ display: "inline-block" }}>
            {children}
        </div>
    )
}