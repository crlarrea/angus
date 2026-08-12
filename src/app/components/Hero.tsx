import styles from "@/app/styles/hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";

import { story_script } from "../fonts/fonts";
import { FaPlay } from "react-icons/fa6";

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
          <Link href="https://www.anguscatrescue.co.uk/plans-pricing/payment/">
            <FaDonate />
            donate
          </Link>
          <Link href="https://www.anguscatrescue.co.uk/applytoadoptacat">
            <BsFillHouseHeartFill />
            rehome
          </Link>
        </div>
      </article>

      <article className={styles.heroImage}>
        <Image
          src={"/hero_3.png"}
          fill
          alt="Hero image: cat."
          sizes="(max-width:1024px) 500px"
        />
      </article>

      <article className={styles.rightPanel}>
        <div className={styles.smallDonation}>
          <div className={styles.smallDonationCopy}>
            <p>
              From as little as <br /> £2 a month
            </p>
            <p>Every cat deserves a second chance.</p>
            <Link href="https://www.anguscatrescue.co.uk/plans-pricing/payment/">
              Let's do it!
            </Link>
          </div>
          <div className={styles.smallDonationImage}>
            <Image
              src="/black_cat.png"
              fill
              alt="Decorative image: black cat."
              sizes="(max-width:1024px) 80px"
            />
          </div>
        </div>
        <div className={styles.happyEverAfters}>
          <div className={styles.happyEverAftersCopy}>
            <p>
              <AiTwotoneHeart />
              Happy Ever Afters
            </p>
            <p>Little Susu's story</p>
          </div>
          <div className={styles.happyEverAftersImage}>
            <Image
              src="/susu.avif"
              fill
              alt="Susu: Happy Ever Afters."
              sizes="(max-width:1024px) 80px"
            />
            <FaPlay />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
