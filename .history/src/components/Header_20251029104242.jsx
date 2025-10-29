import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' 
        : 'bg-linear-to-r from-primary-blue to-primary-light py-4'
    }`}>
      {/* Top bar */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0' : 'max-h-20'
      }`}>
        <div className="bg-primary-gold text-primary-blue py-2">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-primary-blue" />
                <span className="font-semibold">+256787937161 / 0740658458</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-primary-blue" />
                <span>Hoima-Kampala Highway, Bukwiri Town</span>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="italic font-semibold">"VIVO UT SERVIAM"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isScrolled ? 'bg-primary-blue' : 'bg-white'
            }`}>
              <FaGraduationCap className={`text-2xl ${
                isScrolled ? 'text-white' : 'text-primary-blue'
              }`} />
            </div>
            <div className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary-blue' : 'text-white'
            }`}>
              <h1 className="text-2xl font-bold leading-tight">ST LOUIS THE KING</h1>
              <p className="text-sm font-semibold opacity-90">HIGH SCHOOL KAMPALA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.href
                    ? isScrolled
                      ? 'bg-primary-blue text-white shadow-lg'
                      : 'bg-white text-primary-blue shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-blue hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className={`ml-4 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary-gold text-primary-blue hover:bg-secondary-light shadow-lg'
                  : 'bg-primary-gold text-primary-blue hover:bg-secondary-light shadow-lg'
              }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-colors duration-300 ${
              isScrolled 
                ? 'text-primary-blue hover:bg-blue-50' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-4 rounded-xl font-semibold text-center transition-all duration-300 ${
                  location.pathname === item.href
                    ? isScrolled
                      ? 'bg-primary-blue text-white shadow-lg'
                      : 'bg-white text-primary-blue shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-blue hover:bg-blue-50'
                    : 'text-white hover:text-white hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="px-4 py-4 rounded-xl font-bold text-center bg-primary-gold text-primary-blue hover:bg-secondary-light transition-colors duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header