import SocialLinks from "./SocialLinks";
import styles from "./Footer.module.css";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      id="links"
      className={[styles.footer, className].filter(Boolean).join(" ")}
    >
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>02 &mdash; Elsewhere</p>
          <p className={styles.blurb}>
            Find me on the usual places, or send a message.
          </p>
        </div>

        <SocialLinks />
      </div>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Alexander Ferguson
      </p>
    </footer>
  );
}
