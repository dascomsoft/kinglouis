import React, { useState } from 'react'
import {
    FaPhone,
    FaMapMarkerAlt,
    FaEnvelope,
    FaClock,
    FaWhatsapp,
    FaPaperPlane
} from 'react-icons/fa'
import { useEffect } from 'react'

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

    const sendToWhatsApp = (e) => {
        e.preventDefault()

        const message = `New Contact Form Submission:%0A%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Subject:* ${formData.subject}%0A
*Message:* ${formData.message}%0A%0A
_Sent via School Website_`

        const whatsappUrl = `https://wa.me/256787937161?text=${message}`

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank')

        // Reset form after sending
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
            icon: <FaPhone className="text-xl" />,
            title: 'Phone',
            details: '+256787937161',
            link: 'tel:+256787937161',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: <FaMapMarkerAlt className="text-xl" />,
            title: 'Address',
            details: 'Hoima-Kampala Highway, Bukwiri Town',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: <FaEnvelope className="text-xl" />,
            title: 'Email',
            details: 'info@stlouistheking.ac.ug',
            link: 'mailto:info@stlouistheking.ac.ug',
            color: 'from-amber-500 to-amber-600'
        },
        {
            icon: <FaClock className="text-xl" />,
            title: 'Office Hours',
            details: 'Mon - Fri: 8:00 AM - 5:00 PM',
            color: 'from-purple-500 to-purple-600'
        }
    ]

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-amber-500/20"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Contact <span className="text-amber-400">Us</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                            Get in touch with St. Louis The King High School. We're here to answer your questions and help with admissions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We'd love to hear from you. Reach out to us through any of the following channels,
                                and our team will get back to you as soon as possible.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                                                >
                                                    {item.details}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600">{item.details}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* WhatsApp Quick Action */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                                <div className="flex items-center space-x-3 mb-3">
                                    <FaWhatsapp className="text-green-600 text-2xl" />
                                    <h3 className="text-lg font-semibold text-gray-800">Quick WhatsApp Message</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Prefer to chat on WhatsApp? Click below to start a conversation directly with our administration.
                                </p>
                                <a
                                    href="https://wa.me/256787937161"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaWhatsapp />
                                    <span>Message on WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div data-aos="fade-left">
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                                <form onSubmit={sendToWhatsApp} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Your phone number"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Message subject"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-vertical"
                                            placeholder="Your message..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                                    >
                                        <FaPaperPlane />
                                        <span>Send via WhatsApp</span>
                                    </button>

                                    <p className="text-sm text-gray-500 text-center">
                                        By clicking "Send via WhatsApp", you'll be redirected to WhatsApp to send your message directly to our administration.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Visit Our <span className="text-amber-600">Campus</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Located conveniently on the Hoima-Kampala Highway in Bukwiri Town
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        data-aos="zoom-in"
                    >
                        <div className="h-96 w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <div className="text-center">
                                <FaMapMarkerAlt className="text-amber-500 text-4xl mx-auto mb-4" />
                                <p className="text-gray-600 font-semibold">Hoima-Kampala Highway, Bukwiri Town</p>
                                <p className="text-gray-500 mt-2">Map integration can be added here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact