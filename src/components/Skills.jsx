import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import NavigationControls from "../components/NavigationControls";
import NavigationBar from "./Navbar";
import { Code, Database, Brain, Globe, Server, Cpu, Zap, Layers, Shield, GitBranch, Smartphone, Cloud, ChevronLeft } from "lucide-react";

// Optimized floating coral particles - reduced count and simpler animation
const FloatingCoralParticles = () => {
  const particles = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 5 + Math.random() * 2
  })), []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-50"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Optimized sunlight rays - reduced count and complexity
const SunlightRays = () => {
  const rays = useMemo(() => Array.from({ length: 4 }, (_, i) => ({
    id: i,
    left: 20 + i * 15,
    delay: i * 0.6
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {rays.map((ray) => (
        <motion.div
          key={ray.id}
          className="absolute top-0 w-2 bg-gradient-to-b from-yellow-200 via-orange-100 to-transparent opacity-15"
          style={{
            left: `${ray.left}%`,
            height: "100%",
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scaleX: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: ray.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Optimized tech fish - simpler animation and reduced instances
const TechFish = ({ delay = 0, skill = "default" }) => {
  const skillFish = useMemo(() => ({
    javascript: { emoji: "🐠", color: "text-yellow-400", circuit: "JS" },
    react: { emoji: "🐟", color: "text-cyan-400", circuit: "⚛️" },
    python: { emoji: "🦑", color: "text-blue-400", circuit: "🐍" },
    nodejs: { emoji: "🐡", color: "text-green-400", circuit: "⚡" },
    default: { emoji: "🐠", color: "text-orange-400", circuit: "💻" }
  }), []);

  const fish = skillFish[skill] || skillFish.default;
  const topPosition = useMemo(() => 20 + Math.random() * 40, []);

  return (
    <motion.div
      className="absolute -left-20"
      style={{ top: `${topPosition}%` }}
      initial={{ x: -100 }}
      animate={{ 
        x: 1200,
        y: [0, -10, 5, 0],
      }}
      transition={{
        x: { duration: 12, repeat: Infinity, delay, ease: "linear" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className={`relative text-2xl ${fish.color}`}>
        <div className="relative">
          {fish.emoji}
          <span className="absolute -top-1 -right-1 text-xs bg-orange-200/80 px-1 rounded-full text-orange-800 font-bold">
            {fish.circuit}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Simplified coral skill formations
const SkillCoral = ({ side, skills }) => (
  <motion.div
    className={`absolute bottom-0 ${side === "left" ? "left-4" : "right-4"} h-20 w-10`}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 0.7 }}
    transition={{ duration: 1.5, delay: 0.5 }}
  >
    <motion.div
      className="relative w-full h-full"
      animate={{ 
        rotateZ: [0, side === "left" ? 1.5 : -1.5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-3xl opacity-70" />
      
      {skills.slice(0, 2).map((skill, i) => (
        <motion.div
          key={i}
          className="absolute w-5 h-5 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full border border-pink-300 flex items-center justify-center shadow-md"
          style={{ 
            left: `${15 + (i % 2) * 40}%`, 
            top: `${30 + (i * 25)}%`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          <skill.icon className="w-2.5 h-2.5 text-orange-800" />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

// Simplified sea anemone
const SkillAnemone = ({ position, skills, color = "pink" }) => {
  const colorVariants = useMemo(() => ({
    pink: "from-pink-500 to-purple-400",
    orange: "from-orange-500 to-red-400",
    yellow: "from-yellow-500 to-orange-400"
  }), []);

  return (
    <motion.div
      className={`absolute ${position} w-12 h-12`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ 
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {skills.slice(0, 3).map((skill, i) => (
          <motion.div
            key={i}
            className={`absolute bottom-0 w-1.5 h-6 bg-gradient-to-t ${colorVariants[color]} rounded-full opacity-80 flex items-center justify-center`}
            style={{
              left: `${25 * i}%`,
              transformOrigin: "bottom center",
              transform: `rotate(${(i - 1) * 12}deg)`,
            }}
            animate={{
              rotateZ: [(i - 1) * 12 - 3, (i - 1) * 12 + 3, (i - 1) * 12 - 3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <skill.icon className="w-1.5 h-1.5 text-white" />
          </motion.div>
        ))}
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-t from-yellow-400 to-orange-300 rounded-full flex items-center justify-center">
          <span className="text-xs">⚡</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Optimized skill pearl component
const SkillPearl = ({ skill, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const skillCategories = useMemo(() => ({
    "JavaScript": { color: "from-yellow-400 to-orange-500", glow: "rgba(251, 191, 36, 0.4)", theme: "🌟" },
    "React": { color: "from-cyan-400 to-blue-500", glow: "rgba(34, 211, 238, 0.4)", theme: "🫧" },
    "Node.js": { color: "from-green-400 to-emerald-500", glow: "rgba(34, 197, 94, 0.4)", theme: "🌿" },
    "Python": { color: "from-blue-500 to-indigo-600", glow: "rgba(59, 130, 246, 0.4)", theme: "🐍" },
    "SQL": { color: "from-purple-400 to-violet-500", glow: "rgba(147, 51, 234, 0.4)", theme: "💎" },
    "Machine Learning": { color: "from-pink-400 to-rose-500", glow: "rgba(236, 72, 153, 0.4)", theme: "🧠" },
    "MongoDB": { color: "from-green-500 to-teal-500", glow: "rgba(20, 184, 166, 0.4)", theme: "🍃" },
    "Express.js": { color: "from-gray-400 to-slate-500", glow: "rgba(100, 116, 139, 0.4)", theme: "⚡" }
  }), []);

  const category = skillCategories[skill.label] || skillCategories["JavaScript"];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 15, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000, type: "spring", stiffness: 100 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-3 bg-gradient-to-br from-orange-100/80 to-yellow-100/80 backdrop-blur-sm border-2 border-orange-300/40 rounded-xl shadow-lg cursor-pointer overflow-hidden"
        whileHover={{ 
          scale: 1.03,
          boxShadow: `0 6px 15px ${category.glow}`,
        }}
        animate={{
          y: [0, -1, 0],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Theme indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-xs shadow-md border border-white"
          animate={{ 
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <span>{category.theme}</span>
        </motion.div>

        {/* Skill content */}
        <div className="relative z-10 text-center">
          <motion.div
            className="relative mb-2"
            animate={{ 
              y: isHovered ? -1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-8 h-8 mx-auto bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-md border border-white/20`}>
              <skill.icon className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          <h3 className="text-xs font-bold text-orange-800 mb-1">
            {skill.label}
          </h3>

          {/* Skill level indicator */}
          <div className="flex justify-center gap-0.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Simplified treasure chest
const TreasureChest = ({ position }) => (
  <motion.div
    className={`absolute ${position} text-lg`}
    animate={{ 
      y: [0, -4, 0],
      scale: [1, 1.02, 1]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  >
    💰
  </motion.div>
);

function Skills() {
  const [showContent, setShowContent] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = useMemo(() => [
  { icon: Code, label: "JavaScript" },
  { icon: Globe, label: "React" },
  { icon: Server, label: "Node.js" },
  { icon: Brain, label: "Python" },
  { icon: Database, label: "SQL" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Layers, label: "MongoDB" },
  { icon: Zap, label: "Express.js" },
  { icon: Server, label: "Flask" },
  { icon: Code, label: "PHP" },
  { icon: Database, label: "MySQL" },
  { icon: Brain, label: "NLP" },
  { icon: Globe, label: "Tableau" },
  { icon: ChevronLeft, label: "Matplotlib" },
  { icon: Cpu, label: "Plotly" },
  { icon: Brain, label: "Seaborn" },
  { icon: Cpu, label: "Scikit-learn" },
], []);

  // Group skills for coral formations
  const leftCoralSkills = useMemo(() => skills.slice(0, 4), [skills]);
  const rightCoralSkills = useMemo(() => skills.slice(4, 8), [skills]);
  const anemoneSkills1 = useMemo(() => skills.slice(0, 3), [skills]);
  const anemoneSkills2 = useMemo(() => skills.slice(3, 6), [skills]);
  const anemoneSkills3 = useMemo(() => skills.slice(6, 8), [skills]);

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-200 text-gray-800 overflow-hidden relative h-screen flex flex-col">
      {/* Underwater environment effects */}
      <SunlightRays />
      <FloatingCoralParticles />
      
      {/* Navigation */}
      <NavigationBar />

      {/* Coral skill formations */}
      <SkillCoral side="left" skills={leftCoralSkills} />
      <SkillCoral side="right" skills={rightCoralSkills} />

      {/* Sea anemone skill displays */}
      <SkillAnemone position="bottom-6 left-1/4" skills={anemoneSkills1} color="pink" />
      <SkillAnemone position="bottom-8 right-1/3" skills={anemoneSkills2} color="orange" />
      <SkillAnemone position="bottom-4 left-2/3" skills={anemoneSkills3} color="yellow" />

      {/* Swimming tech fish - reduced instances */}
      <TechFish delay={0} skill="javascript" />
      <TechFish delay={6} skill="react" />
      <TechFish delay={12} skill="python" />

      {/* Treasure chests */}
      <TreasureChest position="top-1/4 right-12" />
      <TreasureChest position="top-2/3 left-8" />

      {showContent && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-20">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-orange-600 drop-shadow-lg mb-2"
              animate={{ 
                y: [0, -1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🏝️ Skill Treasure Reef
            </motion.h1>
            <motion.p
              className="text-sm text-orange-800 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover the precious pearls of technology hidden in the depths of the coral reef
            </motion.p>
          </motion.div>

          <motion.div
            className={`grid ${showAllSkills ? 'grid-cols-3 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'} gap-3 max-w-3xl w-full mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {visibleSkills.map((skill, index) => (
              <SkillPearl
                key={index}
                skill={skill}
                index={index}
                delay={900 + (index * 80)}
              />
            ))}
          </motion.div>

          <motion.button
            className="px-5 py-2 text-sm font-semibold text-orange-800 bg-gradient-to-r from-yellow-200/80 to-orange-200/80 backdrop-blur-sm border-2 border-orange-300/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4"
            onClick={() => setShowAllSkills((prev) => !prev)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{
              boxShadow: "0 0 12px rgba(251, 146, 60, 0.3)"
            }}
          >
            {showAllSkills ? "🐚 Hide Treasures" : "🗝️ Discover More"}
          </motion.button>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <NavigationControls next="/projects" prev="/" />
          </motion.div>

          {/* Floating instruction */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, y: [0, -3, 0] }}
            transition={{ 
              opacity: { delay: 2.5, duration: 0.8 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="text-orange-600 text-xs font-medium opacity-70 flex items-center gap-2">
              <span>🌊</span>
              Hover over pearls to see them shimmer
            </div>
          </motion.div>
        </div>
      )}

      {/* Reduced ambient coral particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ambient-coral-${i}`}
            className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-50"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;