import React, { useState } from 'react'
import { Check, Truck, Shield, Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const images = [
  'https://images.unsplash.com/photo-1612036782180-153b82f3dc37?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612214070475-1a6c1d6c1892?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612423284934-285fa2ab3c53?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1609113805945-0d5f7955daeb?q=80&w=1600&auto=format&fit=crop',
]

const sizes = ['4', '5', '6', '7', '8', '9']
const metals = ['18K Gold Vermeil', 'Sterling Silver']

function Product() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [size, setSize] = useState('7')
  const [metal, setMetal] = useState(metals[0])
  const [qty, setQty] = useState(1)

  const nextImg = () => setActiveIndex((i) => (i + 1) % images.length)
  const prevImg = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)

  return (
    <div className="bg-[#F9F8F6] text-[#333333] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-[#333333]/70 mb-6">
          <Link to="/" className="hover:text-[#CBAA5C]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-[#CBAA5C]">Rings</Link>
          <span className="mx-2">/</span>
          <span className="text-[#333333]">Amante Diamond Ring</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Gallery */}
          <div className="sticky top-20">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={images[activeIndex]}
                alt={`Amante Diamond Ring ${activeIndex + 1}`}
                className="w-full aspect-[4/5] object-cover"
              />
              <button aria-label="Previous image" onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition"><ChevronLeft className="w-5 h-5"/></button>
              <button aria-label="Next image" onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition"><ChevronRight className="w-5 h-5"/></button>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.map((src, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} className={`overflow-hidden rounded-lg border ${i===activeIndex ? 'border-[#CBAA5C]' : 'border-black/10'} focus:outline-none focus:ring-2 focus:ring-[#CBAA5C]`}>
                  <img src={src} alt={`Thumbnail ${i+1}`} className="w-full aspect-square object-cover"/>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl">Amante Diamond Ring</h1>
            <p className="mt-2 text-[#333333]/80">Designed for her modern rituals—delicate, feminine, and quietly captivating. A low-profile diamond cluster set in hand-polished vermeil that invites daily wear.</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center text-[#CBAA5C]">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-[#CBAA5C] text-[#CBAA5C]"/>))}
              </div>
              <span className="text-sm text-[#333333]/70">124 reviews</span>
            </div>

            <div className="mt-6 p-4 bg-white/70 rounded-xl border border-black/10">
              <p className="text-xl font-semibold">$420</p>
              <p className="text-sm text-[#333333]/70 mt-1">or 4 payments of $105 with Klarna</p>

              <div className="mt-4">
                <label className="block text-sm mb-2">Metal</label>
                <div className="flex flex-wrap gap-2">
                  {metals.map((m) => (
                    <button key={m} onClick={() => setMetal(m)} className={`px-3 py-2 rounded-full border text-sm ${m===metal ? 'border-[#CBAA5C] bg-[#CBAA5C]/10' : 'border-black/10 hover:border-[#CBAA5C]'}`}>{m}</button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm">Ring Size</label>
                  <button className="text-sm underline hover:text-[#CBAA5C]">Size Guide</button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {sizes.map((s) => (
                    <button key={s} onClick={() => setSize(s)} className={`py-2 rounded-md border text-sm ${s===size ? 'border-[#CBAA5C] bg-[#CBAA5C]/10' : 'border-black/10 hover:border-[#CBAA5C]'}`}>{s}</button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center border border-black/10 rounded-full overflow-hidden">
                  <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty-1))} className="px-3 py-2 hover:bg-black/5">-</button>
                  <span className="px-4 py-2 text-sm">{qty}</span>
                  <button aria-label="Increase quantity" onClick={() => setQty(qty+1)} className="px-3 py-2 hover:bg-black/5">+</button>
                </div>
                <button className="flex-1 px-6 py-3 rounded-full bg-[#CBAA5C] text-white hover:opacity-90 transition">Add to Bag</button>
                <button aria-label="Add to Wishlist" className="p-3 rounded-full border border-black/10 hover:border-[#CBAA5C]"><Heart className="w-5 h-5"/></button>
              </div>

              <div className="mt-4 flex items-center gap-6 text-sm text-[#333333]/80">
                <span className="flex items-center gap-2"><Truck className="w-4 h-4"/> Free express shipping</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4"/> 2-year warranty</span>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-white/60 border border-black/10">
                <p className="font-semibold">Why Women Love It</p>
                <p className="text-sm text-[#333333]/80 mt-1">Lightweight comfort, snag-free silhouette, and a soft glow that flatters every skin tone.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/60 border border-black/10">
                <p className="font-semibold">Materials</p>
                <p className="text-sm text-[#333333]/80 mt-1">18K Gold Vermeil over recycled sterling silver. Conflict-free diamonds. Nickel-safe & hypoallergenic.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/60 border border-black/10">
                <p className="font-semibold">Care</p>
                <p className="text-sm text-[#333333]/80 mt-1">Store in the included pouch. Avoid harsh chemicals. Wipe with a soft cloth to maintain luster.</p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-2xl">Reviews</h2>
              <div className="mt-4 space-y-4">
                {[1,2,3].map((i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/60 border border-black/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex text-[#CBAA5C]">{[...Array(5)].map((_, j) => (<Star key={j} className="w-4 h-4 fill-[#CBAA5C] text-[#CBAA5C]"/>))}</div>
                        <span className="text-[#333333]/70">Verified Buyer</span>
                      </div>
                      <span className="text-xs text-[#333333]/60">2 weeks ago</span>
                    </div>
                    <p className="mt-2 text-sm text-[#333333]">Beautifully feminine and elegant. Comfortable enough for long workdays and transitions perfectly for evening.</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-sm underline hover:text-[#CBAA5C]">Read all reviews</button>
            </div>

            <div className="mt-12 p-5 rounded-xl bg-white/70 border border-black/10">
              <h3 className="font-serif text-xl">What’s Included</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#333333]/90">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5"/> Signature cream gift box and velvet pouch</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5"/> Complimentary handwritten gift note</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5"/> Free 30-day returns and exchanges</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-2xl mb-6">You May Also Love</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Link key={i} to="/product/amante-diamond-ring" className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img src={images[i%images.length]} alt="Recommended" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"/>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-medium">Sera Stacking Ring</p>
                  <p className="text-sm text-[#333333]/70">$180</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product
