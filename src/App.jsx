import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar         from './components/Navbar'
import Footer         from './components/Footer'
import ScrollToTop    from './components/ScrollToTop'
import HomePage       from './pages/HomePage'
import AboutPage      from './pages/AboutPage'
import ServicesPage   from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import ContactPage    from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-canvas min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/about"      element={<AboutPage />} />
          <Route path="/services"   element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact"    element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
