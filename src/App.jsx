import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { Testimonials } from './components/sections/Testimonials'
import { Pricing } from './components/sections/Pricing'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen font-space bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
