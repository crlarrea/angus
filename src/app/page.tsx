import styles from "@/app/styles/home.module.scss";
import Hero from "./hero";
import Plans from "./plans";
import Info from "./info";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Info />
      <Plans />
    </main>
  );
}
