import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" aria-label="Hero">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Warm gradient overlay to blend with brand palette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-[#F9F8F6]/40 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-24 sm:py-28">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#333333] leading-tight">
            Elevate Your Everyday.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#333333]/80 max-w-xl">
            Timeless craftsmanship for the modern muse.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#CBAA5C] text-[#333333] hover:bg-[#CBAA5C] hover:text-white transition-colors">
              Discover Collection
            </a>
            <a href="#story" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[#333333] hover:text-[#CBAA5C] transition-colors">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
