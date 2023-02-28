import './globals.scss';
import Head from 'next/head';
import NavBar from './components/nav-bar/nav-bar';
import Footer from './components/footer/footer';

export const metadata = {
  title: 'AN | Web-Developer',
  description: 'Andriy Nosov portfolio web-page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="favicon.ico" />
      </Head> */}
      <body>
          <NavBar />
          <main className='mx-3'>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
