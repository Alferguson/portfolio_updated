import type { ReactNode } from "react";
import styles from "./Footer.module.css";

/* Named SocialLinks rather than Links so it does not collide with the
   header's Links component, which LAYOUT.md reserves for Blog/Resume.
   TODO: swap the placeholder hrefs for real profiles. */
type Social = {
  label: string;
  href: string;
  icon: ReactNode;
};

const isExternal = (href: string) => href.startsWith("http");

const SOCIALS: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.9V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.82 1.18 1.85 1.18 3.11 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.18c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2.4.5 7.6 5.7 7.6-5.7H4.4ZM20 8 12.6 13.5a1 1 0 0 1-1.2 0L4 8v11h16V8Z" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <nav className={styles.socials} aria-label="Elsewhere">
      <ul className={styles.socialList}>
        {SOCIALS.map(({ label, href, icon }) => (
          <li key={label}>
            {/* Only real destinations open in a new tab: a mailto: with
                target="_blank" leaves an empty tab behind after handoff. */}
            <a
              className={styles.social}
              href={href}
              target={isExternal(href) ? "_blank" : undefined}
              rel={isExternal(href) ? "noreferrer noopener" : undefined}
            >
              <span className={styles.icon}>{icon}</span>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
