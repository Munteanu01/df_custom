'use client'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic Wash',
    price: 49,
    features: ['Exterior Wash', 'Tire Cleaning', 'Window Cleaning', 'Interior Vacuum'],
  },
  {
    name: 'Deluxe Detail',
    price: 129,
    features: ['Basic Wash Features', 'Interior Deep Clean', 'Leather Conditioning', 'Wax Application'],
  },
  {
    name: 'Premium Package',
    price: 249,
    features: ['Deluxe Detail Features', 'Paint Correction', 'Ceramic Coating', 'Engine Bay Cleaning'],
  },
  {
    name: 'Premium Package',
    price: 249,
    features: ['Deluxe Detail Features', 'Paint Correction', 'Ceramic Coating', 'Engine Bay Cleaning'],
  },
]

export default function Pricing() {
  return (
    <section id="preturi" className="py-20">
      <div className="container mx-auto px-6 xl:px-12  text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Prețurile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price} RON</p>
                <ul className="mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

