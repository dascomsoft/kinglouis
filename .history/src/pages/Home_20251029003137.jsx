import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaGraduationCap, 
  FaUsers, 
  FaBook, 
  FaPray, 
  FaArrowRight,
  FaAward,
  FaHeart
} from 'react-icons/fa'

const Home = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Academic Excellence",
      description: "Top-performing O-Level and A-Level programs with outstanding results",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaPray className="text-3xl" />,
      title: "Catholic Values",
      description: "Grounded in Christian principles and moral development",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Holistic Development",
      description: "Comprehensive education focusing on mind, body, and spirit",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Diverse Curriculum",
      description: "12+ subjects including Sciences, Arts, and Vocational training",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const stats = [
    { number: "500+", label: "Students" },
    { number: "25+", label: "Qualified Teachers" },
    { number: "12+", label: "Subjects" },
    { number: "98%", label: "Success Rate" }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue via-primary-dark to-primary-blue overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-float"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's'
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to
              <span className="block text-primary-gold mt-2">St. Louis The King</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              A Catholic institution dedicated to academic excellence and holistic development 
              of students in Kampala, Uganda. <span className="text-primary-gold font-semibold">"VIVO UT SERVIAM"</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/admissions"
                className="group bg-primary-gold text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-light transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                <span>Discover More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-primary-gold to-secondary-light py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="zoom-in">
          <FaHeart className="text-primary-blue text-4xl mx-auto mb-6" />
          <blockquote className="text-primary-blue text-2xl md:text-3xl font-serif italic max-w-4xl mx-auto leading-relaxed">
            "I am not capable of doing big things but I want to do everything even the smallest for the greater glory of God"
          </blockquote>
          <p className="mt-6 font-semibold text-primary-blue text-lg">- ST DOMINIC SAVIO</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Why Choose <span className="text-primary-gold">St. Louis?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to nurturing future leaders through quality education and Christian values
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Our <span className="text-primary-gold">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive education pathways for O-Level and A-Level students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-primary-blue"
              data-aos="fade-right"
            >
              <FaGraduationCap className="text-4xl text-primary-blue mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">O-Level (S1-S4)</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive four-year program building strong foundations in core subjects 
                and character development.
              </p>
              <Link
                to="/academics"
                className="inline-flex items-center space-x-2 text-primary-blue font-semibold hover:text-primary-dark transition-colors duration-300"
              >
                <span>Learn More</span>
                <FaArrowRight className="text-sm" />
              </Link>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-primary-gold"
              data-aos="fade-up"
            >
              <FaAward className="text-4xl text-primary-gold mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A-Level Sciences</h3>
              <p className="text-gray-600 mb-6">
                Specialized advanced studies in sciences and mathematics for university 
                preparation and STEM careers.
              </p>
              <Link
                to="/academics"
                className="inline-flex items-center space-x-2 text-primary-gold font-semibold hover:text-secondary-dark transition-colors duration-300"
              >
                <span>Explore Sciences</span>
                <FaArrowRight className="text-sm" />
              </Link>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-green-500"
              data-aos="fade-left"
            >
              <FaBook className="text-4xl text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A-Level Arts</h3>
              <p className="text-gray-600 mb-6">
                Advanced studies in humanities, languages, and social sciences with 
                focus on critical thinking and leadership.
              </p>
              <Link
                to="/academics"
                className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
              >
                <span>Discover Arts</span>
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our <span className="text-primary-gold">Community?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards academic excellence and personal growth at St. Louis The King High School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-primary-gold text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-light transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
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