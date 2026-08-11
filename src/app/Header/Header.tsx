"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Links from "../Links";
import styles from "./Header.module.css";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const root = document.documentElement;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        root.dataset.scrolled = entry.isIntersecting ? "false" : "true";
      }
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        className={styles.scrollSentinel}
        aria-hidden="true"
      />
      <header className={[styles.header, className].filter(Boolean).join(" ")}>
        <Link href="/" className={styles.name}>
          John (Alex)ander Ferguson
        </Link>
        <Links />
      </header>
    </>
  );
}
