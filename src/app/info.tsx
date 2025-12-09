import styles from "@/app/styles/info.module.scss";
import Gallery from "./gallery";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Info() {
  return (
    <section className={styles.info}>
      <article className={styles.copy}>
        <h2>
          Ever thought about re-homing an older cat, but worry about vets
          bills?
        </h2>
        <p>
          Ask about becoming a Permanent Foster, we will pay the vets bills for
          the right person!
        </p>
        <Link href="#">
          <FaArrowCircleRight />
          find out more
        </Link>
      </article>
      <Gallery />
    </section>
  );
}
