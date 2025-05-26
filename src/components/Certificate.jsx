import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationBar from "./Navbar";
import NavigationControls from "../components/NavigationControls";
import { Award, Shield, Cloud, Palette, BarChart3, BarChart2, Bot, Globe, Code, Database, Cpu, Zap, Star } from "lucide-react";

// Reduced floating coral particles
const FloatingCoralParticles = () => {
  const particles = Array.from({ length: 4 }, (_, i) => i);
  
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
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Simplified sunlight rays
const SunlightRays = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(2)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-0 w-1 bg-gradient-to-b from-yellow-200 via-orange-100 to-transparent opacity-10"
        style={{
          left: `${30 + i * 25}%`,
          height: "70%",
        }}
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scaleX: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: i * 1.2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Optimized certificate fish - fewer animations
const CertificateFish = ({ delay = 0, certType = "default" }) => {
  const certFish = {
    web: { emoji: "🐠", color: "text-blue-400", badge: "🌐" },
    ai: { emoji: "🐡", color: "text-purple-400", badge: "🤖" },
    data: { emoji: "🐟", color: "text-green-400", badge: "📊" },
    security: { emoji: "🦑", color: "text-red-400", badge: "🔐" },
    cloud: { emoji: "🐋", color: "text-cyan-400", badge: "☁️" },
    design: { emoji: "🦈", color: "text-pink-400", badge: "🎨" },
    default: { emoji: "🐠", color: "text-orange-400", badge: "🏆" }
  };

  const fish = certFish[certType] || certFish.default;

  return (
    <motion.div
      className="absolute -left-20"
      style={{ top: `${15 + Math.random() * 50}%` }}
      initial={{ x: -150 }}
      animate={{ 
        x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1400,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    >
      <div className={`relative text-lg ${fish.color}`}>
        <div className="relative">
          {fish.emoji}
          <span className="absolute -top-1 -right-1 text-xs bg-yellow-200/90 px-1 rounded-full text-yellow-800 font-bold border border-yellow-300">
            {fish.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Simplified coral formations
const CertificateCoral = ({ side, certs }) => (
  <motion.div
    className={`absolute bottom-0 ${side === "left" ? "left-2" : "right-2"} h-20 w-10`}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 0.6 }}
    transition={{ duration: 2, delay: 0.5 }}
  >
    <div className="relative w-full h-full">
      {/* Main coral structure */}
      <div className="absolute bottom-0 w-full h-4/5 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-2xl opacity-70" />
      
      {/* Simplified certificate badge polyps */}
      {certs.slice(0, 2).map((cert, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full border border-pink-300 flex items-center justify-center shadow-md"
          style={{ 
            left: `${15 + (i % 2) * 25}%`, 
            top: `${30 + (i * 25)}%`,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          <cert.iconComponent className="w-2 h-2 text-orange-800" />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Simplified treasure chest
const TreasureChest = ({ position, count }) => (
  <motion.div
    className={`absolute ${position} text-lg`}
    animate={{ 
      y: [0, -2, 0],
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  >
    <div className="relative">
      💰
      {count && (
        <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white px-1 rounded-full font-bold">
          {count}
        </span>
      )}
    </div>
  </motion.div>
);

// Optimized Certificate Card - reduced animations
const CertificateCard = ({ certificate, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const certTypes = {
    "Web Development": { 
      gradient: "from-blue-400 to-cyan-500", 
      glow: "rgba(59, 130, 246, 0.4)", 
      theme: "🌊",
      icon: Globe 
    },
    "AI & ML": { 
      gradient: "from-purple-400 to-violet-500", 
      glow: "rgba(147, 51, 234, 0.4)", 
      theme: "🧠",
      icon: Bot 
    },
    "Data Science": { 
      gradient: "from-green-400 to-emerald-500", 
      glow: "rgba(34, 197, 94, 0.4)", 
      theme: "📈",
      icon: BarChart3 
    },
    "Data Analytics": { 
  gradient: "from-blue-400 to-cyan-500", 
  glow: "rgba(59, 130, 246, 0.4)", 
  theme: "📊",
  icon: BarChart3 
},

    "Cloud Computing": { 
      gradient: "from-cyan-400 to-sky-500", 
      glow: "rgba(34, 211, 238, 0.4)", 
      theme: "☁️",
      icon: Cloud 
    },
    "UI/UX Design": { 
      gradient: "from-pink-400 to-rose-500", 
      glow: "rgba(236, 72, 153, 0.4)", 
      theme: "🎨",
      icon: Palette 
    }
  };

  const certType = certTypes[certificate.title] || certTypes["Web Development"];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: delay / 1000, 
        type: "spring", 
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-3 bg-gradient-to-br from-orange-50/90 to-yellow-50/90 backdrop-blur-lg border-2 border-orange-200/60 rounded-xl shadow-lg cursor-pointer overflow-hidden h-28"
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 6px 15px ${certType.glow}`,
          borderColor: "rgba(251, 146, 60, 0.7)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Certificate ribbon */}
        <motion.div
          className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${certType.gradient} opacity-0 rounded-bl-xl`}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Achievement badge - simplified animation */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xs shadow-md border border-white"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-xs">{certType.theme}</span>
        </motion.div>

        {/* Certificate content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header with icon */}
          <div className="flex items-center mb-1">
            <div className={`w-7 h-7 mr-2 bg-gradient-to-br ${certType.gradient} rounded-lg flex items-center justify-center shadow-sm border border-white/30`}>
              <certType.icon className="w-3 h-3 text-white drop-shadow-sm" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-bold text-orange-800 leading-tight truncate">
                {certificate.title}
              </h3>
              <p className="text-xs text-orange-600 font-medium truncate">
                {certificate.issuer}
              </p>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-xs text-orange-700 leading-snug mb-2 flex-1 line-clamp-2"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {certificate.description}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-orange-700 bg-orange-100/80 px-2 py-0.5 rounded-full font-medium border border-orange-200">
              {certificate.year}
            </span>
            
            <div className="flex items-center gap-0.5">
              {[...Array(3)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-2 h-2 text-yellow-500 fill-current" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Simplified glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-200/5 to-blue-200/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

// Main Certificates Component
function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const certificates = [
    { 
      title: "Web Development", 
      issuer: "Intrainz", 
      description: "Comprehensive full-stack web development covering modern frameworks and best practices.", 
      year: "2024", 
      icon: "🌐",
      iconComponent: Globe
    },
    { 
      title: "AI & ML", 
      issuer: "Intrainz", 
      description: "Introduction to artificial intelligence and machine learning models with practical applications.", 
      year: "2024", 
      icon: "🤖",
      iconComponent: Bot
    },
    { 
      title: "Data Science", 
      issuer: "Scaler", 
      description: "Advanced data analysis, statistical modeling, and data visualization techniques.", 
      year: "2024", 
      icon: "📊",
      iconComponent: BarChart3
    },
    { 
      title: "Data Analytics", 
      issuer: "NullClass", 
      description: "Hands-on training in data wrangling, visualization, and statistical analysis using real-world datasets.", 
      year: "2024", 
      icon: "📊",
      iconComponent: BarChart2

    },
    { 
      title: "Cloud Computing", 
      issuer: "AWS", 
      description: "Amazon Web Services fundamentals including cloud architecture and deployment.", 
      year: "2024", 
      icon: "☁️",
      iconComponent: Cloud
    },
    { 
      title: "UI/UX Design", 
      issuer: "Coursera", 
      description: "User-centered design principles, prototyping, and interface design methodology.", 
      year: "2023", 
      icon: "🎨",
      iconComponent: Palette
    }
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  // Group certificates for coral formations
  const leftCoralCerts = certificates.slice(0, 3);
  const rightCoralCerts = certificates.slice(3, 6);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-200 text-gray-800 overflow-hidden relative min-h-screen flex flex-col">
      {/* Underwater environment effects */}
      <SunlightRays />
      <FloatingCoralParticles />
      
      {/* Navigation */}
      <NavigationBar />

      {/* Coral formations with certificates */}
      <CertificateCoral side="left" certs={leftCoralCerts} />
      <CertificateCoral side="right" certs={rightCoralCerts} />

      {/* Swimming certificate fish - reduced count */}
      <CertificateFish delay={0} certType="web" />
      <CertificateFish delay={4} certType="ai" />
      <CertificateFish delay={8} certType="data" />
      <CertificateFish delay={12} certType="security" />

      {/* Treasure chests */}
      <TreasureChest position="top-16 right-8" count={certificates.length} />
      <TreasureChest position="top-20 left-4" />

      {showContent && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-4 relative z-20 mt-5">
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h1
              className="text-lg md:text-xl font-bold text-orange-600 drop-shadow-xl mb-1"
              style={{
                textShadow: "0 0 20px rgba(234, 88, 12, 0.5)",
              }}
            >
              🏆 Certificate Treasury
            </motion.h1>
            <motion.p
              className="text-xs md:text-sm text-orange-800 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Professional achievements and certifications earned in the depths of knowledge
            </motion.p>
          </motion.div>

          <motion.div
            className={`grid ${showAll ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-2'} gap-3 max-w-3xl w-full mb-3`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {visibleCertificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                certificate={certificate}
                index={index}
                delay={600 + (index * 100)}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2 text-sm font-semibold text-orange-800 bg-gradient-to-r from-yellow-200/80 to-orange-200/80 backdrop-blur-sm border-2 border-orange-300/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{
                boxShadow: "0 0 15px rgba(251, 146, 60, 0.4)"
              }}
            >
              {showAll ? "🐚 Show Core Certificates" : "🗝️ Discover All Treasures"}
            </motion.button>

            <p className="text-xs text-orange-700 bg-orange-100/70 px-3 py-1 rounded-lg border border-orange-200">
              🎖️ {certificates.length} Professional Certifications Earned
            </p>

            <NavigationControls next="/contact" prev="/projects" />
          </motion.div>

          {/* Floating instruction */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="text-orange-600 text-xs font-medium flex items-center gap-2">
              <span>🌊</span>
              Hover certificates to see them glow like treasures
            </div>
          </motion.div>
        </div>
      )}

      {/* Simplified ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`cert-particle-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;