import Image from "next/image";
import styles from "@/app/styles/nav.module.scss";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
const Nav = () => {
  const links = [
    { title: "shop", link: "https://www.anguscatrescue.co.uk/shop" },
    { title: "diary", link: "https://www.anguscatrescue.co.uk/diary" },
    {
      title: "volunteering",
      link: "https://www.anguscatrescue.co.uk/volunteers",
    },
  ];
  return (
    <nav className={styles.nav}>
      <Link href="https://www.anguscatrescue.co.uk" className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Angus Cat Rescue logo."
          fill
          sizes="(max-width:1024px) 50px"
        />
      </Link>
      <ul className={styles.links}>
        {links.map(({ title, link }) => {
          return (
            <li key={title}>
              <Link href={link}>{title}</Link>
            </li>
          );
        })}

        <li>
          <Link href="https://www.anguscatrescue.co.uk/plans-pricing/payment">
            <FaDonate />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
