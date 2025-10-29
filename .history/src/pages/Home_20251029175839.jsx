import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaGraduationCap,
  FaUsers,
  FaBook,
  FaPray,
  FaArrowRight,
  FaAward,
  FaHeart,
  FaMicroscope,
  FaPalette
} from 'react-icons/fa'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])
  const features = [
    {
      icon: <FaGraduationCap className="text-2xl sm:text-3xl" />,
      title: "Academic Excellence",
      description: "Top-performing O-Level and A-Level programs with outstanding results",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FaPray className="text-2xl sm:text-3xl" />,
      title: "Christian Values",
      description: "Grounded in Christian principles and moral development",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <FaUsers className="text-2xl sm:text-3xl" />,
      title: "Holistic Development",
      description: "Comprehensive education focusing on mind, body, and spirit",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FaBook className="text-2xl sm:text-3xl" />,
      title: "Diverse Curriculum",
      description: "12+ subjects including Sciences, Arts, and Vocational training",
      color: "from-violet-600 to-violet-700"
    }
  ]

  const stats = [
    { number: "500+", label: "Students" },
    { number: "25+", label: "Qualified Teachers" },
    { number: "12+", label: "Subjects" },
    { number: "98%", label: "Success Rate" }
  ]

  const programs = [
    {
      icon: <FaGraduationCap className="text-3xl sm:text-4xl" />,
      title: "O-Level (S1-S4)",
      description: "Comprehensive four-year program building strong foundations in core subjects and character development.",
      color: "border-blue-500",
      linkColor: "text-blue-600 hover:text-blue-700",
      path: "/academics"
    },
    {
      icon: <FaMicroscope className="text-3xl sm:text-4xl" />,
      title: "A-Level Sciences",
      description: "Specialized advanced studies in sciences and mathematics for university preparation and STEM careers.",
      color: "border-emerald-500",
      linkColor: "text-emerald-600 hover:text-emerald-700",
      path: "/academics"
    },
    {
      icon: <FaPalette className="text-3xl sm:text-4xl" />,
      title: "A-Level Arts",
      description: "Advanced studies in humanities, languages, and social sciences with focus on critical thinking and leadership.",
      color: "border-violet-500",
      linkColor: "text-violet-600 hover:text-violet-700",
      path: "/academics"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative m mt-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/soutien4.webp)' }} // Replace with your image filename
        ></div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/70"></div>

        {/* Simplified Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-emerald-500/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Welcome to
              <span className="block text-amber-400 mt-2 sm:mt-4">St. Louis The King</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              A Catholic institution dedicated to academic excellence and holistic development
              of students in Kampala, Uganda. <span className="text-amber-400 font-semibold">"VIVO UT SERVIAM"</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/admissions"
                className="group bg-amber-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <span>Discover More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="bg-linear-to-r from-amber-500 to-amber-400 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="zoom-in">
          <FaHeart className="text-gray-900 text-3xl sm:text-4xl mx-auto mb-4 sm:mb-6" />
          <blockquote className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-serif italic max-w-4xl mx-auto leading-relaxed">
            "I am not capable of doing big things but I want to do everything even the smallest for the greater glory of God"
          </blockquote>
          <p className="mt-4 sm:mt-6 font-semibold text-gray-900 text-base sm:text-lg">- ST DOMINIC SAVIO</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Why Choose <span className="text-emerald-600">St. Louis?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are committed to nurturing future leaders through quality education and Christian values
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-transparent shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-semibold text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our <span className="text-emerald-600">Programs</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive education pathways for O-Level and A-Level students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 border-l-4 border-b-4 border-gray-100"
                data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="text-gray-700 mb-3 sm:mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {program.description}
                </p>
                <Link
                  to={program.path}
                  className={`inline-flex items-center space-x-2 font-semibold transition-colors duration-300 text-sm sm:text-base ${program.linkColor}`}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-xs sm:text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-emerald-500/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Join Our <span className="text-amber-400">Community?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards academic excellence and personal growth at St. Louis The King High School
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-amber-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home