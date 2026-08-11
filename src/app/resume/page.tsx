import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <article className={styles.page} id="resume">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Curriculum Vitae</p>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.lede}>
          Placeholder copy. Real roles, dates, and a PDF download will replace
          this section.
        </p>
      </header>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Experience</h2>
        <div className={styles.entry}>
          <h3 className={styles.role}>Software Engineer</h3>
          <p className={styles.meta}>Placeholder Company &middot; 20XX &ndash; Present</p>
          <p>
            Built and maintained interfaces used by an unspecified but
            impressive number of people. Sample text standing in for the
            achievements that belong here.
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.role}>Junior Developer</h3>
          <p className={styles.meta}>Another Placeholder &middot; 20XX &ndash; 20XX</p>
          <p>
            Shipped features, fixed defects, and learned which abstractions are
            worth the cost. More filler prose to keep the rhythm of the page
            intact until the details arrive.
          </p>
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Skills</h2>
        <ul className={styles.skills}>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>CSS Architecture</li>
          <li>Accessibility</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Education</h2>
        <div className={styles.entry}>
          <h3 className={styles.role}>B.S., Placeholder Studies</h3>
          <p className={styles.meta}>Some University &middot; 20XX</p>
        </div>
      </section>
    </article>
  );
}
