import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="https://blog.krezzo.com/hs-fs/hubfs/Krezzo-Logo-2023-Light.png?width=648&height=160&name=Krezzo-Logo-2023-Light.png" 
                alt="Krezzo logo" 
                className="h-8 w-auto sm:h-10"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition duration-150">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition duration-150">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition duration-150">
              Pricing
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#features" className="block rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600">
              Features
            </a>
            <a href="#testimonials" className="block rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600">
              Testimonials
            </a>
            <a href="#pricing" className="block rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600">
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block w-full rounded-md bg-primary-600 px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
} 