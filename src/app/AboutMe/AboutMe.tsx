import styles from "./AboutMe.module.css";

type AboutMeProps = {
  className?: string;
};

export default function AboutMe({ className }: AboutMeProps) {
  return (
    <section
      id="about"
      className={[styles.about, className].filter(Boolean).join(" ")}
      aria-labelledby="about-title"
    >
      <p className={styles.eyebrow}>01 &mdash; About</p>
      <h2 id="about-title" className={styles.title}>
        About Me
      </h2>

      <div className={styles.prose}>
        <p>
          I build things for the web, mostly the parts people actually touch.
          My work tends to start in the same place: a stubborn curiosity about
          why an interface feels slow, or awkward, or subtly wrong in a way
          nobody has bothered to name yet. Chasing that feeling down to a
          specific layout thrash or an unnecessary round trip is, as far as
          I&rsquo;m concerned, the whole job. The polish everyone notices is
          just what falls out the other end.
        </p>
        <p>
          Most of my time goes to TypeScript and React, though I have a soft
          spot for CSS that other developers find slightly alarming. Modern
          layout primitives &mdash; grid, container queries, <code>:has()</code>{" "}
          &mdash; have quietly replaced entire categories of JavaScript I used
          to write, and I would rather express a responsive rail in six lines of
          a stylesheet than in a resize observer I have to maintain forever. I
          care about accessibility for the unglamorous reason that it is simply
          part of the work being finished.
        </p>
        <p>
          Away from the keyboard I make coffee with more equipment than the
          result strictly justifies, take long walks that I insist are for
          thinking, and read far more about typography than a person in my line
          of work needs to. I am usually up for a conversation about a hard
          rendering bug, a well-drawn diagram, or whether the em dash is
          overused &mdash; and I will happily argue the wrong side of that last
          one.
        </p>
      </div>
    </section>
  );
}
