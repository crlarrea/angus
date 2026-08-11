import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/hero.module.scss";
const HeroCards = () => {
  return (
    <div className={styles.heroCards}>
      <div className={styles.card}>card 1</div>
      <div className={styles.card}>
        <p>From £2 a month</p>
        <Link href="donate&amount=2">Let's do it!</Link>
        <Image src="/cat_with_hat.png" fill sizes="(max-width:1024px) 50px" alt="decorative image"/>
      </div>
    </div>
  );
};

export default HeroCards;
