import { Raleway } from 'next/font/google'
import NavBar from './components/nav-bar/nav-bar';
import Main from './components/main/main';
import About from './components/about/about';
import Skills from './components/skills/skills';

const inter = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={inter.className}>
        {/* <NavBar /> */}
        {/* <Main /> */}
        {/* <About /> */}
        {/* <Skills /> */}
      </div>
    </>
  )
}
