import styles from "@/app/styles/rehome.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

const Rehome = () => {
  const cats = [
    { name: "Sox", image: "/sox.jpeg" },
    { name: "Luna", image: "/luna.jpeg" },
    { name: "Roggie", image: "/roggie.jpeg" },
    { name: "Leo", image: "/leo.jpeg" },
    { name: "Felicia", image: "/felicia.jpeg" },
  ];
  return (
    <section className={styles.rehome}>
      <article className={styles.copy}>
        <h2>
          Cats for <span>rehoming</span>
        </h2>
        <p>
          We always have a variety of cats looking for homes, some require
          access to the outdoors, some are indoor only.
        </p>
        <Link href="https://www.anguscatrescue.co.uk/applytoadoptacat">
          <FaPaperPlane /> Apply
        </Link>
      </article>
      <article className={styles.gallery}>
        {cats.map(({ name, image }) => {
          return (
            <div className={styles.card} key={name}>
              <Image
                src={image}
                fill
                sizes="(max-width:1024px) 220px"
                alt={`Cat for rehoming: ${name}`}
              />
              <p className={styles.catName}>{name}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Rehome;
