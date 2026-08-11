import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/hero.module.scss";
import { FaPlay } from "react-icons/fa6";

const HeroCards = () => {
  return (
    <div className={styles.heroCards}>
      <div className={styles.happyEverAfters}>
        {/* <p>Happy Ever Afters</p> */}
        <span>
          <FaPlay />
        </span>
        
          {/* <p>Little Susu's story</p> */}
          <Image
            src="/susu.avif"
            fill
            alt="Susu: Happy Ever Afters."
            sizes="(max-width:1024px) 80px"
          />
        
      </div>
      <div className={styles.donationCard}>
        <p>From £2 a month</p>
        <Link href="donate&amount=2">Let's do it!</Link>
        <Image
          src="/cat_with_hat.png"
          fill
          sizes="(max-width:1024px) 50px"
          alt="decorative image"
        />
      </div>
    </div>
  );
};

export default HeroCards;
