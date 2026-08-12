import styles from "@/app/styles/bikes.module.scss";
import Image from "next/image";
import Link from "next/link";
import { LuBike } from "react-icons/lu";

const Bikes = () => {
  return (
    <section className={styles.bikes}>
      <article className={styles.copy}>
        <h2>
          <span>Bikes</span> for cats
        </h2>
        <p>
          <span>Be a cool cat.</span><br/> Enjoy the sunshine, and ride for a great cause. Every
          donation helps support our charity and the work we do.
        </p>

        <Link href={"tel:0151"}>
          <LuBike />
          I'm in!
        </Link>
        <div className={styles.imageWrapper}>
          <Image
            src="/cat_with_hat.png"
            fill
            alt="Decorative image. Bikes for cats."
          />
        </div>
      </article>
    </section>
  );
};

export default Bikes;
