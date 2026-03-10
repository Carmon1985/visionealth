import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const dropdowns = {
    about: {
        label: 'About',
        items: [
            { to: '/about', label: 'About Us' },
            { to: '/about/thomas-weppelmann', label: 'Dr. Thomas Weppelmann' },
            { to: '/about/thao-ho', label: 'Dr. Thao Ho' },
            { to: '/about/edith-weppelmann', label: 'Dr. Edith Weppelmann' },
            { to: '/about/history', label: 'Our History' },
        ],
    },
    services: {
        label: 'Services',
        items: [
            { to: '/services', label: 'All Services' },
            { to: '/services/diagnostics', label: 'Advanced Diagnostics' },
            { to: '/services/eye-diseases', label: 'Eye Diseases' },
            { to: '/services/optilight', label: 'OptiLight by Lumenis' },
        ],
    },
}

function DropdownMenu({ config, textColor }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className={`nav-link ${textColor} hover:opacity-70 transition-all cursor-pointer bg-transparent border-none flex items-center gap-1`}
            >
                {config.label}
                <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 border border-sand z-50">
                    {config.items.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2.5 text-sm text-charcoal hover:bg-sand/50 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const navBg = scrolled || !isHome
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'

    const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

    const handleScrollLink = (sectionId) => {
        if (isHome) {
            const el = document.getElementById(sectionId)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuOpen(false)
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className={`font-serif font-medium tracking-[0.15em] text-sm sm:text-base uppercase ${textColor} transition-colors duration-300`}>
                        Vision Health Institute
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {isHome ? (
                            <>
                                <DropdownMenu config={dropdowns.about} textColor={textColor} />
                                <DropdownMenu config={dropdowns.services} textColor={textColor} />
                                <Link to="/patients" className={`nav-link ${textColor} hover:opacity-70 transition-all`}>Patients</Link>
                                <Link to="/contact" className={`nav-link ${textColor} hover:opacity-70 transition-all`}>Contact</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/" className={`nav-link ${textColor} hover:opacity-70 transition-all`}>Home</Link>
                                <DropdownMenu config={dropdowns.about} textColor={textColor} />
                                <DropdownMenu config={dropdowns.services} textColor={textColor} />
                                <Link to="/patients" className={`nav-link ${textColor} hover:opacity-70 transition-all`}>Patients</Link>
                                <Link to="/contact" className={`nav-link ${textColor} hover:opacity-70 transition-all`}>Contact</Link>
                            </>
                        )}
                        <Link to="/book" className="btn-primary text-sm">Book Appointment</Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer`}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled || !isHome ? 'bg-charcoal' : 'bg-white'}`} />
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'} ${scrolled || !isHome ? 'bg-charcoal' : 'bg-white'}`} />
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''} ${scrolled || !isHome ? 'bg-charcoal' : 'bg-white'}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/98 backdrop-blur-md px-6 pb-8 pt-4 flex flex-col gap-1 border-t border-sand">
                    <Link to="/" className="nav-link text-charcoal py-2">Home</Link>

                    <p className="caption mt-3 mb-1">About</p>
                    {dropdowns.about.items.map((item) => (
                        <Link key={item.to} to={item.to} className="text-charcoal text-sm py-1.5 pl-3 hover:text-sage transition-colors">
                            {item.label}
                        </Link>
                    ))}

                    <p className="caption mt-3 mb-1">Services</p>
                    {dropdowns.services.items.map((item) => (
                        <Link key={item.to} to={item.to} className="text-charcoal text-sm py-1.5 pl-3 hover:text-sage transition-colors">
                            {item.label}
                        </Link>
                    ))}

                    <Link to="/patients" className="nav-link text-charcoal py-2 mt-2">Patients</Link>
                    <Link to="/contact" className="nav-link text-charcoal py-2">Contact</Link>
                    <Link to="/book" className="btn-primary text-center mt-4">Book Appointment</Link>
                </div>
            </div>
        </nav>
    )
}
