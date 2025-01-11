'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu as MenuIcon } from 'lucide-react' // Importing the Menu icon

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-4 px-6 fixed w-full z-50 bg-black"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="w-36 sm:ml-3 md:ml-4 lg:ml-10"><img src="/logo.png" alt="" /></Link>
          <nav className="hidden lg:flex space-x-6 text-lg xl:text-xl xl:pr-12 font-semibold">
            <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Servicii</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">Despre noi</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-accent transition-colors">De ce să ne alegeți</button>
            <button onClick={() => scrollToSection('preturi')} className="hover:text-accent transition-colors">Prețuri</button>
            <Link href="/galerie" className="hover:text-accent transition-colors">Galerie</Link>
            <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Contact</button>
            
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <MenuIcon className="w-6 h-6" /> {/* Using Lucide Menu icon */}
          </button>
        </div>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-6 space-y-2 sm:px-6 font-semibold"
          >
            <button onClick={() => scrollToSection('services')} className="block py-2 px-4 hover:bg-accent rounded transition-colors w-full text-left">Servicii</button>
            <button onClick={() => scrollToSection('about')} className="block py-2 px-4 hover:bg-accent rounded transition-colors w-full text-left">Despre noi</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="block py-2 px-4 hover:bg-accent rounded transition-colors w-full text-left">De ce să ne alegeți</button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 px-4 hover:bg-accent rounded transition-colors w-full text-left">Contact</button>
            <Link href="/galerie" className="block py-2 px-4 hover:bg-accent rounded transition-colors">Galerie</Link>
          </motion.nav>
        )}
      </motion.header>
    )
}
