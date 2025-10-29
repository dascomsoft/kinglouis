import React from 'react'
import { FaGraduationCap, FaUsers, FaPrayingHands, FaHistory, FaMapMarkerAlt, FaAward, FaEye, FaTarget } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaGraduationCap className="text-2xl sm:text-3xl" />,
      title: "Excellence Académique",
      description: "Engagement envers des normes académiques élevées et une amélioration continue de l'enseignement.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FaPrayingHands className="text-2xl sm:text-3xl" />,
      title: "Valeurs Chrétiennes",
      description: "Fondé sur les traditions catholiques, promouvant l'intégrité morale et le service.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FaUsers className="text-2xl sm:text-3xl" />,
      title: "Communauté",
      description: "Favoriser un environnement où étudiants, personnel et parents travaillent ensemble.",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <FaAward className="text-2xl sm:text-3xl" />,
      title: "Leadership",
      description: "Développer des leaders avec un caractère fort et une pensée critique.",
      color: "from-violet-600 to-violet-700"
    }
  ]

  const milestones = [
    { year: "2010", event: "Fondation de l'École", description: "Établie avec une vision pour l'éducation catholique de qualité" },
    { year: "2014", event: "Première Promotion", description: "Célébré nos premiers diplômés avec des résultats exceptionnels" },
    { year: "2018", event: "Programme A-Level", description: "Élargi pour offrir l'éducation avancée en Arts et Sciences" },
    { year: "2023", event: "Installations Modernes", description: "Laboratoires scientifiques et bibliothèque de pointe achevés" }
  ]

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6" data-aos="fade-up">
            À Propos de Notre <span className="text-amber-400">École</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Une institution catholique dédiée à l'excellence académique et à la formation du caractère à Kampala, Ouganda
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Vision */}
            <div 
              className="group bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 border-l-4 border-blue-600"
              data-aos="fade-right"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaEye className="text-white text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Notre Vision</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Être le leader académique dans l'est dans la production d'individus engagés, 
                dynamiques et prêts à relever de nouveaux défis.
              </p>
            </div>

            {/* Mission */}
            <div 
              className="group bg-gradient-to-br from-amber-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 border-l-4 border-amber-500"
              data-aos="fade-left"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaTarget className="text-white text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Notre Mission</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Fournir des instructions concernant la sagesse pratique et le guide des attitudes 
                chrétiennes aux étudiants grâce à une éducation holistique et de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-3 sm:mb-4">
              Nos Valeurs <span className="text-amber-500">Fondamentales</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Les principes fondamentaux qui guident notre philosophie éducative et la vie communautaire
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-3 sm:mb-4">
              Notre <span className="text-amber-500">Histoire</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Célébrer des années d'excellence académique et de formation du caractère
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - Hidden on mobile, visible on medium screens and up */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-amber-500 h-full"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center mb-8 sm:mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} mb-4 md:mb-0`}>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-xl sm:text-2xl font-bold text-amber-500 mb-2">{milestone.year}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot - Hidden on mobile, visible on medium screens and up */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-amber-500 border-4 border-white shadow-lg"></div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Campus */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">
                Notre <span className="text-amber-500">Campus</span>
              </h2>
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <FaMapMarkerAlt className="text-amber-500 text-xl sm:text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Localisation</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Situé le long de l'autoroute Hoima-Kampala à Bukwiri, notre campus offre 
                    un environnement serein et propice à l'apprentissage et à la croissance personnelle.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <FaHistory className="text-blue-600 text-xl sm:text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Héritage</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    St. Louis The King High School se dresse comme un phare de l'éducation catholique en Ouganda, 
                    engagé à former des jeunes de caractère, de foi et d'excellence académique.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
              data-aos="fade-left"
            >
              <div className="h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <FaMapMarkerAlt className="text-4xl sm:text-5xl lg:text-6xl mx-auto mb-3 sm:mb-4 opacity-90" />
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Plan du Campus</p>
                  <p className="text-sm sm:text-base opacity-90">Autoroute Hoima-Kampala, Ville de Bukwiri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catholic Identity */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8">
              Notre Identité <span className="text-amber-400">Catholique</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
              En tant qu'institution catholique, nous intégrons la foi à l'apprentissage et encourageons 
              les étudiants à vivre la devise de l'école : <strong>"VIVO UT SERVIAM"</strong> - Je vis pour servir.
            </p>
            <div className="bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto backdrop-blur-sm border border-white/20">
              <p className="text-base sm:text-lg italic mb-3 sm:mb-4 leading-relaxed">
                "Je ne suis pas capable de faire de grandes choses mais je veux faire tout, même le plus petit, pour la plus grande gloire de Dieu."
              </p>
              <p className="text-amber-400 font-semibold">- SAINT DOMINIQUE SAVIO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About