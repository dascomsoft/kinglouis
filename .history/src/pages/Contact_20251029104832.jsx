import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'

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
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Address",
      details: [
        "Hoima-Kampala Highway",
        "Bukwiri Town",
        "Before Kiboga Town",
        "PO BOX, Kampala (UG)"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: [
        "+256787937161",
        "0740658458"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "Quick Chat",
      details: [
        "Available during office hours",
        "Fast responses guaranteed"
      ],
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <div className="pt-28 pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Contact <span className="text-primary-gold">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="200">
            Get in touch with St. Louis The King High School. We're here to answer your questions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${info.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                data-aos="fade-right"
              >
                <h3 className="text-2xl font-bold text-primary-blue mb-6">Get In Touch</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                    <FaPhone className="text-primary-blue text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">Call Us</p>
                      <p className="text-primary-blue font-bold">+256787937161</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                    <FaWhatsapp className="text-green-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-green-600 font-bold">0740658458</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                    <FaMapMarkerAlt className="text-purple-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">Visit Us</p>
                      <p className="text-purple-600">Hoima-Kampala Highway, Bukwiri</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="bg-linear-to-r from-primary-blue to-primary-dark p-6 text-white">
                  <h3 className="text-xl font-bold">Location Map</h3>
                </div>
                <div className="h-64 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <FaMapMarkerAlt className="text-4xl mx-auto mb-4 opacity-60" />
                    <p className="font-semibold">Interactive Map</p>
                    <p className="text-sm mt-2">Hoima-Kampala Highway, Bukwiri Town</p>
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600 text-sm text-center">
                    The school can be accessed along Hoima-Kampala highway in Bukwiri town before Kiboga town.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div 
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                data-aos="fade-left"
              >
                <h3 className="text-3xl font-bold text-primary-blue mb-2">Send Us a Message</h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
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
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please type your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
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
      <section className="py-16 bg-linear-to-br from-primary-gold to-secondary-light">
        <div className="container mx-auto px-4 text-center" data-aos="zoom-in">
          <h3 className="text-3xl font-bold text-primary-blue mb-4">Need Immediate Assistance?</h3>
          <p className="text-xl text-primary-blue mb-8 max-w-2xl mx-auto">
            For urgent inquiries regarding admissions, fees, or other school matters, 
            please call us directly during office hours.
          </p>
          <div className="bg-white/20 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-6">
              <FaPhone className="text-primary-blue text-3xl" />
              <div className="text-left">
                <p className="text-primary-blue font-semibold">Emergency Contact</p>
                <p className="text-primary-blue text-2xl font-bold">+256787937161</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200"
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-bold text-primary-blue mb-4">Finding Our School</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Located along the Hoima-Kampala highway in Bukwiri town before Kiboga town. 
              Look for our school signboard and welcome gate.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <FaMapMarkerAlt className="text-primary-gold text-2xl mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">From Kampala</h4>
                <p className="text-gray-600 text-sm">Take Hoima Road, pass through Kiboga to Bukwiri town</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <FaMapMarkerAlt className="text-primary-gold text-2xl mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">From Hoima</h4>
                <p className="text-gray-600 text-sm">Head towards Kampala, school is in Bukwiri before Kiboga</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <FaPhone className="text-primary-gold text-2xl mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Need Help?</h4>
                <p className="text-gray-600 text-sm">Call us for detailed directions: +256787937161</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact