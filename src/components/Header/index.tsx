"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import Magnetic from "@/ui/Magnetic/index";

export default function Header() {
    return (
      <header className={styles.header}>
          <nav className={styles.nav}>
              <ul>
                  <li>
                      <Magnetic>
                          <Link href="/">Home</Link>
                      </Magnetic>
                  </li>
                  <li>
                      <Magnetic>
                          <Link href="/">About</Link>
                      </Magnetic>
                  </li>
                  <li>
                      <Magnetic>
                          <Link href="/">Contact</Link>
                      </Magnetic>
                  </li>
              </ul>
          </nav>
      </header>
    );
}