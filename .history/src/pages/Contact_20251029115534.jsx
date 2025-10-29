import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane, FaWhatsapp, FaSchool, FaDirections } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xl sm:text-2xl" />,
      title: "Address",
      details: [
        "Hoima-Kampala Highway",
        "Bukwiri Town",
        "Before Kiboga Town",
        "PO BOX, Kampala (UG)"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FaPhone className="text-xl sm:text-2xl" />,
      title: "Phone",
      details: [
        "+256787937161",
        "0740658458"
      ],
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <FaClock className="text-xl sm:text-2xl" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM"
      ],
      color: "from-violet-600 to-violet-700"
    },
    {
      icon: <FaWhatsapp className="text-xl sm:text-2xl" />,
      title: "Quick Chat",
      details: [
        "Available during office hours",
        "Fast responses guaranteed"
      ],
      color: "from-green-600 to-green-700"
    }
  ]

  const directionCards = [
    {
      icon: <FaDirections className="text-xl sm:text-2xl" />,
      title: "From Kampala",
      description: "Take Hoima Road, pass through Kiboga to Bukwiri town",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <FaDirections className="text-xl sm:text-2xl" />,
      title: "From Hoima",
      description: "Head towards Kampala, school is in Bukwiri before Kiboga",
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: <FaPhone className="text-xl sm:text-2xl" />,
      title: "Need Help?",
      description: "Call us for detailed directions: +256787937161",
      color: "bg-amber-50 border-amber-200"
    }
  ]

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6" data-aos="fade-up">
            Contact <span className="text-amber-400">Us</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Get in touch with St. Louis The King High School. We're here to answer your questions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm sm:text-base">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div 
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100"
                data-aos="fade-right"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Get In Touch</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <FaPhone className="text-blue-600 text-lg sm:text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">Call Us</p>
                      <p className="text-blue-600 font-bold text-sm sm:text-base">+256787937161</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <FaWhatsapp className="text-emerald-600 text-lg sm:text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">WhatsApp</p>
                      <p className="text-emerald-600 font-bold text-sm sm:text-base">0740658458</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-violet-50 rounded-lg border border-violet-100">
                    <FaMapMarkerAlt className="text-violet-600 text-lg sm:text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">Visit Us</p>
                      <p className="text-violet-600 text-sm sm:text-base">Hoima-Kampala Highway, Bukwiri</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div 
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Location Map</h3>
                </div>
                <div className="h-48 sm:h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600 p-4">
                    <FaSchool className="text-3xl sm:text-4xl mx-auto mb-2 sm:mb-4 opacity-60" />
                    <p className="font-semibold text-sm sm:text-base">Interactive Map</p>
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2">Hoima-Kampala Highway, Bukwiri Town</p>
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50">
                  <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">
                    The school can be accessed along Hoima-Kampala highway in Bukwiri town before Kiboga town.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div 
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100"
                data-aos="fade-left"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="+256 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="academics">Academic Programs</option>
                        <option value="fees">Fee Structure</option>
                        <option value="boarding">Boarding Information</option>
                        <option value="general">General Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Please type your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-amber-500 to-amber-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg sm:text-xl text-gray-900 mb-6 max-w-2xl mx-auto leading-relaxed">
            For urgent inquiries regarding admissions, fees, or other school matters, 
            please call us directly during office hours.
          </p>
          <div className="bg-white/20 rounded-xl p-4 sm:p-6 inline-block">
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              <FaPhone className="text-gray-900 text-2xl sm:text-3xl" />
              <div className="text-left">
                <p className="text-gray-900 font-semibold text-sm sm:text-base">Emergency Contact</p>
                <p className="text-gray-900 text-xl sm:text-2xl font-bold">+256787937161</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-gray-200"
            data-aos="fade-up"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Finding Our School</h3>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Located along the Hoima-Kampala highway in Bukwiri town before Kiboga town. 
              Look for our school signboard and welcome gate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {directionCards.map((card, index) => (
                <div key={index} className={`p-4 sm:p-6 rounded-xl border-2 ${card.color} text-center`}>
                  <div className="text-emerald-600 mx-auto mb-3">
                    {card.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{card.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact