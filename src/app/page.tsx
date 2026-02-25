"use client";

import styles from "./page.module.css";
import Landing from "@/components/Landing/index";
import Ship from "@/components/Ship/index";
import Boat from "@/components/Boat/index";
import { ReactLenis } from "lenis/react";
import About from "@/components/About/index";
import Cape from "@/components/Cape";

export default function Home() {
    return (
        <ReactLenis root>
            <div className={styles.page}>
                <Landing />
                <About />
                <Cape />
                <Ship />
                <Boat />
            </div>
        </ReactLenis>
    );
}