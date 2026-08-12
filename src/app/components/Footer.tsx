import styles from "@/app/styles/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article className={styles.contact}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            fill
            sizes="(max-width:1024px) 50px"
            alt="Angus Cat Rescue logo."
          />
        </div>
        <div>
          <p>
            Angus Cat Rescue
            <br />
            License No: AR2 <br />
            License Authority: Angus Council
          </p>
        </div>
        <div>
          <p>
            Get in touch with Angus to learn more about our work and find out
            how to donate.
          </p>
          <p>We appreciate your support!</p>
          <ul>
            <li>
              <Link href="mailto:info@anguscatrescue.co.uk">
                info@anguscatrescue.co.uk
              </Link>
            </li>
            <li>
              <Link href="tel:+447982064765">07982064765</Link>
            </li>
          </ul>
        </div>
      </article>
      <article className={styles.copyright}>
        Angus Cat Rescue, Scotland, UK. &copy; {new Date().getFullYear()}
      </article>
      <article className={styles.socials}>
        <ul>
          <li>
            <Link
              href="https://www.tiktok.com/@angus.cat.rescue"
              target="_blank"
            >
              <FaTiktok />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/anguscatrescue"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/AngusCatRescue/"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </li>
        </ul>
      </article>
    </footer>
  );
};

export default Footer;
