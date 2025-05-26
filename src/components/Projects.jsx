import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavigationBar from "./Navbar";
import NavigationControls from "./NavigationControls";

// Reduced floating coral particles - fewer particles, simpler animation
const FloatingCoralParticles = () => {
  const particles = Array.from({ length: 6 }, (_, i) => i); // Reduced from 12 to 6
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0], // Reduced movement
            opacity: [0.3, 0.6, 0.3], // Reduced opacity range
          }}
          transition={{
            duration: 6, // Slower animation
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Simplified sunlight rays - fewer rays, simpler animation
const SunlightRays = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(3)].map((_, i) => ( // Reduced from 6 to 3
      <motion.div
        key={i}
        className="absolute top-0 w-2 bg-gradient-to-b from-yellow-200 via-orange-100 to-transparent opacity-15"
        style={{
          left: `${20 + i * 25}%`,
          height: "100%",
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1], // Reduced opacity range
        }}
        transition={{
          duration: 8, // Slower animation
          repeat: Infinity,
          delay: i * 1.5,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Simplified treasure chests - reduced animations
const TreasureChest = ({ position }) => (
  <motion.div
    className={`absolute ${position} text-lg`}
    animate={{ 
      y: [0, -4, 0], // Reduced movement
    }}
    transition={{ 
      duration: 8, // Slower animation
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  >
    💰
  </motion.div>
);

// Optimized Project Card Component
const ProjectPearl = ({ project, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const projectCategories = {
    "AI/ML": { color: "from-purple-400 to-indigo-500", glow: "rgba(147, 51, 234, 0.4)" },
    "Web App": { color: "from-blue-400 to-cyan-500", glow: "rgba(34, 211, 238, 0.4)" },
    "Mobile": { color: "from-green-400 to-emerald-500", glow: "rgba(34, 197, 94, 0.4)" },
    "Data Viz": { color: "from-pink-400 to-rose-500", glow: "rgba(236, 72, 153, 0.4)" },
    "E-commerce": { color: "from-orange-400 to-yellow-500", glow: "rgba(251, 191, 36, 0.4)" },
    "Tool": { color: "from-teal-400 to-blue-500", glow: "rgba(20, 184, 166, 0.4)" }
  };

  const category = projectCategories[project.category] || projectCategories["Web App"];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 15 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-4 bg-gradient-to-br from-orange-100/80 to-yellow-100/80 backdrop-blur-sm border-2 border-orange-300/40 rounded-xl shadow-lg cursor-pointer overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 6px 15px ${category.glow}`,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Simplified gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 rounded-xl`}
          animate={{ opacity: isHovered ? 0.08 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Simplified project icon */}
        <motion.div
          className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-lg shadow-md border border-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span>{project.icon}</span>
        </motion.div>

        {/* Project content */}
        <div className="relative z-10">
          <h3 className="text-sm font-bold text-orange-800 mb-2 pr-6">
            {project.title}
          </h3>

          <p className="text-xs text-orange-700 mb-3 leading-relaxed">
            {project.desc}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1">
            {project.tech.split(', ').slice(0, 3).map((tech, idx) => (
              <span 
                key={idx}
                className="bg-gradient-to-r from-orange-200/80 to-yellow-200/80 text-orange-800 text-[10px] px-2 py-1 rounded-full border border-orange-300/50 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const initialProjects = [
  {
  title: "VeriScope: Fake News Classifier",
  desc: "AI-powered misinformation detection platform that uses NLP and machine learning to analyze and verify the authenticity of news content in real-time.",
  tech: "Python, NLP, Flask, React",
  icon: "🧠",
  category: "AI/ML"
},
{
  title: "NestQuest: Smart Property Finder",
  desc: "Responsive real estate discovery platform offering intuitive search filters, interactive listings, and real-time data to simplify the home search journey.",
  tech: "React, Tailwind CSS, PHP, MySQL",
  icon: "🏡",
  category: "Web App"
}

];

const additionalProjects = [
  {
  title: "SegmaSense: Customer Intelligence Hub",
  desc: "AI-powered customer segmentation platform using K-Means clustering to unlock deep insights and deliver data-driven marketing strategies.",
  tech: "Flask, Matplotlib, Plotly, Sklearn",
  icon: "📊",
  category: "Data Science"
},
{
  title: "TalentScope: Job Market Insights",
  desc: "Interactive dashboard visualizing hiring trends, in-demand skills, and employment patterns across regions and industries.",
  tech: "Tableau, HTML, CSS, JavaScript",
  icon: "💼",
  category: "Data Visualization"
},
{
  title: "OptiLens: Smart Eyewear Store",
  desc: "Feature-rich eyewear e-commerce site with virtual try-on, personalized recommendations, and sleek, responsive design.",
  tech: "React, Tailwind CSS, PHP, MySQL",
  icon: "🕶️",
  category: "E-commerce"
},
{
  title: "CareerForge: ML-Powered Fit Analyzer",
  desc: "AI-driven platform that evaluates user skills, projects, and certifications to predict job match percentages and suggest targeted improvements.",
  tech: "React, Flask, NLP, Sklearn",
  icon: "🧠",
  category: "AI/ML"
}

];

function Projects() {
  const [showContent, setShowContent] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects 
    ? [...initialProjects, ...additionalProjects]
    : initialProjects;

  useEffect(() => {
    // Faster initial load
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-200 text-gray-800 overflow-hidden relative h-screen flex flex-col">
      {/* Simplified underwater environment effects */}
      <SunlightRays />
      <FloatingCoralParticles />
      
      {/* Navigation */}
      <NavigationBar />

      {/* Simplified treasure chests */}
      <TreasureChest position="top-1/4 right-12" />
      <TreasureChest position="top-2/3 left-8" />

      {/* Static coral decorations - no animation */}
      <div className="absolute bottom-0 left-4 h-24 w-5 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-3xl opacity-60" />
      <div className="absolute bottom-0 right-4 h-20 w-4 bg-gradient-to-t from-red-500 to-yellow-400 rounded-t-xl opacity-70" />

      {showContent && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-20">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-orange-600 drop-shadow-xl mb-2"
              style={{ textShadow: "0 0 15px rgba(234, 88, 12, 0.4)" }}
            >
              🏛️ Coral Treasure Vault
            </motion.h1>
            <motion.p
              className="text-sm text-orange-800 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Dive into my collection of digital treasures crafted in the depths of innovation
            </motion.p>
          </motion.div>

          <motion.div
            className={`grid ${showAllProjects ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-4 max-w-4xl w-full mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {displayedProjects.map((project, index) => (
              <ProjectPearl
                key={index}
                project={project}
                index={index}
                delay={500 + (index * 100)} // Faster staggered animation
              />
            ))}
          </motion.div>

          <motion.button
            className="px-5 py-2 text-sm font-semibold text-orange-800 bg-gradient-to-r from-yellow-200/80 to-orange-200/80 backdrop-blur-sm border-2 border-orange-300/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4"
            onClick={() => setShowAllProjects((prev) => !prev)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            whileHover={{
              boxShadow: "0 0 15px rgba(251, 146, 60, 0.4)"
            }}
          >
            {showAllProjects ? "🐚 Hide Treasures" : `🗝️ Discover More (${additionalProjects.length})`}
          </motion.button>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <NavigationControls next="/certificates" prev="/skills" />
          </motion.div>

          {/* Simplified floating instruction */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="text-orange-600 text-xs font-medium opacity-70 flex items-center gap-2">
              <span>💎</span>
              Hover over treasures to see them glow
            </div>
          </motion.div>
        </div>
      )}

      {/* Reduced ambient coral particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => ( // Reduced from 8 to 4
          <motion.div
            key={`ambient-coral-${i}`}
            className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2], // Reduced opacity range
              y: [0, -10, 0], // Reduced movement
            }}
            transition={{
              duration: 6, // Slower animation
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;