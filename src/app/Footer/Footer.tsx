import styles from "./Footer.module.css";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={[styles.footer, className].filter(Boolean).join(" ")}>
      Foot
    </footer>
  );
}
