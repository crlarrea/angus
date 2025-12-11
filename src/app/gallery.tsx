import styles from "@/app/styles/gallery.module.scss";
import Image from "next/image";
const cats = Array(7).fill(null);

export default function Gallery() {
  return (
    <article className={styles.gallery}>
      {cats.map((_, index) => {
        return (
          <div className={styles.wrapper} key={index}>
            <Image
              src={`/cat_${index + 1}.png`}
              fill
              sizes="(max-width:1024px) 150px"
              alt="cat"
            />
          </div>
        );
      })}
    </article>
  );
}
