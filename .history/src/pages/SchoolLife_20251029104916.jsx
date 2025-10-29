import React from 'react'
import { 
  FaBook, 
  FaClock, 
  FaTshirt, 
  FaBan, 
  FaFistRaised, 
  FaMobile, 
  FaSchool, 
  FaCross, 
  FaUserFriends,
  FaPray,
  FaUsers,
  FaBell,
  FaGraduationCap,
  FaExclamationTriangle
} from 'react-icons/fa'

const SchoolLife = () => {
  const rules = [
    {
      icon: <FaUserFriends />,
      title: 'Courteous Behavior',
      description: 'Show courteous behavior towards each other, staff and visitors. Never plan anything that will hurt your neighbor.',
      punishment: 'According to gravity of offense',
      bible: 'Proverbs 3:29',
      severity: 'medium'
    },
    {
      icon: <FaBook />,
      title: 'School Attendance',
      description: 'Mandatory attendance for all school and class activities including curriculum and spiritual grounds.',
      punishment: 'Two-weeks suspension',
      bible: null,
      severity: 'high'
    },
    {
      icon: <FaClock />,
      title: 'Time Management',
      description: 'Always be in the right place at the right time. Respect time for each activity.',
      punishment: 'Corresponding punishments',
      bible: null,
      severity: 'medium'
    },
    {
      icon: <FaTshirt />,
      title: 'Dressing Code',
      description: 'Only designated wears allowed. Non-uniform clothes will be confiscated and never returned.',
      punishment: 'Confiscation of items',
      bible: null,
      severity: 'medium'
    },
    {
      icon: <FaBan />,
      title: 'Skin Tattoos',
      description: 'No cuttings or paintings on body allowed. Considered grave offense.',
      punishment: 'Indefinite expulsion',
      bible: null,
      severity: 'very-high'
    },
    {
      icon: <FaBan />,
      title: 'Drug Abuse',
      description: 'No alcohol, tobacco, nicotine, cocaine, marijuana, Kuba, cigarettes or intoxicating substances.',
      punishment: 'Indefinite suspension, police action, prosecution',
      bible: 'Proverbs 20:1',
      severity: 'very-high'
    },
    {
      icon: <FaFistRaised />,
      title: 'Fighting/Vulgar Language',
      description: 'Fighting, use of vulgar languages and possession of weapons totally prohibited.',
      punishment: 'Suspension, police action, court prosecution',
      bible: null,
      severity: 'high'
    },
    {
      icon: <FaMobile />,
      title: 'Electronic Gadgets',
      description: 'No phones, tattooing machines, water heaters, radios, or video playing devices allowed.',
      punishment: 'Two weeks suspension and confiscation',
      bible: null,
      severity: 'high'
    },
    {
      icon: <FaSchool />,
      title: 'School Properties',
      description: 'Handle desks, chairs, furniture, textbooks, buildings with great care.',
      punishment: 'Direct replacement, police action, court prosecution',
      bible: null,
      severity: 'medium'
    },
    {
      icon: <FaCross />,
      title: 'Marital/Sex Relationships',
      description: 'No girl-boy network/coupling whether at school or outside school.',
      punishment: 'Direct expulsion, police action, court prosecution',
      bible: null,
      severity: 'very-high'
    }
  ]

  const spiritualActivities = [
    {
      title: 'Regular Mass',
      description: 'Weekly Catholic Mass and liturgical celebrations',
      frequency: 'Weekly'
    },
    {
      title: 'Choir Practice',
      description: 'Church hymns and choir rehearsals for liturgical services',
      frequency: 'Twice Weekly'
    },
    {
      title: 'Rosary',
      description: 'Daily rosary and devotional prayers',
      frequency: 'Daily'
    },
    {
      title: 'Bible Study',
      description: 'Scripture reading and faith formation sessions',
      frequency: 'Weekly'
    },
    {
      title: 'Retreats',
      description: 'Spiritual retreats and recollections',
      frequency: 'Termly'
    },
    {
      title: 'Service Projects',
      description: 'Community service and outreach programs',
      frequency: 'Monthly'
    }
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'very-high': return 'from-red-500 to-red-600';
      case 'high': return 'from-orange-500 to-orange-600';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      default: return 'from-blue-500 to-blue-600';
    }
  }

  return (
    <div className="pt-28 pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            School <span className="text-primary-gold">Life</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="200">
            Building character, discipline, and excellence through our comprehensive school programs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-blue"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-primary-blue mb-6">Welcome to Our Community</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At St. Louis The King High School, we are committed to presenting instructions regarding 
              practical wisdom and guidance of Christian attitudes and conduct to our students. Our 
              mission is guided by holy teachings to produce individuals that are committed, dynamic 
              and ready to take on new challenges.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To fulfill this mission, we have set guidelines and regulations that help maintain the 
              discipline and standards expected of every member of our community.
            </p>
          </div>
        </div>
      </section>

      {/* Rules and Regulations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              School Rules & <span className="text-primary-gold">Regulations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guidelines that ensure discipline, safety, and academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-primary-blue"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${getSeverityColor(rule.severity)} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {rule.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{rule.title}</h3>
                      {rule.severity === 'very-high' && (
                        <FaExclamationTriangle className="text-red-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{rule.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-semibold text-red-600">Punishment: </span>
                        <span className="text-sm text-gray-600">{rule.punishment}</span>
                      </div>
                      {rule.bible && (
                        <span className="text-xs bg-blue-100 text-primary-blue px-3 py-1 rounded-full font-medium">
                          {rule.bible}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Spiritual <span className="text-primary-gold">Life</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nurturing faith and spiritual growth in our Catholic tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <div className="bg-gradient-to-br from-primary-blue to-primary-dark rounded-2xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary-gold">Liturgy Program</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  St. Louis The King is a Catholic based school that respects Catholic norms and traditions. 
                  All programs like mass choir practice, church hymns, rosary, fasting etc. are welcomed by all members.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
                    <FaPray className="text-primary-gold" />
                    <span>Regular Mass and prayer services</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
                    <FaUsers className="text-primary-gold" />
                    <span>Choir practice and church hymns</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
                    <FaBell className="text-primary-gold" />
                    <span>Rosary and devotional practices</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
                    <FaGraduationCap className="text-primary-gold" />
                    <span>Seasonal liturgical celebrations</span>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6 text-yellow-300">Spiritual Activities</h3>
                <div className="space-y-4">
                  {spiritualActivities.map((activity, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{activity.title}</h4>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {activity.frequency}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center space-x-3">
              <FaExclamationTriangle className="text-yellow-600" />
              <span>Important Notes</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-yellow-800 font-semibold">Strike/Demonstration:</p>
                  <p className="text-yellow-700">
                    Any student found to mastermind, lead, encourage, suggest or plan a strike will be 
                    suspended indefinitely. Where damage occurs, offenders will be handed to police for prosecution.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flshrink-0"></div>
                <div>
                  <p className="text-yellow-800 font-semibold">Communication:</p>
                  <p className="text-yellow-700">
                    All communication must be channeled through proper representatives and recognized 
                    places. No unauthorized congregations or visitor meetings.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-yellow-800 font-semibold">Worship:</p>
                  <p className="text-yellow-700">
                    Strange religious programs and practices are never tolerated. Missing chapel and 
                    spiritual activities is considered disrespect to the most high.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pledge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div 
            className="bg-linear-to-br from-primary-blue to-primary-dark rounded-2xl p-12 text-white shadow-2xl"
            data-aos="zoom-in"
          >
            <h3 className="text-3xl font-bold mb-8 text-primary-gold">Student Pledge</h3>
            <blockquote className="text-xl italic mb-8 leading-relaxed max-w-4xl mx-auto">
              "I solemnly swear to protect these school regulations after reading and understanding 
              them all and promise to live and do everything required of me by the school for all 
              my time while at St. Louis The King High School."
            </blockquote>
            <div className="bg-white/10 rounded-xl p-6 inline-block">
              <p className="text-white/90">
                For whosoever shall keep the whole law and yet offend in one point, he is guilty of all
              </p>
              <p className="font-semibold text-primary-gold mt-2">- James 2:10</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SchoolLife