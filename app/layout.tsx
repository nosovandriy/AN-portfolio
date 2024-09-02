import { Raleway } from "next/font/google";

import { NavBar } from "@nav-bar/nav-bar";
import { Footer } from "@footer/footer";
import { AnalyticsWrapper } from "./components/analytics";
import "./globals.scss";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Andriy Nosov | WEB Developer",
  description: "Andriy Nosov WEB Developer portfolio",

  openGraph: {
    title: "AN | WEB Developer",
    description: "Andriy Nosov | WEB Developer",
    url: "https://andriynosov.com",
    siteName: "AN | WEB Developer",
    images: [
      {
        url: "https://serving.photos.photobox.com/82171614081d51b28f81e8d1274941ead3440a789a2607a9ef4f78c2fbd5dbefc99ffb93.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NavBar />
        <main className="mx-3">{children}</main>
        <AnalyticsWrapper />
        <Footer />
      </body>
    </html>
  );
}
