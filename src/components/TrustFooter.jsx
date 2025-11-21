import React from 'react'

function TrustFooter() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1609342620898-e7f50ed7ee2b?q=80&w=1600&auto=format&fit=crop"
              alt="Beautiful Packaging"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
          <div>
            <h4 className="font-serif text-2xl text-[#333333] mb-3">Beautiful Packaging</h4>
            <p className="text-[#333333]/80">Each piece arrives in our signature cream box with gold accents, ready to gift and designed for safekeeping.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 py-10 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#333333]/80">
          <p className="tracking-[0.2em] text-[#333333]">LEVITZ</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-[#CBAA5C] transition-colors">Jewelry Care</a>
            <a href="#" className="hover:text-[#CBAA5C] transition-colors">Shipping</a>
          </nav>
          <p className="text-[#333333]/60">© {new Date().getFullYear()} LEVITZ. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default TrustFooter
