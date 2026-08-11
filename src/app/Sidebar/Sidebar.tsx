"use client";

import { useState } from "react";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={[styles.sidebar, open ? styles.open : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="sidebar-nav"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav id="sidebar-nav" className={styles.nav} aria-label="Sections">
        {/* TODO: About, Links, Blog, Resume section links */}
      </nav>
    </aside>
  );
}
