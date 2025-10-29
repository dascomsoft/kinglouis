import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope,
  FaGraduationCap,
  FaArrowRight
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'School Life', path: '/school-life' },
    { name: 'Contact', path: '/contact' }
  ]

  const programs = [
    'O-Level (S1-S4)',
    'A-Level Sciences', 
    'A-Level Arts',
    'Boarding Facility'
  ]

  return (
    <footer className="bg--to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* School Information */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center shrink-0">
                <FaGraduationCap className="text-blue-800 text-xl sm:text-2xl" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold">ST LOUIS THE KING</h3>
                <p className="text-amber-400 font-semibold text-sm sm:text-base">HIGH SCHOOL KAMPALA</p>
              </div>
            </div>
            <p className="text-amber-400 italic text-center sm:text-left mb-4 text-sm sm:text-base">
              "VIVO UT SERVIAM" - I live to serve
            </p>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              A Catholic institution dedicated to academic excellence and holistic development 
              of students in Kampala, Uganda. Nurturing future leaders through quality education 
              and Christian values.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all duration-300 transform hover:scale-110">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-amber-400 pb-2 border-b border-amber-400/30 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-1 group text-sm sm:text-base"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-amber-400 pb-2 border-b border-amber-400/30 inline-block">
              Contact Us
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0 text-sm sm:text-base" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Address</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Hoima-Kampala Highway<br />
                    Bukwiri Town<br />
                    PO BOX, Kampala (UG)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-amber-400 shrink-0 text-sm sm:text-base" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Phone</p>
                  <p className="text-gray-300 text-xs sm:text-sm">+256787937161</p>
                  <p className="text-gray-300 text-xs sm:text-sm">0740658458</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="font-semibold mb-3 text-sm sm:text-base">Stay Updated</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-amber-400 text-white placeholder-gray-400 text-sm"
                />
                <button className="px-3 sm:px-4 py-2 bg-amber-500 text-blue-900 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300 text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
            <div>
              <p className="text-sm sm:text-base">&copy; {currentYear} St. Louis The King High School. All rights reserved.</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Excellence in Education, Grounded in Faith
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-amber-400 italic text-xs sm:text-sm leading-relaxed">
                "I am not capable of doing big things but I want to do everything even the smallest for the greater glory of God"
              </p>
              <p className="text-gray-400 text-xs mt-1">- ST DOMINIC SAVIO</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer