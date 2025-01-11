'use client'

import { motion } from 'framer-motion'
import { Award, Clock, ThumbsUp, DollarSign } from 'lucide-react'

const reasons = [
  { 
    title: 'Experiență', 
    description: 'Echipa noastră are ani de experiență și formare continuă', 
    icon: Award 
  },
  { 
    title: 'Atenție la Detalii', 
    description: 'Suntem mândri de munca noastră pe fiecare vehicul', 
    icon: ThumbsUp 
  },
  { 
    title: 'Serviciu Rapid', 
    description: 'Eficiență fără a compromite calitatea', 
    icon: Clock 
  },
  { 
    title: 'Prețuri Competitive', 
    description: 'Servicii de înaltă calitate la tarife rezonabile', 
    icon: DollarSign 
  },
]

export default function WhyChooseUs8() {
  return (
    <section id="why-choose-us" className="py-20 ">
      <div className="container mx-auto px-6 xl:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">De ce să alegeți D&F</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-2xl p-6 flex items-center space-x-4 xl:flex-col xl:items-center xl:text-center" 
            >
              <reason.icon className="w-14 h-14 text-accent flex-shrink-0 mb-4 xl:mb-2" /> 
              <div className="flex flex-col justify-center">
                <h3 className="text-xl xl:text-2xl font-semibold mb-2 text-black">{reason.title}</h3>
                <p className="text-gray-600 xl:text-lg">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
