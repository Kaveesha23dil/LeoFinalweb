"use client";
import { motion } from "framer-motion";
import flagImg from "../assets/leo-flag.png"; // still using the local image path

export default function LegacySection() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-8 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold leading-snug mb-4"
        >
          <span className="text-neon-green">Our Journey Of</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Impact & Growth
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mb-6 leading-relaxed"
        >
          The Leo Club of SLTC is driven by the vision to create meaningful
          change through service, leadership, and collaboration. Together, we
          empower youth to make a lasting difference in communities across Sri
          Lanka.
        </motion.p>

        {/* Feature Cards */}
        <div className="space-y-6">
          {[
            {
              letter: "L",
              title: "LEADERSHIP",
              desc: "Inspire and guide—develop skills to lead teams and create impactful projects.",
              color: "from-blue-600 to-blue-400",
            },
            {
              letter: "E",
              title: "ENGAGEMENT",
              desc: "Work together—connect, collaborate, and make a visible difference in society.",
              color: "from-yellow-600 to-yellow-400",
            },
            {
              letter: "O",
              title: "OPPORTUNITY",
              desc: "Unlock potential—build lifelong friendships and skills that empower your future.",
              color: "from-green-600 to-green-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-zinc-900 rounded-xl p-5 border border-gray-700 shadow-md"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} font-bold text-lg`}
              >
                {item.letter}
              </div>
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Image (Static, Resized) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <div className="w-64 md:w-80">
          {/* resized flag here */}
          <img
            src={flagImg}
            alt="Leo Club Flag"
            className="rounded-xl shadow-lg border-2 border-neon-green"
          />
        </div>
      </motion.div>
    </div>
  );
}
