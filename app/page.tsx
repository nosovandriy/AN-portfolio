
import { Main } from '@main/main';
import { Projects } from '@projects';
import { Skills } from '@skills';
import { About } from '@about';


export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
