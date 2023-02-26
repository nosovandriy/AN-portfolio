import './globals.css'
// import Head from 'next/head'

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
      <body>{children}</body>
    </html>
  )
}
