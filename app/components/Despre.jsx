'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Despre() {
  return (
    <section id="about" className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 pb-20 xl:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/POZA TA.jpg"
              alt="Detailing Auto"
              width={1600}
    height={1200}
    className="rounded-lg shadow-lg w-full lg:w-4/5 xl:w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 md:pl-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Despre D&F</h2>
            <div className="lg:text-2xl text-lg">
              <p className='pb-4'>
                Cu peste 10 ani de experiență, Florin Auto oferă servicii de detailing auto de top pentru entuziaștii auto și șoferii de zi cu zi. Pasiunea noastră pentru perfecțiune și atenția la detalii ne diferențiază în industrie.
              </p>
              <p>
                Folosim doar produse de cea mai înaltă calitate și tehnici de ultimă generație pentru a ne asigura că vehiculul dumneavoastră arată impecabil. Echipa noastră de profesioniști calificați este dedicată obținerii unor rezultate excepționale de fiecare dată.
              </p>
            </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  )
}
