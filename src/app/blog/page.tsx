import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on engineering, tooling, and the occasional tangent.",
};

export default function BlogPage() {
  return (
    <article className={styles.page} id="blog">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Writing</p>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.lede}>
          Placeholder copy. Posts will be wired up to real content later.
        </p>
      </header>

      <section className={styles.post}>
        <h2 className={styles.postTitle}>On Reading the Manual First</h2>
        <p className={styles.meta}>Draft &middot; 6 min read</p>
        <p>
          Every framework carries a set of assumptions that are invisible until
          they break. The fastest way to find them is not to guess from memory
          but to open the documentation shipped alongside the version actually
          installed. Placeholder text follows so the layout has something to
          breathe against.
        </p>
      </section>

      <section className={styles.post}>
        <h2 className={styles.postTitle}>Grid Is Not a Layout of Last Resort</h2>
        <p className={styles.meta}>Draft &middot; 4 min read</p>
        <p>
          Named template areas turn a page skeleton into something you can read
          out loud, which means the CSS survives the next person who touches it.
          This paragraph exists purely to occupy space until the real post is
          written and slotted into place.
        </p>
      </section>

      <section className={styles.post}>
        <h2 className={styles.postTitle}>Notes on Animation Restraint</h2>
        <p className={styles.meta}>Draft &middot; 3 min read</p>
        <p>
          Motion earns its place when it explains something — a transition,
          a relationship, a state change. Everything else is decoration that
          costs a frame budget. More placeholder prose to round out the stack
          of cards on this page.
        </p>
      </section>
    </article>
  );
}
