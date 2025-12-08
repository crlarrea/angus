import styles from '@/app/styles/donations.module.scss'
import { FaDonate, FaHandHoldingHeart } from "react-icons/fa";
import Link from "next/link";

export default function Donations() {
  return (
    <ul className={styles.donations}>
      <li>
        <Link href='/volunteer-and-sponsor'>
          <FaHandHoldingHeart />
          <span>sponsor</span>
        </Link>
      </li>
      <li>
        <Link href='/donate'>
          <FaDonate />
          <span>donate</span>
        </Link>
      </li>
    </ul>
  );
}
