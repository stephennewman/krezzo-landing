import React from 'react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          {/* Centered Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="https://blog.krezzo.com/hs-fs/hubfs/Krezzo-Logo-2023-Light.png?width=648&height=160&name=Krezzo-Logo-2023-Light.png" 
              alt="Krezzo logo" 
              className="h-8 w-auto sm:h-10"
            />
          </a>
        </div>
      </div>
    </header>
  )
} 