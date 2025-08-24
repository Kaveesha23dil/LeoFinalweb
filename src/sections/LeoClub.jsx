"use client";
import { motion } from "framer-motion";

export default function LeoClub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white px-6 py-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-12 tracking-wide"
      >
        Welcome to{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
          Leo Club of SLTC
        </span>
      </motion.h1>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 40px rgba(59, 130, 246, 0.9)",
        }}
        className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-cyan-500 mb-10 cursor-pointer transition-all duration-500"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          About Us
        </motion.h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          The Leo Club of SLTC is a youth-led movement that empowers students to
          engage in social service, leadership, and personal development. We
          organize impactful community projects, leadership programs, and events
          that create a lasting difference in society. Guided by the values of
          Lions Clubs International, we strive to develop responsible leaders
          and inspire meaningful change.
        </p>
      </motion.div>

      {/* Mission & Vision Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: "0px 0px 35px rgba(6, 182, 212, 0.9)",
          }}
          className="backdrop-blur-md bg-white/10 rounded-2xl p-6 shadow-xl border border-cyan-400 cursor-pointer transition-all duration-500"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-3 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
          >
            Our Mission
          </motion.h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            To cultivate leadership, promote community service, and empower
            young individuals to work together for the betterment of society.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            rotate: -1,
            boxShadow: "0px 0px 35px rgba(14, 165, 233, 0.9)",
          }}
          className="backdrop-blur-md bg-white/10 rounded-2xl p-6 shadow-xl border border-blue-400 cursor-pointer transition-all duration-500"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent"
          >
            Our Vision
          </motion.h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            To be recognized as a leading youth organization that creates
            positive change through service, leadership, and innovation—driving
            impactful transformation in our community and beyond.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
