import { Inter } from 'next/font/google'
import NavBar from './components/nav-bar/nav-bar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  )
}
