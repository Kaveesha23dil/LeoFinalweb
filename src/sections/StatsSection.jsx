import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Hourglass, Layers, DollarSign, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: (
      <Hourglass className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400" />
    ),
    label: "Total Service Hours",
    value: 22000,
    suffix: "+",
  },
  {
    id: 2,
    icon: (
      <Layers className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400" />
    ),
    label: "Projects Completed",
    value: 450,
    suffix: "+",
  },
  {
    id: 3,
    icon: (
      <DollarSign className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400" />
    ),
    label: "Project Valuation",
    value: 5000000,
    prefix: "Rs ",
    suffix: "+",
  },
  {
    id: 4,
    icon: (
      <Users className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400" />
    ),
    label: "Membership",
    value: 3500,
    suffix: "+",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // % of section visible before triggering
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-gray-900 to-black py-8 px-6 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Where There’s a Need,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
          There’s a Leo.
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800/50 rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <div className="mb-3">{stat.icon}</div>
            <p className="text-lg text-gray-300 mb-2">{stat.label}</p>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
              {stat.prefix}
              {inView && (
                <CountUp end={stat.value} duration={2.5} separator="," />
              )}
              {stat.suffix}
            </h3>

            {/* Progress bar */}
            <div className="w-full mt-4 bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
