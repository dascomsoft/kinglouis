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
  FaCheckCircle,
  FaFileAlt,
  FaUserGraduate
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
    { step: 1, title: 'Application', description: 'Submit completed application form with required documents', icon: <FaFileAlt /> },
    { step: 2, title: 'Assessment', description: 'Academic assessment and interview process', icon: <FaSchool /> },
    { step: 3, title: 'Admission Offer', description: 'Receive admission letter and offer details', icon: <FaUserGraduate /> },
    { step: 4, title: 'Fee Payment', description: 'Pay required fees and complete registration', icon: <FaMoneyBillWave /> },
    { step: 5, title: 'Orientation', description: 'Attend orientation program before classes begin', icon: <FaCalendarAlt /> }
  ]

  const tabConfig = [
    { id: 'fees', label: 'Fee Structure', icon: <FaMoneyBillWave />, color: 'from-blue-600 to-blue-700' },
    { id: 'requirements', label: 'Requirements', icon: <FaSchool />, color: 'from-emerald-600 to-emerald-700' },
    { id: 'boarding', label: 'Boarding', icon: <FaBed />, color: 'from-violet-600 to-violet-700' }
  ]

  return (
    <div className="pt-20 sm:pt-24 lg:pt-18 pb-12 sm:pb-16">
      {/* Header Section */}
      <section className="bg-linear-to-br from-gray-800 via-gray-900 to-gray-950 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl text-amber-400 sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6" data-aos="fade-up">
            Admissions
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Join our community of learners and leaders. Start your journey at St. Louis The King High School.
          </p>
        </div>
      </section>

      {/* Admission Message */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg--to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-blue-600 shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Congratulations on Your Admission!</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              We are thrilled to inform you that you have been admitted to St. Louis The King High School 
              to further your academic ambitions. You should consider yourself fortunate to be selected 
              among the many people whose dream is this school.
            </p>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed">
              You are expected to report on the specified day. On failing, the school administrator must 
              be notified. However, your vacancy will be taken by another ready applicant.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Admission <span className="text-emerald-600">Process</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Simple steps to join our academic community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-emerald-600/30 -z-10"></div>
                  )}
                </div>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Tabs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Tab Headers */}
            <div className="flex justify-center mb-8 sm:mb-12" data-aos="fade-up">
              <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {tabConfig.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                        activeTab === tab.id
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
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
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              {activeTab === 'fees' && (
                <div data-aos="fade-right">
                  <div className={`bg-gradient-to-r ${tabConfig[0].color} p-6 sm:p-8 text-white`}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">School Fees Structure</h3>
                    <p className="text-white/90 text-sm sm:text-base">Academic Year 2024</p>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left font-semibold text-gray-800 text-sm sm:text-base">Class</th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left font-semibold text-gray-800 text-sm sm:text-base">Boarding</th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left font-semibold text-gray-800 text-sm sm:text-base">Day School</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(feeStructure).map(([classLevel, fees], index) => (
                            <tr key={classLevel} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-4 py-3 sm:px-6 sm:py-4 font-semibold text-gray-800 text-sm sm:text-base">{classLevel}</td>
                              <td className="px-4 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold text-sm sm:text-base">{fees.boarding}</td>
                              <td className="px-4 py-3 sm:px-6 sm:py-4 text-gray-600 text-sm sm:text-base">{fees.day}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6">
                      <div className="flex items-start space-x-3">
                        <FaCheckCircle className="text-amber-600 text-lg sm:text-xl mt-0.5 flex-shrink-0" />
                        <p className="text-amber-800 font-semibold text-sm sm:text-base">
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
                  <div className={`bg-gradient-to-r ${tabConfig[1].color} p-6 sm:p-8 text-white`}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Other Requirements (General)</h3>
                    <p className="text-white/90 text-sm sm:text-base">Termly requirements for all students</p>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {otherRequirements.map((req, index) => (
                        <div 
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 flex justify-between items-center hover:shadow-md transition-shadow duration-300"
                        >
                          <span className="font-medium text-gray-800 text-sm sm:text-base">{req.item}</span>
                          <span className="font-bold text-emerald-600 text-sm sm:text-base">{req.cost}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 bg-blue-50 rounded-xl p-4 sm:p-6">
                      <div className="flex items-start space-x-3">
                        <FaCheckCircle className="text-blue-600 text-lg sm:text-xl mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-blue-800 font-semibold text-sm sm:text-base">Additional Requirement:</p>
                          <p className="text-blue-700 text-sm sm:text-base mt-1">
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
                  <div className={`bg-gradient-to-r ${tabConfig[2].color} p-6 sm:p-8 text-white`}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Requirements for Boarders</h3>
                    <p className="text-white/90 text-sm sm:text-base">Essential items for boarding students</p>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {boardingRequirements.map((item, index) => (
                        <div 
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 border-l-4 border-amber-500 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <FaCheckCircle className="text-amber-500 flex-shrink-0 text-sm sm:text-base" />
                            <span className="text-gray-800 text-sm sm:text-base">{item}</span>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">School Location</h3>
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <FaMapMarkerAlt className="text-emerald-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                    The school can be accessed along Hoima-Kampala highway in Bukwiri town before Kiboga town.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    You can also contact us through our phone contacts for direction on the location.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                  <FaPhone className="text-emerald-600" />
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Contact for Directions:</span>
                </div>
                <p className="text-emerald-600 font-bold text-lg sm:text-xl">+256787937161 / 0740658458</p>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
              data-aos="fade-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-400">Download Forms</h3>
              <p className="text-white/90 mb-6 text-sm sm:text-base leading-relaxed">
                Download the admission form and other necessary documents to begin your application process.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <button className="w-full bg-amber-500 text-gray-900 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <FaDownload />
                  <span>Download Admission Form</span>
                </button>
                <button className="w-full bg-white/10 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base border border-white/30">
                  <FaCalendarAlt />
                  <span>View Academic Calendar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-amber-500 to-amber-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h3>
          <p className="text-lg sm:text-xl text-gray-900 mb-6 max-w-2xl mx-auto leading-relaxed">
            We wish you a good career development and a happy stay at St. Louis The King High School.
          </p>
          <div className="bg-white/20 rounded-xl p-4 sm:p-6 inline-block">
            <p className="italic text-gray-900 text-sm sm:text-base">Yours in Christ,</p>
            <p className="font-semibold text-gray-900 text-base sm:text-lg mt-2">The Administration</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions