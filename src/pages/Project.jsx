import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from "../sections/Navbar";
import StarEffect from "../components/StarEffect";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

const Project = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
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
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
            >
              Our Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300"
            >
              Discover our impactful initiatives that create positive change in our community. 
              Click on any project to learn more about our work and achievements.
            </motion.p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                  onClick={() => handleProjectClick(project.id)}
                  className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold border rounded-full backdrop-blur-sm ${getStatusBadgeColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full">
                        <span className="text-black font-semibold text-sm">{project.category}</span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                        {project.details.participants} participants
                      </div>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium transition-colors">
                        <span>Learn more</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Project