import styles from "@/app/styles/hero.module.scss";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import Gallery from "./gallery";

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
        
        <Link href="/donate">
          <FaDonate />
          <span>donate</span>
        </Link>
      </article>

      <Gallery />
    </section>
  );
}
