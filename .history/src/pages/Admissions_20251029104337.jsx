import React, { useState } from 'react'
import { 
  FaDownload, 
  FaMoneyBillWave, 
  FaBed, 
  FaSchool, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa'

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('fees')

  const feeStructure = {
    'S1-S3': {
      boarding: '450,000 UGX',
      day: '200,000 UGX'
    },
    'S4': {
      boarding: '550,000 UGX',
      day: 'All candidates must be in boarding section'
    }
  }

  const otherRequirements = [
    { item: 'School uniform (class)', cost: '6,000/=' },
    { item: 'School uniform (Sunday wear)', cost: '40,000/=' },
    { item: 'Development fee', cost: '10,000/=' },
    { item: 'Admission fee', cost: '10,000/=' },
    { item: 'Medical insurance', cost: '10,000/=' },
    { item: 'Saloon', cost: '5,000/=' },
    { item: '1 broom', cost: 'Physical' },
    { item: 'Identity card', cost: '10,000/=' },
    { item: 'Entertainment fee', cost: '10,000/=' },
    { item: 'Church tithe', cost: '2,000/=' },
    { item: 'Manual work', cost: '5,000/=' },
    { item: 'Utility fee', cost: '2,000/=' }
  ]

  const boardingRequirements = [
    'Mattress (1)',
    'Knickers for girls (enough)',
    'Mathematical set (1)',
    'Pens and books (enough)',
    'Pairs of bed sheets (2)',
    'Mosquito net (1)',
    'Iron box (1)',
    'Coalgate (1)',
    'Black shoes and shoe cream',
    'Black belt for boys (1)',
    '10 liters jerry can (1)',
    'Basin (1)',
    'Touch (1)',
    'Plate, cup and spoon',
    'Knife for girls (1)',
    'Sanitary pads for girls (4 packets)',
    'Jerrys and soap'
  ]

  const admissionSteps = [
    { step: 1, title: 'Application', description: 'Submit completed application form with required documents' },
    { step: 2, title: 'Assessment', description: 'Academic assessment and interview process' },
    { step: 3, title: 'Admission Offer', description: 'Receive admission letter and offer details' },
    { step: 4, title: 'Fee Payment', description: 'Pay required fees and complete registration' },
    { step: 5, title: 'Orientation', description: 'Attend orientation program before classes begin' }
  ]

  return (
    <div className="pt-28 pb-16">
      {/* Header Section */}
      <section className="bg-linear-to-br from-primary-blue to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Admissions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="200">
            Join our community of learners and leaders. Start your journey at St. Louis The King High School.
          </p>
        </div>
      </section>

      {/* Admission Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-primary-blue shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-primary-blue mb-4">Congratulations on Your Admission!</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We are thrilled to inform you that you have been admitted to St. Louis The King High School 
              to further your academic ambitions. You should consider yourself fortunate to be selected 
              among the many people whose dream is this school.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              You are expected to report on the specified day. On failing, the school administrator must 
              be notified. However, your vacancy will be taken by another ready applicant.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Admission <span className="text-primary-gold">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to join our academic community
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.step}
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-blue/30 -z-10"></div>
                  )}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center mb-12" data-aos="fade-up">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'fees', label: 'Fee Structure', icon: <FaMoneyBillWave /> },
                    { id: 'requirements', label: 'Requirements', icon: <FaSchool /> },
                    { id: 'boarding', label: 'Boarding', icon: <FaBed /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-primary-blue text-white shadow-lg'
                          : 'text-gray-600 hover:text-primary-blue hover:bg-blue-50'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {activeTab === 'fees' && (
                <div data-aos="fade-right">
                  <div className="bg-linear-to-r from-primary-blue to-primary-dark p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">School Fees Structure</h3>
                    <p className="text-white/90">Academic Year 2024</p>
                  </div>
                  <div className="p-8">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left font-semibold text-gray-800">Class</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-800">Boarding</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-800">Day School</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(feeStructure).map(([classLevel, fees], index) => (
                            <tr key={classLevel} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-6 py-4 font-semibold text-gray-800">{classLevel}</td>
                              <td className="px-6 py-4 text-primary-blue font-semibold">{fees.boarding}</td>
                              <td className="px-6 py-4 text-gray-600">{fees.day}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3">
                        <FaCheckCircle className="text-yellow-600 text-xl" />
                        <p className="text-yellow-800 font-semibold">
                          Note: School uniforms are strictly bought from school in the bursar's office. 
                          Students are never allowed in class in non-scholastic uniforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'requirements' && (
                <div data-aos="fade-right">
                  <div className="bg-linear-to-r from-green-500 to-green-600 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Other Requirements (General)</h3>
                    <p className="text-white/90">Termly requirements for all students</p>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {otherRequirements.map((req, index) => (
                        <div 
                          key={index}
                          className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition-shadow duration-300"
                        >
                          <span className="font-medium text-gray-800">{req.item}</span>
                          <span className="font-bold text-primary-blue">{req.cost}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 bg-blue-50 rounded-xl p-6">
                      <div className="flex items-center space-x-3">
                        <FaCheckCircle className="text-blue-600 text-xl" />
                        <div>
                          <p className="text-blue-800 font-semibold">Additional Requirement:</p>
                          <p className="text-blue-700">
                            1 ruled ream of papers for classes S.1 - S.3 and one plain ream for senior four termly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'boarding' && (
                <div data-aos="fade-right">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Requirements for Boarders</h3>
                    <p className="text-white/90">Essential items for boarding students</p>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {boardingRequirements.map((item, index) => (
                        <div 
                          key={index}
                          className="bg-white border border-gray-200 rounded-xl p-4 border-l-4 border-primary-gold hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <FaCheckCircle className="text-primary-gold flex-shrink-0" />
                            <span className="text-gray-800">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Download */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold text-primary-blue mb-4">School Location</h3>
              <div className="flex items-start space-x-4 mb-6">
                <FaMapMarkerAlt className="text-primary-gold text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 mb-4">
                    The school can be accessed along Hoima-Kampala highway in Bukwiri town before Kiboga town.
                  </p>
                  <p className="text-gray-700">
                    You can also contact us through our phone contacts for direction on the location.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FaPhone className="text-primary-blue" />
                  <span className="font-semibold text-gray-800">Contact for Directions:</span>
                </div>
                <p className="text-primary-blue font-bold text-lg">+256787937161 / 0740658458</p>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-primary-blue to-primary-dark rounded-2xl p-8 text-white"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-gold">Download Forms</h3>
              <p className="text-white/90 mb-6">
                Download the admission form and other necessary documents to begin your application process.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-primary-gold text-primary-blue py-4 rounded-xl font-bold hover:bg-secondary-light transition-colors duration-300 flex items-center justify-center space-x-2">
                  <FaDownload />
                  <span>Download Admission Form</span>
                </button>
                <button className="w-full bg-white/20 text-white py-4 rounded-xl font-bold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center space-x-2 border border-white/30">
                  <FaCalendarAlt />
                  <span>View Academic Calendar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-16 bg-linear-to-r from-primary-gold to-secondary-light">
        <div className="container mx-auto px-4 text-center" data-aos="zoom-in">
          <h3 className="text-3xl font-bold text-primary-blue mb-4">Ready to Join Us?</h3>
          <p className="text-xl text-primary-blue mb-6 max-w-2xl mx-auto">
            We wish you a good career development and a happy stay at St. Louis The King High School.
          </p>
          <div className="bg-white/20 rounded-xl p-6 inline-block">
            <p className="italic text-primary-blue">Yours in Christ,</p>
            <p className="font-semibold text-primary-blue text-lg mt-2">The Administration</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions