import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa6";
import Link from "next/link";

export default function Socials() {
  return (
    <ul>
      <li>
        <Link href="https://www.tiktok.com/@angus.cat.rescue" target="_blank">
          <FaTiktok />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/anguscatrescue" target="_blank">
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/AngusCatRescue/" target="_blank">
          <FaFacebookF />
        </Link>
      </li>
    </ul>
  );
}
