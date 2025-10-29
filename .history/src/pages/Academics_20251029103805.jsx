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
  FaArrowRight
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
      icon: <FaGraduationCap className="text-4xl" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Comprehensive foundation program covering core subjects and electives',
      focus: 'Broad foundation in sciences, arts, and vocational subjects',
      features: ['Strong foundation in core subjects', 'Character development', 'Practical skills training', 'UCE examination preparation']
    },
    {
      level: 'A-Level Sciences',
      duration: '2 Years',
      icon: <FaMicroscope className="text-4xl" />,
      color: 'from-green-500 to-green-600',
      description: 'Advanced studies in science and mathematics for university preparation',
      focus: 'Biology, Chemistry, Physics, Mathematics, Agriculture',
      features: ['Specialized science education', 'University preparation', 'Laboratory research skills', 'STEM career guidance']
    },
    {
      level: 'A-Level Arts',
      duration: '2 Years',
      icon: <FaPalette className="text-4xl" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Advanced studies in humanities, languages, and social sciences',
      focus: 'Geography, History, Entrepreneurship, Languages',
      features: ['Critical thinking development', 'Leadership training', 'Research skills', 'Social sciences focus']
    }
  ]

  const filteredSubjects = subjects.filter(subject => 
    activeLevel === 'olevel' || subject.level === 'both' || subject.level === activeLevel
  )

  return (
    <div className="pt-28 pb-16">
      {/* Header Section */}
      <section className="bg-linear-to-br from-primary-blue to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Academic <span className="text-primary-gold">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="200">
            Excellence in education through comprehensive O-Level and A-Level programs
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Our Academic <span className="text-primary-gold">Pathways</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed to nurture intellectual growth and prepare students for future success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-primary-blue"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-20 h-20 rounded-2xl bg-linear-to-r ${program.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.level}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-primary-gold text-primary-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Focus Areas:</h4>
                  <p className="text-gray-600 text-sm mb-4">{program.focus}</p>
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Our <span className="text-primary-gold">Subjects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum designed to develop well-rounded individuals
            </p>
          </div>

          {/* Level Tabs */}
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {[
                  { id: 'olevel', label: 'O-Level Subjects' },
                  { id: 'alevel-sciences', label: 'A-Level Sciences' },
                  { id: 'alevel-arts', label: 'A-Level Arts' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLevel(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeLevel === tab.id
                        ? 'bg-primary-blue text-white shadow-lg'
                        : 'text-gray-600 hover:text-primary-blue hover:bg-blue-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredSubjects.map((subject, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="text-primary-blue text-2xl mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {subject.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{subject.name}</h3>
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {subject.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
                Comprehensive <span className="text-primary-gold">Education</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our curriculum is designed to provide students with a balanced education that 
                combines academic excellence with character development and practical skills.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">O-Level Focus</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Strong foundation in core subjects</li>
                      <li>• Character development and moral education</li>
                      <li>• Practical skills and vocational training</li>
                      <li>• Preparation for UCE examinations</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-2xl flex items-center justify-center shrink-0">
                    <FaMicroscope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">A-Level Focus</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Specialization in Arts or Sciences</li>
                      <li>• University preparation and career guidance</li>
                      <li>• Leadership and critical thinking development</li>
                      <li>• Preparation for UACE examinations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="bg-linear-to-br from-primary-blue to-primary-dark rounded-2xl p-8 text-white"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-gold">Academic Support</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaBook className="text-primary-blue text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Qualified Teachers</h4>
                    <p className="text-white/80 text-sm">Experienced and dedicated teaching staff</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaLaptop className="text-primary-blue text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Modern Facilities</h4>
                    <p className="text-white/80 text-sm">Well-equipped labs and learning resources</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-primary-blue text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Individual Attention</h4>
                    <p className="text-white/80 text-sm">Small class sizes for personalized learning</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-primary-gold text-primary-blue py-4 rounded-xl font-bold hover:bg-secondary-light transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Download Curriculum Guide</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics