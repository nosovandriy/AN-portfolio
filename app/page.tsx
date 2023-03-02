import { Raleway } from 'next/font/google'
import  Main from '@main/main';
// import { About } from '@about';
import { Resume } from '@resume/resume';
import { Projects } from '@projects';
import { Skills } from '@skills';

const inter = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={inter.className}>
        <Main />
        <Resume />
        {/* <About /> */}
        <Skills />
        <Projects />
      </div>
    </>
  )
}
