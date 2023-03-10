
import { Main } from '@main/main';
// import { Resume } from '@resume/resume';
import { Projects } from '@projects';
import { Skills } from '@skills';
import { About } from '@about';


export default function Home() {
  return (
    <div>
      <Main />
      {/* <Resume /> */}
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
