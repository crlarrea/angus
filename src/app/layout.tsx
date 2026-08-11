import type { Metadata } from "next";
import "./globals.scss";
import { poppins } from "@/app/fonts/fonts";
export const metadata: Metadata = {
  title: "Angus Cat Rescue",
  description:
    "Angus Cat Rescue helps cats and people in crisis with advice, support, and rehoming. Shop with us and join our fundraising events to make a difference.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
