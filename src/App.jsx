import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Collections from './components/Collections'
import ProductHighlight from './components/ProductHighlight'
import TrustFooter from './components/TrustFooter'

function App() {
  return (
    <div className="bg-[#F9F8F6] text-[#333333] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Collections />
        <ProductHighlight />
        <TrustFooter />
      </main>
    </div>
  )
}

export default App
