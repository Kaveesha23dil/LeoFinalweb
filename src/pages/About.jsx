import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../sections/Navbar";
import Footer from "../components/Footer";
import StarEffect from "../components/StarEffect";
import { currentPresident, pastPresidents, execomMembers } from "../data/leadership";

const About = () => {
  return (
    <>
      <StarEffect />
      <Navbar />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
            >
              Meet Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300"
            >
              We are a dynamic community of young leaders dedicated to serving our community, 
              developing leadership skills, and creating positive change in the world around us.
            </motion.p>
          </div>
        </section>

        {/* Executive Board Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-4 text-white"
            >
              Executive Board
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Meet our dedicated executive board members who lead with passion and vision.
            </motion.p>

            {/* President Card - Special Layout */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto mb-16"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={currentPresident.image} 
                      alt={currentPresident.name}
                      className="w-full h-80 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{currentPresident.name}</h3>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full">
                        <p className="text-black font-bold text-lg">{currentPresident.position}</p>
                      </div>
                      <p className="text-gray-400 mt-2 text-lg">{currentPresident.year}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">{currentPresident.bio}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <svg className="w-6 h-6 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {currentPresident.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start bg-gray-700/30 rounded-lg p-3">
                            <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a href={`mailto:${currentPresident.contact.email}`} 
                         className="flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-all duration-300">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Contact
                      </a>
                      <a href={currentPresident.contact.linkedin} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-all duration-300">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Executive Committee Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {execomMembers.slice(0, 3).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                  className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                >
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full mb-2">
                        <span className="text-black font-semibold text-sm">{member.position}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      {member.department}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Presidents Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-4 text-white"
            >
              Past Presidents
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Honoring the leaders who have shaped our club's legacy and paved the way for future generations.
            </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pastPresidents.map((president, index) => (
                <motion.div 
                  key={president.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <img 
                    src={president.image} 
                    alt={president.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{president.name}</h3>
                    <div className="inline-block px-3 py-1 bg-gray-700/50 rounded-full mb-3">
                      <p className="text-blue-400 font-semibold text-sm">{president.year}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {president.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
            >
              Join Our Mission
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed"
            >
              Ready to make a difference? Join the Leo Club of SLTC and be part of a community 
              dedicated to leadership, service, and positive change.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-black font-bold rounded-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Involved
              </button>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default About