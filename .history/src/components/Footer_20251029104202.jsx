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

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-primary-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <FaGraduationCap className="text-primary-blue text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ST LOUIS THE KING</h3>
                <p className="text-primary-gold font-semibold">HIGH SCHOOL KAMPALA</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-4 italic">"VIVO UT SERVIAM" - I live to serve</p>
            <p className="text-gray-400 mb-6 max-w-md">
              A Catholic institution dedicated to academic excellence and holistic development 
              of students in Kampala, Uganda. Nurturing future leaders through quality education 
              and Christian values.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary-gold hover:text-primary-blue transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary-gold hover:text-primary-blue transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary-gold hover:text-primary-blue transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary-gold hover:text-primary-blue transition-all duration-300 transform hover:scale-110">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-gold relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-gold"></div>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Academics', 'Admissions', 'School Life', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center space-x-2 text-gray-300 hover:text-primary-gold transition-all duration-300 transform hover:translate-x-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-gold relative inline-block">
              Contact Us
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-gold"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-gold mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300 text-sm">
                    Hoima-Kampala Highway<br />
                    Bukwiri Town<br />
                    PO BOX, Kampala (UG)
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-gold shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300 text-sm">+256787937161</p>
                  <p className="text-gray-300 text-sm">0740658458</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="font-semibold mb-3">Stay Updated</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-primary-gold text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-primary-gold text-primary-blue rounded-lg font-semibold hover:bg-secondary-light transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} St. Louis The King High School. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-1">
                Excellence in Education, Grounded in Faith
              </p>
            </div>
            <div className="text-center">
              <p className="text-primary-gold italic text-sm">
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