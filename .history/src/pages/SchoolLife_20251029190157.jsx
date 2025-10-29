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
    FaExclamationTriangle,
    FaChurch,
    FaBible,
    FaHandsHelping,
    FaCalendarAlt,
    FaGavel,
    FaShieldAlt
} from 'react-icons/fa'
import { useEffect } from 'react'

const SchoolLife = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
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
            icon: <FaChurch className="text-xl" />,
            title: 'Regular Mass',
            description: 'Weekly Catholic Mass and liturgical celebrations',
            frequency: 'Weekly',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: <FaUsers className="text-xl" />,
            title: 'Choir Practice',
            description: 'Church hymns and choir rehearsals for liturgical services',
            frequency: 'Twice Weekly',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: <FaPray className="text-xl" />,
            title: 'Rosary',
            description: 'Daily rosary and devotional prayers',
            frequency: 'Daily',
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            icon: <FaBible className="text-xl" />,
            title: 'Bible Study',
            description: 'Scripture reading and faith formation sessions',
            frequency: 'Weekly',
            color: 'from-amber-500 to-amber-600'
        },
        {
            icon: <FaGraduationCap className="text-xl" />,
            title: 'Retreats',
            description: 'Spiritual retreats and recollections',
            frequency: 'Termly',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: <FaHandsHelping className="text-xl" />,
            title: 'Service Projects',
            description: 'Community service and outreach programs',
            frequency: 'Monthly',
            color: 'from-indigo-500 to-indigo-600'
        }
    ]

    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'very-high': return 'from-red-500 to-red-600 border-red-200';
            case 'high': return 'from-orange-500 to-orange-600 border-orange-200';
            case 'medium': return 'from-yellow-500 to-yellow-600 border-yellow-200';
            default: return 'from-blue-500 to-blue-600 border-blue-200';
        }
    }

    const getSeverityText = (severity) => {
        switch (severity) {
            case 'very-high': return 'Very High';
            case 'high': return 'High';
            case 'medium': return 'Medium';
            default: return 'Low';
        }
    }

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center bg-linear-to-br from-gray-800 via-gray-900 to-gray-950 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-amber-500/20"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            School <span className="text-amber-400">Life</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                            Building character, discipline, and excellence through our comprehensive school programs
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-500"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white">
                                <FaShieldAlt className="text-xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Welcome to Our Community</h2>
                        </div>
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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            School Rules & <span className="text-amber-600">Regulations</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Guidelines that ensure discipline, safety, and academic excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {rules.map((rule, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-amber-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${getSeverityColor(rule.severity)} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                        {rule.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{rule.title}</h3>
                                                <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-semibold ${rule.severity === 'very-high' ? 'bg-red-100 text-red-800' :
                                                    rule.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                                                        rule.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-blue-100 text-blue-800'
                                                    }`}>
                                                    {getSeverityText(rule.severity)} Severity
                                                </span>
                                            </div>
                                            {rule.severity === 'very-high' && (
                                                <FaExclamationTriangle className="text-red-500 shrink-0 mt-1" />
                                            )}
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{rule.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="text-sm font-semibold text-red-600">Punishment: </span>
                                                <span className="text-sm text-gray-600">{rule.punishment}</span>
                                            </div>
                                            {rule.bible && (
                                                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Spiritual <span className="text-amber-600">Life</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Nurturing faith and spiritual growth in our Catholic tradition
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div data-aos="fade-right">
                            <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white h-full">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 flex items-center justify-center">
                                        <FaChurch className="text-xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-amber-400">Liturgy Program</h3>
                                </div>
                                <p className="text-white/90 mb-6 leading-relaxed">
                                    St. Louis The King is a Catholic based school that respects Catholic norms and traditions.
                                    All programs like mass choir practice, church hymns, rosary, fasting etc. are welcomed by all members.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors duration-300">
                                        <FaPray className="text-amber-400" />
                                        <span>Regular Mass and prayer services</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors duration-300">
                                        <FaUsers className="text-amber-400" />
                                        <span>Choir practice and church hymns</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors duration-300">
                                        <FaBell className="text-amber-400" />
                                        <span>Rosary and devotional practices</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors duration-300">
                                        <FaGraduationCap className="text-amber-400" />
                                        <span>Seasonal liturgical celebrations</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left">
                            <div className="bg-linear-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white h-full">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                        <FaCalendarAlt className="text-xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Spiritual Activities</h3>
                                </div>
                                <div className="space-y-4">
                                    {spiritualActivities.map((activity, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            <div className="flex items-center space-x-3 mb-2">
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${activity.color} flex items-center justify-center text-white`}>
                                                    {activity.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-semibold text-white">{activity.title}</h4>
                                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                                            {activity.frequency}
                                                        </span>
                                                    </div>
                                                    <p className="text-white/80 text-sm mt-1">{activity.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-8 shadow-lg"
                        data-aos="fade-up"
                    >
                        <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white">
                                <FaGavel className="text-lg" />
                            </div>
                            <span>Important Notes</span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-amber-200">
                                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <p className="text-amber-800 font-semibold text-lg">Strike/Demonstration:</p>
                                    <p className="text-amber-700 mt-1">
                                        Any student found to mastermind, lead, encourage, suggest or plan a strike will be
                                        suspended indefinitely. Where damage occurs, offenders will be handed to police for prosecution.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-amber-200">
                                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <p className="text-amber-800 font-semibold text-lg">Communication:</p>
                                    <p className="text-amber-700 mt-1">
                                        All communication must be channeled through proper representatives and recognized
                                        places. No unauthorized congregations or visitor meetings.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-amber-200">
                                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <p className="text-amber-800 font-semibold text-lg">Worship:</p>
                                    <p className="text-amber-700 mt-1">
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl"
                        data-aos="zoom-in"
                    >
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white mx-auto mb-6">
                            <FaBook className="text-2xl" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-400">Student Pledge</h3>
                        <blockquote className="text-lg sm:text-xl italic mb-8 leading-relaxed max-w-4xl mx-auto">
                            "I solemnly swear to protect these school regulations after reading and understanding
                            them all and promise to live and do everything required of me by the school for all
                            my time while at St. Louis The King High School."
                        </blockquote>
                        <div className="bg-white/10 rounded-xl p-6 inline-block">
                            <p className="text-white/90 text-sm sm:text-base">
                                For whosoever shall keep the whole law and yet offend in one point, he is guilty of all
                            </p>
                            <p className="font-semibold text-amber-400 mt-2">- James 2:10</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SchoolLife