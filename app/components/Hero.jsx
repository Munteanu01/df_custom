'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r  min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transformă-ți mașina cu detailing profesionist</h1>
          <p className="text-xl md:text-2xl mb-8">Experiența supremă în îngrijirea automobilului</p>
           <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-accent font-bold py-3 px-8 rounded-full text-lg hover:bg-accent2 hover:text-white transition duration-300"
            >
            Programează-te acum
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
