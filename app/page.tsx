import { Raleway } from 'next/font/google'

import { Main } from '@main/main';
// import { Resume } from '@resume/resume';
import { Projects } from '@projects';
import { Skills } from '@skills';

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={raleway.className}>
      <Main />
      {/* <Resume /> */}
      {/* <About /> */}
      <Skills />
      <Projects />
    </div>
  )
}
