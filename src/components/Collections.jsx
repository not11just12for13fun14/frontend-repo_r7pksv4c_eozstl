import React from 'react'
import { Link } from 'react-router-dom'

const collections = [
  {
    title: 'The Heritage',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Mediterranean Escape',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Modern Talismans',
    image: 'https://images.unsplash.com/photo-1750622379075-e220b9dc9a54?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZWRpdGVycmFuJTIwRXNjYXBlfGVufDB8MHx8fDE3NjM3MjQyNTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

function Collections() {
  return (
    <section id="collections" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((col, idx) => (
            <Link key={col.title} to="/product/amante-diamond-ring" className="group relative overflow-hidden rounded-xl">
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-2xl">{col.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
