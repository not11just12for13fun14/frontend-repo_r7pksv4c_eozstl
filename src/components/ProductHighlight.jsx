import React from 'react'

function ProductHighlight() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1612036782180-153b82f3dc37?q=80&w=1600&auto=format&fit=crop"
            alt="Amante Diamond Ring"
            className="w-full h-[480px] object-cover rounded-xl shadow-sm"
          />
        </div>
        <div>
          <p className="text-sm tracking-widest text-[#333333]/60 mb-3">PRODUCT HIGHLIGHT</p>
          <h3 className="font-serif text-3xl text-[#333333] mb-4">Amante Diamond Ring</h3>
          <p className="text-[#333333]/80 mb-4">18K Gold Vermeil • Conflict-free diamonds • Hypoallergenic</p>
          <p className="text-[#333333]/80 mb-8">A quietly luxurious statement crafted for everyday elegance. Designed for lasting shine with a comfortable, low-profile fit.</p>
          <div className="flex items-center gap-6">
            <span className="font-semibold text-[#333333] text-xl">$420</span>
            <button className="px-6 py-3 rounded-full bg-[#CBAA5C] text-white hover:opacity-90 transition-opacity">Add to Bag</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductHighlight
