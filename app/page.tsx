import { Raleway } from 'next/font/google'
import NavBar from './components/nav-bar/nav-bar';
import Main from './components/main/main';

const inter = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={inter.className}>
        <NavBar />
        <Main />
      </div>
    </>
  )
}
