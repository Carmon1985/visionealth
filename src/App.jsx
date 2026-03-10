import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import BookPage from './pages/BookPage'
import DoctorProfilePage from './pages/DoctorProfilePage'
import HistoryPage from './pages/HistoryPage'
import DiagnosticsPage from './pages/DiagnosticsPage'
import EyeDiseasesPage from './pages/EyeDiseasesPage'
import OptiLightPage from './pages/OptiLightPage'
import ContactPage from './pages/ContactPage'
import PatientsPage from './pages/PatientsPage'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/about/history" element={<HistoryPage />} />
                    <Route path="/about/:slug" element={<DoctorProfilePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/diagnostics" element={<DiagnosticsPage />} />
                    <Route path="/services/eye-diseases" element={<EyeDiseasesPage />} />
                    <Route path="/services/optilight" element={<OptiLightPage />} />
                    <Route path="/services/:slug" element={<ServiceDetailPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/patients" element={<PatientsPage />} />
                    <Route path="/book" element={<BookPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
