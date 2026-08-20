import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Julián García - Fotografía',
  description: 'Portafolio de fotografía: Eventos, Automotriz, Sesiones Privadas, Gastronomía',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
