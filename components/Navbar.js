'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex justify-between items-center py-6">
        <Link href="/" className="text-2xl font-light text-gray-900">
          Julián García
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="#galeria" className="text-gray-600 hover:text-gray-900 transition">
            Galería
          </Link>
          <Link href="#contacto" className="text-gray-600 hover:text-gray-900 transition">
            Contacto
          </Link>
        </div>

        <button 
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 py-4">
          <Link href="#galeria" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
            Galería
          </Link>
          <Link href="#contacto" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  )
}
