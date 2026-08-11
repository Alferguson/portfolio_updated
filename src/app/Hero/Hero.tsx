import styles from "./Hero.module.css";

type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={[styles.hero, className].filter(Boolean).join(" ")}
      aria-label="Introduction"
    >
      {/* TODO: hero animation/content */}
    </section>
  );
}
