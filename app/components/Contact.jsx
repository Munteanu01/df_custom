'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="pb-40 pt-20 ">
      <div className="container mx-auto px-6 xl:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contactați-ne</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-6 md:flex md:justify-between items-center grid justify-center gap-5 h-20">
            <div className="flex items-center md:pt-6">
              <Phone className="w-6 h-6 text-accent mr-4" />
              <span className="text-xl">(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-accent mr-4" />
              <span className="text-xl">contact@d&fcustom.com</span>
            </div>
            <div className="flex items-center">
              <Instagram className="w-6 h-6 text-accent mr-4" />
              <span className="text-xl">@d&fcustom</span>
            </div>
          </div>
          
          
        </motion.div>
      </div>
    </section>
  )
}
