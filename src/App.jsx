import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import VillaLivingPage from './pages/VillaLivingPage'
import LocationGrowthPage from './pages/LocationGrowthPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa-living" element={<VillaLivingPage />} />
        <Route path="/location-growth" element={<LocationGrowthPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  )
}
