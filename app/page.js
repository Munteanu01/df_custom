import Hero from './components/Hero'
import Servicii from './components/Servicii'
import About from './components/Despre'
import Why from './components/Why'
import Contact from './components/Contact'
import Pricing from './components/Preturi'


export default function Home() {
  return (
    <main className="min-h-screen max-w-[1500px] mx-auto grid">

      <Hero />
      
      <Servicii />
      <Pricing />
      <About />
      <Why />
      <Contact />
      
    </main>
  )
}

