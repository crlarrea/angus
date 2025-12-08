import type { Metadata } from "next";
import "@/app/styles/globals.scss";
import { lexend } from "./fonts/fonts";
import Logo from "./logo";
import Nav from "./nav";
import Donations from "./donations";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Angus Cat Rescua",
  description: "Cat shelter and rehoming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <header>
          <Logo
            props={{
              imgColour: "#6e44ffff",
              textColour: "black",
              imgWidth: "100px",
              textSize: "2rem",
            }}
          />
          <Nav />
          <Donations />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
