import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() =>{
    window.sc

  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'School Life', href: '/school-life' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full  z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
        : 'bg-linear-to-r from-blue-800 to-blue-900 py-3'
      }`}>

      {/* Top Info Bar - Hidden when scrolled */}
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-12'
        }`}>
        {/* Vous pouvez ajouter des informations de contact ici si nécessaire */}
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center p-4">
          {/* Logo avec l'image */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Logo Image */}
            <div className="shrink-0">
              <img
                src="/kinglogo.jpg"
                alt="St Louis The King High School Logo"
                className="w-20 h-20 rounded-full object-contain bg-transparent"
              />
            </div>
            {/* Logo Text */}
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-blue-800' : 'text-white'
              }`}>
              <h1 className="text-xl font-bold leading-tight">ST LOUIS THE KING</h1>
              <p className="text-xs font-semibold opacity-90">HIGH SCHOOL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${location.pathname === item.href
                    ? isScrolled
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-white text-blue-800 shadow-md'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled
                ? 'text-blue-800 hover:bg-blue-50'
                : 'text-white hover:bg-white/20'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}>
          <div className="flex flex-col space-y-2 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 ${location.pathname === item.href
                    ? isScrolled
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-white text-blue-800 shadow-md'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                      : 'text-white hover:text-white hover:bg-white/20'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header