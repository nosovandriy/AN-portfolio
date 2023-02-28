import { Raleway } from 'next/font/google'
import Main from './components/main/main';
import About from './components/about/about';
// import Skills from './components/skills/skills';
import Projects from './components/projects/projects';

const inter = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={inter.className}>
        <Main />
        <About />
        {/* <Skills /> */}
        <Projects />
      </div>
    </>
  )
}
