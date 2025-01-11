'use client'
import { motion } from 'framer-motion'
import { Car, SprayCanIcon as Spray, PaintBucket, Shield } from 'lucide-react'

const services = [
  { 
    title: 'Detailing Exterior', 
    description: 'Curățare și protecție completă a exteriorului mașinii tale', 
    icon: Car,
    features: [
      'Spălare cu două găleți',
      'Decontaminare cu argilă',
      'Polishare și ceruire',
      'Protecție ceramică'
    ]
  },
  { 
    title: 'Detailing Interior', 
    description: 'Curățare profundă și igienizare a interiorului mașinii', 
    icon: Spray,
    features: [
      'Aspirare completă',
      'Curățare tapițerie',
      'Dezinfectare cu abur',
      'Tratament piele'
    ]
  },
  { 
    title: 'Corectare Vopsea', 
    description: 'Eliminarea zgârieturilor și a urmelor de vârtejuri pentru un finisaj impecabil', 
    icon: PaintBucket,
    features: [
      'Polishare în mai multe etape',
      'Eliminare swirl-uri',
      'Corectare defecte minore',
      'Finisaj oglindă'
    ]
  },
  { 
    title: 'Acoperire Ceramică', 
    description: 'Protecție de lungă durată pentru vopseaua mașinii tale', 
    icon: Shield,
    features: [
      'Aplicare strat ceramic',
      'Protecție UV',
      'Rezistență la chimicale',
      'Efect hidrofob'
    ]
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 xl:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Serviciile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 border-accent2 bg-white text-black  rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 flex items-start"
            >
              <service.icon className="w-12 h-12 text-accent mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className=" font-semibold lg:text-lg">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm lg:text-base">
                      <svg className="w-5 h-5 mr-2 mb-[1px] text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
