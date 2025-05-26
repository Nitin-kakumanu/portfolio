import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationControls from "../components/NavigationControls";
import NavigationBar from "./Navbar";
import { Code, Database, Brain, Globe, Server, Cpu, Zap, Layers, Shield, GitBranch, Smartphone, Cloud, ChevronLeft } from "lucide-react";

// Floating coral particles component
const FloatingCoralParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i);
  
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

// Sunlight rays through water - matching home page
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

// Swimming tech fish - coral themed
const TechFish = ({ delay = 0, skill = "default" }) => {
  const skillFish = {
    javascript: { emoji: "🐠", color: "text-yellow-400", circuit: "JS" },
    react: { emoji: "🐟", color: "text-cyan-400", circuit: "⚛️" },
    python: { emoji: "🦑", color: "text-blue-400", circuit: "🐍" },
    nodejs: { emoji: "🐡", color: "text-green-400", circuit: "⚡" },
    default: { emoji: "🐠", color: "text-orange-400", circuit: "💻" }
  };

  const fish = skillFish[skill] || skillFish.default;

  return (
    <motion.div
      className="absolute -left-20"
      style={{ top: `${20 + Math.random() * 40}%` }}
      initial={{ x: -150, y: 0 }}
      animate={{ 
        x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1400,
        y: [0, -15, 10, 0],
        rotateY: [0, 10, -10, 0]
      }}
      transition={{
        duration: 16 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    >
      <motion.div
        className={`relative text-2xl ${fish.color}`}
        animate={{ 
          scale: [1, 1.1, 1],
          filter: [
            "drop-shadow(0 0 5px currentColor)",
            "drop-shadow(0 0 12px currentColor)",
            "drop-shadow(0 0 5px currentColor)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          {fish.emoji}
          <motion.span
            className="absolute -top-1 -right-1 text-xs bg-orange-200/80 px-1 rounded-full text-orange-800 font-bold"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {fish.circuit}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Coral skill formations - like home page corals but tech-themed
const SkillCoral = ({ side, skills }) => (
  <motion.div
    className={`absolute bottom-0 ${side === "left" ? "left-4" : "right-4"} h-24 w-12`}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 0.8 }}
    transition={{ duration: 2, delay: 0.5 }}
  >
    <motion.div
      className="relative w-full h-full"
      animate={{ 
        rotateZ: [0, side === "left" ? 2 : -2, 0],
        scaleX: [1, 1.03, 1] 
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Main coral structure */}
      <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-3xl opacity-80" />
      
      {/* Tech skill polyps */}
      {skills.slice(0, 3).map((skill, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full border-2 border-pink-300 flex items-center justify-center shadow-lg"
          style={{ 
            left: `${10 + (i % 2) * 30}%`, 
            top: `${25 + (i * 20)}%`,
            fontSize: '10px'
          }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 8px rgba(251, 191, 36, 0.5)",
              "0 0 15px rgba(251, 191, 36, 0.8)",
              "0 0 8px rgba(251, 191, 36, 0.5)"
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          <skill.icon className="w-3 h-3 text-orange-800" />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

// Sea anemone skill displays
const SkillAnemone = ({ position, skills, color = "pink" }) => {
  const colorVariants = {
    pink: "from-pink-500 to-purple-400",
    orange: "from-orange-500 to-red-400",
    yellow: "from-yellow-500 to-orange-400"
  };

  return (
    <motion.div
      className={`absolute ${position} w-16 h-16`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.8, scale: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ 
          scale: [1, 1.05, 1],
          rotateZ: [0, 3, -3, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Anemone tentacles with skill icons */}
        {skills.slice(0, 4).map((skill, i) => (
          <motion.div
            key={i}
            className={`absolute bottom-0 w-2 h-10 bg-gradient-to-t ${colorVariants[color]} rounded-full opacity-85 flex items-center justify-center`}
            style={{
              left: `${20 * i}%`,
              transformOrigin: "bottom center",
              transform: `rotate(${(i - 2) * 15}deg)`,
            }}
            animate={{
              rotateZ: [(i - 2) * 15 - 5, (i - 2) * 15 + 5, (i - 2) * 15 - 5],
              scaleY: [1, 1.15, 1],
            }}
            transition={{
              duration: 4 + Math.random(),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <skill.icon className="w-2 h-2 text-white drop-shadow-md" />
          </motion.div>
        ))}
        
        {/* Anemone center */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-t from-yellow-400 to-orange-300 rounded-full flex items-center justify-center shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 8px rgba(251, 191, 36, 0.5)",
              "0 0 15px rgba(251, 191, 36, 0.8)",
              "0 0 8px rgba(251, 191, 36, 0.5)"
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-xs">⚡</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Individual skill pearl component
const SkillPearl = ({ skill, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const skillCategories = {
    "JavaScript": { color: "from-yellow-400 to-orange-500", glow: "rgba(251, 191, 36, 0.4)", theme: "🌟" },
    "React": { color: "from-cyan-400 to-blue-500", glow: "rgba(34, 211, 238, 0.4)", theme: "🫧" },
    "Node.js": { color: "from-green-400 to-emerald-500", glow: "rgba(34, 197, 94, 0.4)", theme: "🌿" },
    "Python": { color: "from-blue-500 to-indigo-600", glow: "rgba(59, 130, 246, 0.4)", theme: "🐍" },
    "SQL": { color: "from-purple-400 to-violet-500", glow: "rgba(147, 51, 234, 0.4)", theme: "💎" },
    "Machine Learning": { color: "from-pink-400 to-rose-500", glow: "rgba(236, 72, 153, 0.4)", theme: "🧠" },
    "MongoDB": { color: "from-green-500 to-teal-500", glow: "rgba(20, 184, 166, 0.4)", theme: "🍃" },
    "Express.js": { color: "from-gray-400 to-slate-500", glow: "rgba(100, 116, 139, 0.4)", theme: "⚡" }
  };

  const category = skillCategories[skill.label] || skillCategories["JavaScript"];

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
        className="relative p-3 bg-gradient-to-br from-orange-100/80 to-yellow-100/80 backdrop-blur-lg border-2 border-orange-300/40 rounded-xl shadow-lg cursor-pointer overflow-hidden"
        whileHover={{ 
          scale: 1.05,
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

        {/* Floating theme indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-xs shadow-md border border-white"
          animate={{ 
            rotate: [0, 360],
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered 
              ? "0 0 12px rgba(251, 146, 60, 0.6)" 
              : "0 2px 6px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.3 },
            boxShadow: { duration: 0.3 }
          }}
        >
          <span>{category.theme}</span>
        </motion.div>

        {/* Skill content */}
        <div className="relative z-10 text-center">
          {/* Icon */}
          <motion.div
            className="relative mb-2"
            animate={{ 
              y: isHovered ? -1 : 0,
              rotateY: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-8 h-8 mx-auto bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-md border border-white/20`}>
              <skill.icon className="w-4 h-4 text-white drop-shadow-sm" />
            </div>
            
            {/* Underwater bubble effect */}
            <motion.div
              className="absolute -inset-1 rounded-lg"
              animate={{
                boxShadow: [
                  "0 0 8px rgba(34, 211, 238, 0.2)",
                  "0 0 15px rgba(34, 211, 238, 0.4)",
                  "0 0 8px rgba(34, 211, 238, 0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Skill label */}
          <motion.h3
            className="text-xs font-bold text-orange-800 mb-1"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: (delay / 1000) + 0.2 }}
          >
            {skill.label}
          </motion.h3>

          {/* Skill level indicator (coral polyps) */}
          <div className="flex justify-center gap-0.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
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

// Floating treasure chests with skills
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

function Skills() {
  const [showContent, setShowContent] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = [
    { icon: Code, label: "JavaScript" },
    { icon: Globe, label: "React" },
    { icon: Server, label: "Node.js" },
    { icon: Brain, label: "Python" },
    { icon: Database, label: "SQL" },
    { icon: Cpu, label: "Machine Learning" },
    { icon: Layers, label: "MongoDB" },
    { icon: Zap, label: "Express.js" },
  ];

  // Group skills for coral formations
  const leftCoralSkills = skills.slice(0, 4);
  const rightCoralSkills = skills.slice(4, 8);
  const anemoneSkills1 = skills.slice(0, 3);
  const anemoneSkills2 = skills.slice(3, 6);
  const anemoneSkills3 = skills.slice(6, 8);

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-200 text-gray-800 overflow-hidden relative h-screen flex flex-col">
      {/* Underwater environment effects - matching home page */}
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

      {/* Swimming tech fish */}
      <TechFish delay={0} skill="javascript" />
      <TechFish delay={8} skill="react" />
      <TechFish delay={16} skill="python" />
      <TechFish delay={24} skill="nodejs" />

      {/* Treasure chests */}
      <TreasureChest position="top-1/4 right-12" />
      <TreasureChest position="top-2/3 left-8" />
      <TreasureChest position="top-1/2 right-6" />

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
              🏝️ Skill Treasure Reef
            </motion.h1>
            <motion.p
              className="text-sm text-orange-800 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Discover the precious pearls of technology hidden in the depths of the coral reef
            </motion.p>
          </motion.div>

          <motion.div
            className={`grid ${showAllSkills ? 'grid-cols-3 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'} gap-3 max-w-3xl w-full mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {visibleSkills.map((skill, index) => (
              <SkillPearl
                key={index}
                skill={skill}
                index={index}
                delay={1200 + (index * 100)}
              />
            ))}
          </motion.div>

          <motion.button
            className="px-5 py-2 text-sm font-semibold text-orange-800 bg-gradient-to-r from-yellow-200/80 to-orange-200/80 backdrop-blur-sm border-2 border-orange-300/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4"
            onClick={() => setShowAllSkills((prev) => !prev)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            whileHover={{
              boxShadow: "0 0 15px rgba(251, 146, 60, 0.4)"
            }}
          >
            {showAllSkills ? "🐚 Hide Treasures" : "🗝️ Discover More"}
          </motion.button>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <NavigationControls next="/projects" prev="/" />
          </motion.div>

          {/* Floating instruction */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -5, 0],  opacity: 0.6  }}
            transition={{ duration: 3, repeat: Infinity, delay: 3, duration: 1 }}
            initial={{ opacity: 0 }}
            // animate={{ opacity: 0.6 }}
            // transition={{ delay: 3, duration: 1 }}
          >
            <div className="text-orange-600 text-xs font-medium opacity-70 flex items-center gap-2">
              <span>🌊</span>
              Hover over pearls to see them shimmer
            </div>
          </motion.div>
        </div>
      )}

      {/* Ambient coral particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
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

export default Skills;