import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const latestProjects = projects.slice(0, 2);

export default function LatestProjects() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mb-4"
        >
          🔴 Live Updates
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mb-2"
        >
          Latest Projects
        </motion.h2>
        <p className="text-gray-400 mb-12">
          Service, leadership, and impact—fresh from the field.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-cyan-400/30 hover:scale-105 transition-transform"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {project.status === 'Completed' ? 'DONE' : 'NEW'}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
                <Link to={`/projects/${project.id}`}>
                  <button className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-xl hover:opacity-90 transition touch-manipulation">
                    View Project <ArrowRight size={16} className="ml-2" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link to="/projects">
            <button className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 hover:opacity-90 text-black font-bold px-8 py-3 rounded-xl inline-flex items-center shadow-md transition">
              View All Projects <ArrowRight size={18} className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
