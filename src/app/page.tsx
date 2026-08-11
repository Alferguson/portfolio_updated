import styles from "./page.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Hero className={styles.hero} />
      <AboutMe className={styles.about} />
      <Footer className={styles.footer} />
    </div>
  );
}
