import Link from "next/link";
import styles from "@/app/styles/nav.module.scss";
import { PiPawPrintDuotone } from "react-icons/pi";

export default function Nav() {
  const toSlug = (link: string) => {
    return link.replaceAll(" ", "-");
  };
  const navigation = [
    // "diary",
    "cats for rehoming",
    // "fundraising",
    // "volunteering and sponsoring",
    // "fostering",
    "cat welfare",
    "happy ever afters",
    // "plans and pricing",
  ];
  return (
    <nav className={styles.nav}>
      <ul>
        {navigation.map((el) => (
          <li key={toSlug(el)}>
            <Link href="#">{el}</Link>
          </li>
        ))}
        
      </ul>
    </nav>
  );
}
