"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES, SECTIONS } from "../sections";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<string>(SECTIONS[0]?.id ?? "");

  // Storing *which* route the menu was opened on, rather than a bare boolean,
  // means a completed navigation closes it during render — no effect syncing
  // state to a prop, which is both a cascading render and a lint error.
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;
  const setOpen = (next: boolean) => setOpenForPath(next ? pathname : null);

  useEffect(() => {
    // The section targets only exist on the home page.
    if (!isHome) return;

    const elements = SECTIONS.map(({ id }) => document.getElementById(id));
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }

        // Resolve ties by document order rather than by whichever entry fired
        // last, which is what makes a naive isIntersecting spy flip-flop when
        // two sections occupy the band at once.
        const topmost = SECTIONS.find(({ id }) => visible.has(id));
        if (topmost) setActiveId(topmost.id);
      },
      {
        // A thin horizontal band near the top of the viewport, sitting just
        // below the sticky header: a section is "current" once it crosses it.
        rootMargin: "-12% 0px -70% 0px",
        threshold: 0,
      },
    );

    for (const element of elements) {
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [isHome]);

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
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span className={styles.bars} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav id="sidebar-nav" className={styles.nav} aria-label="Sections">
        <ul className={styles.list}>
          {SECTIONS.map(({ id, label, glyph }) => {
            const current = isHome && activeId === id;
            return (
              <li key={id}>
                <Link
                  href={isHome ? `#${id}` : `/#${id}`}
                  className={[styles.item, current ? styles.active : ""]
                    .filter(Boolean)
                    .join(" ")}
                  aria-current={current ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.glyph} aria-hidden="true">
                    {glyph}
                  </span>
                  <span className={styles.label}>{label}</span>
                </Link>
              </li>
            );
          })}

          {ROUTES.map(({ href, label, glyph }) => {
            const current = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[styles.item, current ? styles.active : ""]
                    .filter(Boolean)
                    .join(" ")}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.glyph} aria-hidden="true">
                    {glyph}
                  </span>
                  <span className={styles.label}>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
