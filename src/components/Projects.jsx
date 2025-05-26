import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavigationBar from "./Navbar";
import NavigationControls from "./NavigationControls";

// Floating coral particles component - matching Skills page
const FloatingCoralParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => i);
  
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
            y: [0, -35, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Sunlight rays through water - matching Skills page
const SunlightRays = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-0 w-2 bg-gradient-to-b from-yellow-200 via-orange-100 to-transparent opacity-20"
        style={{
          left: `${15 + i * 12}%`,
          height: "100%",
          transformOrigin: "top",
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scaleX: [1, 1.6, 1],
          rotateZ: [0, 2, -2, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Floating treasure chests
const TreasureChest = ({ position }) => (
  <motion.div
    className={`absolute ${position} text-lg`}
    animate={{ 
      y: [0, -6, 0],
      rotateZ: [0, 2, -2, 0],
      scale: [1, 1.03, 1]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  >
    <motion.div
      animate={{
        filter: [
          "drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))",
          "drop-shadow(0 0 12px rgba(251, 191, 36, 0.8))",
          "drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))"
        ]
      }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      💰
    </motion.div>
  </motion.div>
);

// Enhanced Project Card Component
const ProjectPearl = ({ project, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const projectCategories = {
    "AI/ML": { color: "from-purple-400 to-indigo-500", glow: "rgba(147, 51, 234, 0.4)", theme: "🤖" },
    "Web App": { color: "from-blue-400 to-cyan-500", glow: "rgba(34, 211, 238, 0.4)", theme: "🌐" },
    "Mobile": { color: "from-green-400 to-emerald-500", glow: "rgba(34, 197, 94, 0.4)", theme: "📱" },
    "Data Viz": { color: "from-pink-400 to-rose-500", glow: "rgba(236, 72, 153, 0.4)", theme: "📊" },
    "E-commerce": { color: "from-orange-400 to-yellow-500", glow: "rgba(251, 191, 36, 0.4)", theme: "🛒" },
    "Tool": { color: "from-teal-400 to-blue-500", glow: "rgba(20, 184, 166, 0.4)", theme: "🔧" }
  };

  const category = projectCategories[project.category] || projectCategories["Web App"];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, type: "spring", stiffness: 120 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-4 bg-gradient-to-br from-orange-100/80 to-yellow-100/80 backdrop-blur-lg border-2 border-orange-300/40 rounded-xl shadow-lg cursor-pointer overflow-hidden"
        whileHover={{ 
          scale: 1.03,
          boxShadow: `0 8px 20px ${category.glow}`,
          borderColor: "rgba(251, 146, 60, 0.6)"
        }}
        animate={{
          y: [0, -2, 0],
          boxShadow: isHovered 
            ? `0 6px 15px ${category.glow}` 
            : "0 3px 10px rgba(251, 146, 60, 0.2)"
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 0.3 }
        }}
      >
        {/* Coral texture overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 rounded-xl`}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Project icon with category theme */}
        <motion.div
          className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-lg shadow-md border border-white"
          animate={{ 
            rotate: [0, 360],
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered 
              ? "0 0 12px rgba(251, 146, 60, 0.6)" 
              : "0 2px 6px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.3 },
            boxShadow: { duration: 0.3 }
          }}
        >
          <span>{project.icon}</span>
        </motion.div>

        {/* Project content */}
        <div className="relative z-10">
          {/* Title */}
          <motion.h3
            className="text-sm font-bold text-orange-800 mb-2 pr-6"
            animate={{ 
              y: isHovered ? -1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-xs text-orange-700 mb-3 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: (delay / 1000) + 0.2 }}
          >
            {project.desc}
          </motion.p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1">
            {project.tech.split(', ').slice(0, 3).map((tech, idx) => (
              <motion.span 
                key={idx}
                className="bg-gradient-to-r from-orange-200/80 to-yellow-200/80 text-orange-800 text-[10px] px-2 py-1 rounded-full border border-orange-300/50 font-medium"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  boxShadow: isHovered 
                    ? "0 0 8px rgba(251, 146, 60, 0.3)"
                    : "0 1px 3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Underwater ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0) 100%)",
              "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.08) 20%, rgba(34, 211, 238, 0) 60%)",
              "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0) 100%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

const initialProjects = [
  { 
    title: "Spam News Detection", 
    desc: "AI-powered tool for classifying and filtering fake news using advanced NLP algorithms.", 
    tech: "Python, NLP, TensorFlow, Scikit-learn",
    icon: "🤖",
    category: "AI/ML"
  },
  { 
    title: "Amazon Clone", 
    desc: "Full-featured eCommerce platform with shopping cart and payment integration.", 
    tech: "React, Tailwind CSS, Firebase, Stripe API",
    icon: "🛒",
    category: "E-commerce"
  }
];

const additionalProjects = [
  { 
    title: "Ocean Explorer", 
    desc: "Interactive underwater exploration app with marine life database.", 
    tech: "React Native, Three.js, MongoDB",
    icon: "🐠",
    category: "Mobile"
  },
  { 
    title: "Neural Network Visualizer", 
    desc: "Real-time visualization tool for understanding deep learning architectures.", 
    tech: "JavaScript, D3.js, Python, Flask",
    icon: "🧠",
    category: "Data Viz"
  },
  {
    title: "Weather Forecast",
    desc: "Real-time weather prediction app with interactive maps and alerts.",
    tech: "React, OpenWeather API, Chart.js",
    icon: "⛅",
    category: "Web App"
  },
  {
    title: "Task Manager",
    desc: "Productivity app with drag-and-drop task organization and team collaboration.",
    tech: "Vue.js, Node.js, MongoDB",
    icon: "✅",
    category: "Tool"
  }
];

function Projects() {
  const [showContent, setShowContent] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects 
    ? [...initialProjects, ...additionalProjects]
    : initialProjects;

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-200 text-gray-800 overflow-hidden relative h-screen flex flex-col">
      {/* Underwater environment effects - matching Skills page */}
      <SunlightRays />
      <FloatingCoralParticles />
      
      {/* Navigation */}
      <NavigationBar />

      {/* Treasure chests */}
      <TreasureChest position="top-1/4 right-12" />
      <TreasureChest position="top-2/3 left-8" />
      <TreasureChest position="top-1/2 right-6" />

      {/* Minimal coral decorations */}
      <motion.div
        className="absolute bottom-0 left-4 h-24 w-5 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-3xl opacity-60"
        animate={{ 
          rotateZ: [0, 2, 0],
          scaleX: [1, 1.03, 1] 
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-4 h-20 w-4 bg-gradient-to-t from-red-500 to-yellow-400 rounded-t-xl opacity-70"
        animate={{ 
          rotateZ: [0, -2, 0],
          scaleX: [1, 1.03, 1] 
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {showContent && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-20">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-orange-600 drop-shadow-xl mb-2"
              style={{
                textShadow: "0 0 15px rgba(234, 88, 12, 0.4)",
              }}
              animate={{ 
                y: [0, -2, 0],
                textShadow: [
                  "0 0 15px rgba(234, 88, 12, 0.4)",
                  "0 0 25px rgba(234, 88, 12, 0.6)",
                  "0 0 15px rgba(234, 88, 12, 0.4)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🏛️ Coral Treasure Vault
            </motion.h1>
            <motion.p
              className="text-sm text-orange-800 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Dive into my collection of digital treasures crafted in the depths of innovation
            </motion.p>
          </motion.div>

          <motion.div
            className={`grid ${showAllProjects ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-4 max-w-4xl w-full mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {displayedProjects.map((project, index) => (
              <ProjectPearl
                key={index}
                project={project}
                index={index}
                delay={1200 + (index * 150)}
              />
            ))}
          </motion.div>

          <motion.button
            className="px-5 py-2 text-sm font-semibold text-orange-800 bg-gradient-to-r from-yellow-200/80 to-orange-200/80 backdrop-blur-sm border-2 border-orange-300/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4"
            onClick={() => setShowAllProjects((prev) => !prev)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            whileHover={{
              boxShadow: "0 0 15px rgba(251, 146, 60, 0.4)"
            }}
          >
            {showAllProjects ? "🐚 Hide Treasures" : `🗝️ Discover More (${additionalProjects.length})`}
          </motion.button>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <NavigationControls next="/certificates" prev="/skills" />
          </motion.div>

          {/* Floating instruction */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -5, 0], opacity: 0.6 }}
            transition={{ duration: 3, repeat: Infinity, delay: 3 }}
            initial={{ opacity: 0 }}
          >
            <div className="text-orange-600 text-xs font-medium opacity-70 flex items-center gap-2">
              <span>💎</span>
              Hover over treasures to see them glow
            </div>
          </motion.div>
        </div>
      )}

      {/* Ambient coral particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ambient-coral-${i}`}
            className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;