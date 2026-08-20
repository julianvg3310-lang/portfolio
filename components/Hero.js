'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="container text-center fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-8"></div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
          Julián García
        </h1>
        
        <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
          Fotógrafo profesional especializado en
        </p>
        
        <p className="text-2xl font-light text-gray-900 mb-12 max-w-2xl mx-auto">
          Eventos • Automotriz • Sesiones Privadas • Gastronomía
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href="#galeria">
            <button className="btn-primary">
              Ver Galería
            </button>
          </Link>
          <Link href="#contacto">
            <button className="btn-secondary">
              Contacto
            </button>
          </Link>
        </div>
        
        <div className="mt-16 text-gray-500 text-sm">
          <p>Valencia, España</p>
        </div>
      </div>
    </section>
  )
}
