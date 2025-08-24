import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from "../sections/Navbar";
import StarEffect from "../components/StarEffect";
import Footer from "../components/Footer";
import { getProjectById } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = getProjectById(id);

  if (!project) {
    return (
      <>
        <StarEffect />
        <Navbar />
        <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
            >
              Project Not Found
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-black font-bold rounded-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back to Projects
            </motion.button>
          </div>
        </div>
      </>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const getStatusBadgeColor = (status) => {
    return status === 'Completed' 
      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  return (
    <>
      <StarEffect />
      <Navbar />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate('/projects')}
            className="flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-blue-400 hover:text-blue-300 mb-8 transition-all duration-300 hover:bg-gray-700/50"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                
                {/* Image Navigation */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/60 backdrop-blur-sm text-white p-4 sm:p-3 rounded-full hover:bg-gray-700/60 transition-all duration-300 hover:scale-110 touch-manipulation"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/60 backdrop-blur-sm text-white p-4 sm:p-3 rounded-full hover:bg-gray-700/60 transition-all duration-300 hover:scale-110 touch-manipulation"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Image Thumbnails */}
              {project.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                        index === currentImageIndex 
                          ? 'border-blue-400 ring-2 ring-blue-400/30' 
                          : 'border-gray-700/50 hover:border-gray-600/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Project Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full">
                    <span className="text-black font-semibold text-sm">{project.category}</span>
                  </div>
                  <span className={`px-4 py-2 text-sm font-semibold border rounded-full backdrop-blur-sm ${getStatusBadgeColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent leading-tight">
                  {project.title}
                </h1>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {project.details.participants}
                  </div>
                  <div className="text-gray-300 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    Participants
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {project.details.hoursContributed}
                  </div>
                  <div className="text-gray-300 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Hours Contributed
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 col-span-2 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-gray-300 text-sm mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Project Date
                  </div>
                  <div className="text-xl font-semibold text-white">
                    {new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Objectives
                  </h3>
                  <ul className="space-y-3">
                    {project.details.objectives?.map((objective, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                    </svg>
                    Impact
                  </h3>
                  {Array.isArray(project.details.impact) ? (
                    <ul className="space-y-3">
                      {project.details.impact.map((impactItem, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {impactItem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{project.details.impact}</p>
                  )}
                </div>

                {/* Remove Key Outcomes section for first project */}
                {project.id !== 1 && (
                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {project.details.outcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 text-orange-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Challenges
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.details.challenges}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails;