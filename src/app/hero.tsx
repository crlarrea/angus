import styles from "@/app/styles/hero.module.scss";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <article className={styles.copy}>
        <h2>You can make a difference.</h2>
        <p>
          At <strong>Angus Cat Rescue</strong>, we are committed to one goal:
          Making the world a better place for cats.
        </p>
        <p>
          We are a private, non-profit organisation dedicated to helping cats in
          need and to connecting with volunteers who share our mission.
        </p>
        <p>
          We support people in crisis with their cats, offering guidance,
          practical help, and assistance with rehoming when it’s needed most.
        </p>
        <p> Set up a monthly donation from as little as £2.00!</p>

        <Link href="#">
          <FaDonate />
          <span>donate</span>
        </Link>
      </article>
      <article className={styles.heroImage}>
        <Image src="/cat_2.png" fill alt="hero image"  sizes="(max-width:1024px) 511px"/>
      </article>
    </section>
  );
}
