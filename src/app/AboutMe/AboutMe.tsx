import styles from "./AboutMe.module.css";

type AboutMeProps = {
  className?: string;
};

export default function AboutMe({ className }: AboutMeProps) {
  return (
    <section
      className={[styles.about, className].filter(Boolean).join(" ")}
      aria-label="About me"
    >
      hubba bubba
    </section>
  );
}
