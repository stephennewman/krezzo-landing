import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { CTASection } from './components/sections/CTASection'
import { Footer } from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen font-space bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
