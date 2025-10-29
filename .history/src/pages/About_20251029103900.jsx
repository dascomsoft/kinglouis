import React from 'react'
import { FaGraduationCap, FaUsers, FaPrayingHands, FaHistory, FaMapMarkerAlt, FaAward } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Academic Excellence",
      description: "Commitment to high academic standards and continuous improvement in teaching and learning.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaPrayingHands className="text-3xl" />,
      title: "Christian Values",
      description: "Grounded in Catholic traditions, promoting moral integrity, compassion, and service to others.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Community",
      description: "Fostering a supportive environment where students, staff, and parents work together.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Leadership",
      description: "Developing future leaders with strong character, critical thinking, and social responsibility.",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const milestones = [
    { year: "2010", event: "School Foundation", description: "Established with a vision for quality Catholic education" },
    { year: "2014", event: "First Graduating Class", description: "Celebrated our first O-Level graduates with outstanding results" },
    { year: "2018", event: "A-Level Program", description: "Expanded to offer Advanced Level education in Arts and Sciences" },
    { year: "2023", event: "Modern Facilities", description: "Completed state-of-the-art science laboratories and library" }
  ]

  return (
    <div className="pt-28 pb-16">
      {/* Header Section */}
      <section className="bg-linear-to-br from-primary-blue to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            About Our <span className="text-primary-gold">School</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="200">
            A Catholic institution dedicated to academic excellence and character formation in Kampala, Uganda
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div 
              className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500"
              data-aos="fade-right"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg--to-r from-blue-500 to-blue-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading academic giant in the east in the production of individuals that are 
                committed, dynamic and ready to take on new changes.
              </p>
            </div>

            {/* Mission */}
            <div 
              className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-yellow-500"
              data-aos="fade-left"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaTarget className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide instructions regarding practical wisdom and guidance of Christian attitudes 
                and conduct to the students through provision of holistic and quality education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Our Core <span className="text-primary-gold">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our educational philosophy and community life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Our <span className="text-primary-gold">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating years of academic excellence and character formation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-blue to-primary-gold h-full"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-gold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-gold border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Campus */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
                Our <span className="text-primary-gold">Campus</span>
              </h2>
              <div className="flex items-start space-x-4 mb-6">
                <FaMapMarkerAlt className="text-primary-gold text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-600 text-lg">
                    Situated along the Hoima-Kampala highway in Bukwiri town, our campus provides 
                    a serene and conducive environment for learning and personal growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaHistory className="text-primary-blue text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Heritage</h3>
                  <p className="text-gray-600 text-lg">
                    St. Louis The King High School stands as a beacon of Catholic education in Uganda, 
                    committed to forming young men and women of character, faith, and academic excellence.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              data-aos="fade-left"
            >
              <div className="h-80 bg-gradient-to-br from-primary-blue to-primary-dark flex items-center justify-center">
                <div className="text-center text-white">
                  <FaMapMarkerAlt className="text-6xl mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Campus Map</p>
                  <p className="opacity-90">Hoima-Kampala Highway, Bukwiri Town</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catholic Identity */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Catholic <span className="text-primary-gold">Identity</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              As a Catholic institution, we integrate faith with learning and encourage students to 
              live out the school motto: <strong>"VIVO UT SERVIAM"</strong> - I live to serve.
            </p>
            <div className="bg-white/10 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
              <p className="text-lg italic mb-4">
                "I am not capable of doing big things but I want to do everything even the smallest for the greater glory of God."
              </p>
              <p className="text-primary-gold font-semibold">- ST DOMINIC SAVIO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About