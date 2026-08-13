import styles from "./Hero.module.css";

/* Positions are a fixed, hand-picked table rather than Math.random(): the
   hero renders on the server, and a random value would produce different
   markup on the client and blow up hydration. The scatter comes from the
   varied delays/durations below, which are pure CSS. */
const HEXAGONS = [
  { top: 12, left: 8, size: 46, delay: 0, duration: 7 },
  { top: 68, left: 14, size: 28, delay: 1.4, duration: 9 },
  { top: 30, left: 24, size: 64, delay: 3.1, duration: 8 },
  { top: 82, left: 33, size: 38, delay: 0.7, duration: 11 },
  { top: 18, left: 44, size: 22, delay: 2.3, duration: 6 },
  { top: 54, left: 52, size: 80, delay: 4.2, duration: 10 },
  { top: 8, left: 63, size: 34, delay: 1.9, duration: 8 },
  { top: 74, left: 70, size: 52, delay: 3.6, duration: 7 },
  { top: 40, left: 81, size: 26, delay: 0.4, duration: 12 },
  { top: 24, left: 89, size: 58, delay: 2.8, duration: 9 },
  { top: 88, left: 58, size: 20, delay: 5.0, duration: 6 },
  { top: 60, left: 4, size: 32, delay: 4.7, duration: 10 },
] as const;

const LINES = [
  { top: 22, delay: 0.5, duration: 5 },
  { top: 47, delay: 2.6, duration: 7 },
  { top: 71, delay: 4.1, duration: 6 },
  { top: 90, delay: 1.7, duration: 8 },
] as const;

type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  return (
    <section
      id="hero"
      className={[styles.hero, className].filter(Boolean).join(" ")}
      aria-labelledby="hero-title"
    >
      <div className={styles.field} aria-hidden="true">
        {HEXAGONS.map((hex, index) => (
          <span
            key={index}
            className={styles.hex}
            style={{
              top: `${hex.top}%`,
              left: `${hex.left}%`,
              width: `${hex.size}px`,
              height: `${hex.size}px`,
              animationDelay: `${hex.delay}s`,
              animationDuration: `${hex.duration}s`,
            }}
          />
        ))}

        {LINES.map((line, index) => (
          <span
            key={index}
            className={styles.line}
            style={{
              top: `${line.top}%`,
              animationDelay: `${line.delay}s`,
              animationDuration: `${line.duration}s`,
            }}
          />
        ))}

        <span className={styles.grid} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 id="hero-title" className={styles.title}>
          John Alexander Ferguson
        </h1>
        <p className={styles.subtitle}>
          Software engineer building fast, accessible interfaces for the web.
        </p>
      </div>
    </section>
  );
}
