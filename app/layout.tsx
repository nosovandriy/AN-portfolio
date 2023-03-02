import './globals.scss';
import { NavBar } from '@nav-bar/nav-bar';
import { Footer } from '@footer/footer';

export const metadata = {
  title: 'AN | Web-Developer',
  description: 'Andriy Nosov portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className='mx-3'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
