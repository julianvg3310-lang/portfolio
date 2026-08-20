'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-light mb-4">Julián García</h3>
            <p className="text-gray-400">Fotógrafo profesional en Valencia</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Categorías</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Eventos</li>
              <li>Automotriz</li>
              <li>Sesiones Privadas</li>
              <li>Gastronomía</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400 text-sm mb-2">julianvargasgarcia1996@gmail.com</p>
            <p className="text-gray-400 text-sm">698 943 420</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Julián García. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
