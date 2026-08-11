import Link from "next/link";
import styles from "./Links.module.css";

type LinksProps = {
  className?: string;
};

/* Groups the Blog and Resume destinations. Per LAYOUT.md the group is named
   "Links" but never renders that word — the name is exposed to assistive tech
   through aria-label only. next/link (not <a>) keeps the transition
   client-side and prefetches both routes. */
export default function Links({ className }: LinksProps) {
  return (
    <nav
      className={[styles.links, className].filter(Boolean).join(" ")}
      aria-label="Pages"
    >
      <Link className={styles.link} href="/blog">
        Blog
      </Link>
      <Link className={styles.link} href="/resume">
        Resume
      </Link>
    </nav>
  );
}
