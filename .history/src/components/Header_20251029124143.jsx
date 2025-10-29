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
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-gradient-to-r from-blue-800 to-blue-900 py-3'
    }`}>
      
      {/* Top Info Bar - Hidden when scrolled */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0' : 'max-h-12'
      }`}>
        <div className="bg-amber-500 text-blue-900 py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-blue-900" />
                  <span className="font-semibold">+256787937161 / 0740658458</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-900" />
                  <span>Hoima-Kampala Highway, Bukwiri Town</span>
                </div>
              </div>
              <div>
                <span className="italic font-semibold text-blue-900">"VIVO UT SERVIAM"</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isScrolled ? 'bg-blue-800' : 'bg-white'
            }`}>
              <FaGraduationCap className={`text-xl ${
                isScrolled ? 'text-white' : 'text-blue-800'
              }`} />
            </div>
            <div className={`transition-colors duration-300 ${
              isScrolled ? 'text-blue-800' : 'text-white'
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
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.href
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
            <Link
              to="/admissions"
              className="ml-3 px-5 py-2 rounded-lg font-semibold bg-amber-500 text-blue-900 hover:bg-amber-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
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
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                  location.pathname === item.href
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
            <Link
              to="/admissions"
              className="px-4 py-3 rounded-lg font-semibold text-center bg-amber-500 text-blue-900 hover:bg-amber-400 transition-colors duration-300 shadow-md mt-2"
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