import React from 'react'
import { Sparkles, Gift, Heart, Diamond } from 'lucide-react'
import { Link } from 'react-router-dom'

const edits = [
  {
    title: 'Everyday Essentials',
    subtitle: 'Light-as-air layers for work to weekend',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    icon: <Sparkles className="w-4 h-4"/>,
    to: '/product/amante-diamond-ring',
  },
  {
    title: 'Bridal Edit',
    subtitle: 'Understated pieces for showers & forever',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    icon: <Diamond className="w-4 h-4"/>,
    to: '/product/amante-diamond-ring',
  },
  {
    title: 'Personalized',
    subtitle: 'Initials, birthstones, and meaning',
    image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop',
    icon: <Heart className="w-4 h-4"/>,
    to: '/product/amante-diamond-ring',
  },
  {
    title: 'Gifts Under $250',
    subtitle: 'Thoughtful luxuries she’ll wear daily',
    image: 'https://images.unsplash.com/photo-1674620213535-9b2a2553ef40?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHaWZ0cyUyMFVuZGVyJTIwJTI0MjUwfGVufDB8MHx8fDE3NjM3MjU0MzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    icon: <Gift className="w-4 h-4"/>,
    to: '/product/amante-diamond-ring',
  },
]

function ForHer() {
  return (
    <section aria-label="For Her" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs tracking-widest text-[#333333]/60">FOR HER</p>
          <h2 className="font-serif text-3xl sm:text-4xl mt-2">Curated for the Modern Woman</h2>
          <p className="text-[#333333]/80 max-w-2xl mx-auto mt-3">Soft silhouettes, skin-flattering tones, and effortless pieces that move with her day.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {edits.map((item) => (
            <Link key={item.title} to={item.to} className="group block">
              <div className="relative overflow-hidden rounded-xl">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs tracking-wide uppercase opacity-90">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-1 text-sm opacity-90">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForHer
