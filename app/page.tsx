import { Raleway } from 'next/font/google'
import Head from 'next/head';
import { Main } from '@main/main';
import { Resume } from '@resume/resume';
import { Projects } from '@projects';
import { Skills } from '@skills';

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={raleway.className}>
      <Head>
        <meta charSet="utf-8" />
        <title>AN | Web-Developer</title>
        <meta name="description" content="Andriy Nosov portfolio" />

        <meta property="og:url" content="https://andriynosov.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AN | Web-Developer" />
        <meta property="og:description" content="Andriy Nosov portfolio" />
        <meta property="og:image" content="https://serving.photos.photobox.com/82171614081d51b28f81e8d1274941ead3440a789a2607a9ef4f78c2fbd5dbefc99ffb93.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="andriynosov.com" />
        <meta property="twitter:url" content="https://andriynosov.com" />
        <meta name="twitter:title" content="AN | Web-Developer" />
        <meta name="twitter:description" content="Andriy Nosov portfolio" />
        <meta name="twitter:image" content="" />
      </Head>
      <Main />
      <Resume />
      {/* <About /> */}
      <Skills />
      <Projects />
    </div>
  )
}
