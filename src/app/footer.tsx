import styles from "@/app/styles/footer.module.scss";
import Logo from "./logo";
import Socials from "./socials";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article className={styles.contact}>
        ​
        <p>
          Get in touch with Angus to learn more about our work and find out how
          to donate.
        </p>
        <p>We appreciate your support!</p>
        <Link href="mailto:info@anguscatrescue.co.uk">
          info@anguscatrescue.co.uk
        </Link>
        <Link href="tel:+447982064765">07982064765</Link>
      </article>
      <article></article>
      <article className={styles.socials}>
        <Logo
          props={{
            imgColour: "white",
            textColour: "white",
            imgWidth: "50px",
            textSize: "1rem",
          }}
        />
        <Socials />
        <p>
          Angus Cat Rescue Angela Smith <br />
          License No: AR2 <br />
          License Authority: Angus Council
        </p>
      </article>
    </footer>
  );
}
