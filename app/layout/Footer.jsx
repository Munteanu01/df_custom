"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-12"
    >
      <div className="container mx-auto px-6 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">D&F Custom</h3>
            <p className="text-gray-300">Transformăm mașini cu servicii profesionale de detailing.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri rapide</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Servicii</Link></li>
              <li><Link href="/#about" className="text-gray-300 hover:text-white transition-colors">Despre noi</Link></li>
              <li><Link href="/#why-choose-us" className="text-gray-300 hover:text-white transition-colors">De ce să ne alegeți</Link></li>
              <li><Link href="/#preturi" className="text-gray-300 hover:text-white transition-colors">Prețuri</Link></li>
              <li><Link href="/galerie" className="text-gray-300 hover:text-white transition-colors">Galerie</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Informații de contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Strada Detailing 123, București, România</li>
              <li>Telefon: (123) 456-7890</li>
              <li>Email: d&f@contact.ro</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} D&F Custom. Toate drepturile rezervate.</p>
        </div>
      </div>
    </motion.footer>
  )
}
