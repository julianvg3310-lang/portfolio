'use client'

import { useState } from 'react'
import GalleryTab from './GalleryTab'

const categories = [
  { id: 'eventos', name: 'Eventos' },
  { id: 'automotriz', name: 'Automotriz' },
  { id: 'sesiones', name: 'Sesiones Privadas' },
  { id: 'gastronomia', name: 'Gastronomía' },
]

const photos = {
  eventos: [
    { id: 1, title: 'Evento 1', placeholder: true },
    { id: 2, title: 'Evento 2', placeholder: true },
    { id: 3, title: 'Evento 3', placeholder: true },
  ],
  automotriz: [
    { id: 1, title: 'Auto 1', placeholder: true },
    { id: 2, title: 'Auto 2', placeholder: true },
    { id: 3, title: 'Auto 3', placeholder: true },
  ],
  sesiones: [
    { id: 1, title: 'Sesión 1', placeholder: true },
    { id: 2, title: 'Sesión 2', placeholder: true },
    { id: 3, title: 'Sesión 3', placeholder: true },
  ],
  gastronomia: [
    { id: 1, title: 'Comida 1', placeholder: true },
    { id: 2, title: 'Comida 2', placeholder: true },
    { id: 3, title: 'Comida 3', placeholder: true },
  ],
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('eventos')

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Galería</h2>
        
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 rounded transition-all ${
                activeTab === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-300 text-gray-900 hover:border-gray-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <GalleryTab photos={photos[activeTab]} />
      </div>
    </section>
  )
}
