import styles from "@/app/styles/hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { story_script } from "../fonts/fonts";
import HeroCards from "./HeroCards";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <article className={styles.leftPanel}>
        <h1 className={styles.title}>
          Helping <span className={story_script.className}>cats</span> in need
        </h1>
        <p className={styles.subtitle}>
          Keep or rehome cats with advice, support, and compassion.
        </p>
        <div className={styles.ctas}>
          <Link href="/donate">
            <FaHandHoldingHeart />
            donate
          </Link>
          <Link href="/donate">
            <RiHomeHeartFill />
            rehome
          </Link>
        </div>
      </article>

      <article className={styles.heroImage}>
        <Image
          src={"/hero_2.png"}
          fill
          alt="Hero image: cat."
          sizes="(max-width:1024px) 500px"
        />
      </article>

      <article className={styles.rightPanel}>
        <p>Every cat deserves a second chance.</p>
        <HeroCards />
      </article>
    </section>
  );
};

export default Hero;
