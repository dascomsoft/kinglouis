import React, { useState } from 'react'
import {
  FaFlask,
  FaCalculator,
  FaGlobeAfrica,
  FaBook,
  FaLaptop,
  FaSeedling,
  FaGraduationCap,
  FaMicroscope,
  FaPalette,
  FaArrowRight,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaAward
} from 'react-icons/fa'

const Academics = () => {
  const [activeLevel, setActiveLevel] = useState('olevel')

  const subjects = [
    { name: 'Biology', icon: <FaFlask />, category: 'Sciences', level: 'both' },
    { name: 'Chemistry', icon: <FaFlask />, category: 'Sciences', level: 'both' },
    { name: 'Physics', icon: <FaFlask />, category: 'Sciences', level: 'both' },
    { name: 'Mathematics', icon: <FaCalculator />, category: 'Sciences', level: 'both' },
    { name: 'Agriculture', icon: <FaSeedling />, category: 'Sciences', level: 'both' },
    { name: 'Geography', icon: <FaGlobeAfrica />, category: 'Arts', level: 'both' },
    { name: 'History', icon: <FaBook />, category: 'Arts', level: 'both' },
    { name: 'English', icon: <FaBook />, category: 'Languages', level: 'both' },
    { name: 'Christian Religious Education', icon: <FaBook />, category: 'Religious', level: 'both' },
    { name: 'Entrepreneurship', icon: <FaBook />, category: 'Vocational', level: 'both' },
    { name: 'Computer', icon: <FaLaptop />, category: 'Vocational', level: 'both' },
    { name: 'Kiswahili', icon: <FaBook />, category: 'Languages', level: 'both' },
  ]

  const programs = [
    {
      level: 'O-Level (S1-S4)',
      duration: '4 Years',
      icon: <FaGraduationCap className="text-2xl sm:text-3xl lg:text-4xl" />,
      color: 'from-emerald-600 to-emerald-700',
      description: 'Comprehensive foundation program covering core subjects and electives',
      focus: 'Broad foundation in sciences, arts, and vocational subjects',
      features: ['Strong foundation in core subjects', 'Character development', 'Practical skills training', 'UCE examination preparation']
    },
    {
      level: 'A-Level Sciences',
      duration: '2 Years',
      icon: <FaMicroscope className="text-2xl sm:text-3xl lg:text-4xl" />,
      color: 'from-blue-600 to-blue-700',
      description: 'Advanced studies in science and mathematics for university preparation',
      focus: 'Biology, Chemistry, Physics, Mathematics, Agriculture',
      features: ['Specialized science education', 'University preparation', 'Laboratory research skills', 'STEM career guidance']
    },
    {
      level: 'A-Level Arts',
      duration: '2 Years',
      icon: <FaPalette className="text-2xl sm:text-3xl lg:text-4xl" />,
      color: 'from-violet-600 to-violet-700',
      description: 'Advanced studies in humanities, languages, and social sciences',
      focus: 'Geography, History, Entrepreneurship, Languages',
      features: ['Critical thinking development', 'Leadership training', 'Research skills', 'Social sciences focus']
    }
  ]

  const academicSupport = [
    {
      icon: <FaChalkboardTeacher className="text-xl" />,
      title: 'Qualified Teachers',
      description: 'Experienced and dedicated teaching staff',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: <FaLaptop className="text-xl" />,
      title: 'Modern Facilities',
      description: 'Well-equipped labs and learning resources',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <FaUserGraduate className="text-xl" />,
      title: 'Individual Attention',
      description: 'Small class sizes for personalized learning',
      color: 'bg-violet-100 text-violet-600'
    },
    {
      icon: <FaAward className="text-xl" />,
      title: 'Career Guidance',
      description: 'Comprehensive university and career counseling',
      color: 'bg-amber-100 text-amber-600'
    }
  ]

  const filteredSubjects = subjects.filter(subject =>
    activeLevel === 'olevel' || subject.level === 'both' || subject.level === activeLevel
  )

  return (
    <div className="pt-20 sm:pt-15 lg:pt- pb-12 sm:pb-16">
      {/* Header Section */}
      <section className="bg-linear-to-br from-gray-800 via-gray-900 to-gray-950 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6" data-aos="fade-up">
            Academic <span className="text-amber-400">Programs</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Excellence in education through comprehensive O-Level and A-Level programs
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our Academic <span className="text-emerald-600">Pathways</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Designed to nurture intellectual growth and prepare students for future success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 border-l-4 border-emerald-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-linear-to-r ${program.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {program.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 leading-tight">{program.level}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{program.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Focus Areas:</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">{program.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-1 mt-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our <span className="text-emerald-600">Subjects</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive curriculum designed to develop well-rounded individuals
            </p>
          </div>

          {/* Level Tabs */}
          <div className="flex justify-center mb-8 sm:mb-12" data-aos="fade-up">
            <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg">
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {[
                  { id: 'olevel', label: 'O-Level Subjects' },
                  { id: 'alevel-sciences', label: 'A-Level Sciences' },
                  { id: 'alevel-arts', label: 'A-Level Arts' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLevel(tab.id)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${activeLevel === tab.id
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {filteredSubjects.map((subject, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="text-emerald-600 text-xl sm:text-2xl mb-2 sm:mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {subject.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-xs sm:text-sm leading-tight">{subject.name}</h3>
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {subject.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support & Curriculum */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                Comprehensive <span className="text-emerald-600">Education</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our curriculum is designed to provide students with a balanced education that
                combines academic excellence with character development and practical skills.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">O-Level Focus</h3>
                    <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                      <li>• Strong foundation in core subjects</li>
                      <li>• Character development and moral education</li>
                      <li>• Practical skills and vocational training</li>
                      <li>• Preparation for UCE examinations</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMicroscope className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">A-Level Focus</h3>
                    <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                      <li>• Specialization in Arts or Sciences</li>
                      <li>• University preparation and career guidance</li>
                      <li>• Leadership and critical thinking development</li>
                      <li>• Preparation for UACE examinations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-amber-400">Academic Support</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                  {academicSupport.map((support, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-white/10 rounded-lg">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${support.color}`}>
                        {support.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{support.title}</h4>
                        <p className="text-white/80 text-xs sm:text-sm">{support.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-amber-500 text-gray-900 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <span>Download Curriculum Guide</span>
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics