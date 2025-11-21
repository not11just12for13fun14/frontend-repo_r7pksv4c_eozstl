import React from 'react'
import { Search, User, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#F9F8F6]/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif tracking-[0.2em] text-lg sm:text-xl text-[#333333]">
          LEVITZ
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#333333]/80">
          <Link to="/product/amante-diamond-ring" className="hover:text-[#333333] transition-colors">Shop</Link>
          <a href="#collections" className="hover:text-[#333333] transition-colors">Collections</a>
          <a href="#story" className="hover:text-[#333333] transition-colors">Our Story</a>
          <a href="#journal" className="hover:text-[#333333] transition-colors">Journal</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 text-[#333333]">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Account" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
