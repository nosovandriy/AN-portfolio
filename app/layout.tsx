import "./globals.scss";
import { NavBar } from "@nav-bar/nav-bar";
import { Footer } from "@footer/footer";
import { AnalyticsWrapper } from "./components/analytics";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "AN | Front-End Developer",
  description: "Andriy Nosov portfolio | Front-End Developer",

  openGraph: {
    title: "AN | Front-End Developer",
    description: "Andriy Nosov portfolio | Front-End Developer",
    url: "https://andriynosov.com",
    siteName: "AN | Front-End Developer",
    images: [
      {
        url: "https://serving.photos.photobox.com/82171614081d51b28f81e8d1274941ead3440a789a2607a9ef4f78c2fbd5dbefc99ffb93.jpg",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  creator: "Andriy Nosov",
  publisher: "Andriy Nosov",
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
