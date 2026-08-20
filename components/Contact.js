'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 text-center">
            <div>
              <p className="text-gray-600 mb-2">Email</p>
              <a href="mailto:julianvargasgarcia1996@gmail.com" className="text-gray-900 hover:underline text-lg">
                julianvargasgarcia1996@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-gray-600 mb-2">Teléfono</p>
              <a href="tel:698943420" className="text-gray-900 hover:underline text-lg">
                698 943 420
              </a>
            </div>
            
            <div>
              <p className="text-gray-600 mb-4">Ubicación</p>
              <p className="text-gray-900 text-lg">Valencia, España</p>
            </div>
            
            <div className="pt-8">
              <a href="https://wa.me/34698943420" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Enviar WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
