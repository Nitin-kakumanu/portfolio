import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationBar from "./Navbar";
import NavigationControls from "../components/NavigationControls";
import { Award, Shield, Cloud, Palette, BarChart3, Bot, Globe, Code, Database, Cpu, Zap, Star } from "lucide-react";

// Floating coral particles - matching skills page
const FloatingCoralParticles = () => {
  const particles = Array.from({ length: 8 }, (_, i) => i);
  
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
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Sunlight rays through water
const SunlightRays = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-0 w-1 bg-gradient-to-b from-yellow-200 via-orange-100 to-transparent opacity-15"
        style={{
          left: `${25 + i * 20}%`,
          height: "80%",
          transformOrigin: "top",
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scaleX: [1, 1.2, 1],
          rotateZ: [0, 0.5, -0.5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Swimming certificate fish
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
      initial={{ x: -150, y: 0 }}
      animate={{ 
        x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1400,
        y: [0, -8, 5, 0],
        rotateY: [0, 5, -5, 0]
      }}
      transition={{
        duration: 18 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    >
      <motion.div
        className={`relative text-lg ${fish.color}`}
        animate={{ 
          scale: [1, 1.05, 1],
          filter: [
            "drop-shadow(0 0 4px currentColor)",
            "drop-shadow(0 0 10px currentColor)",
            "drop-shadow(0 0 4px currentColor)"
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="relative">
          {fish.emoji}
          <motion.span
            className="absolute -top-1 -right-1 text-xs bg-yellow-200/90 px-1 rounded-full text-yellow-800 font-bold border border-yellow-300"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            {fish.badge}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Coral formations with certificate themes
const CertificateCoral = ({ side, certs }) => (
  <motion.div
    className={`absolute bottom-0 ${side === "left" ? "left-2" : "right-2"} h-20 w-10`}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 0.7 }}
    transition={{ duration: 2.5, delay: 0.8 }}
  >
    <motion.div
      className="relative w-full h-full"
      animate={{ 
        rotateZ: [0, side === "left" ? 1 : -1, 0],
        scaleX: [1, 1.01, 1] 
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Main coral structure */}
      <div className="absolute bottom-0 w-full h-4/5 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-2xl opacity-75" />
      
      {/* Certificate badge polyps */}
      {certs.slice(0, 2).map((cert, i) => (
        <motion.div
          key={i}
          className="absolute w-5 h-5 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full border border-pink-300 flex items-center justify-center shadow-md text-xs"
          style={{ 
            left: `${10 + (i % 2) * 30}%`, 
            top: `${25 + (i * 30)}%`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 6px rgba(251, 191, 36, 0.5)",
              "0 0 12px rgba(251, 191, 36, 0.7)",
              "0 0 6px rgba(251, 191, 36, 0.5)"
            ],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <cert.iconComponent className="w-2 h-2 text-orange-800" />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

// Treasure chest for achievements
const TreasureChest = ({ position, count }) => (
  <motion.div
    className={`absolute ${position} text-lg`}
    animate={{ 
      y: [0, -3, 0],
      rotateZ: [0, 1, -1, 0],
      scale: [1, 1.01, 1]
    }}
    transition={{ 
      duration: 5.5, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  >
    <motion.div
      className="relative"
      animate={{
        filter: [
          "drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))",
          "drop-shadow(0 0 12px rgba(251, 191, 36, 0.8))",
          "drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))"
        ]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      💰
      <motion.span
        className="absolute -top-1 -right-2 text-xs bg-red-500 text-white px-1 rounded-full font-bold"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {count}
      </motion.span>
    </motion.div>
  </motion.div>
);

// Enhanced Certificate Card - Made smaller
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
    "Cybersecurity": { 
      gradient: "from-red-400 to-rose-500", 
      glow: "rgba(239, 68, 68, 0.4)", 
      theme: "🛡️",
      icon: Shield 
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
      initial={{ opacity: 0, y: 20, scale: 0.9, rotateY: -8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: delay / 1000, 
        type: "spring", 
        stiffness: 120,
        damping: 12
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-3 bg-gradient-to-br from-orange-50/90 to-yellow-50/90 backdrop-blur-lg border-2 border-orange-200/60 rounded-xl shadow-lg cursor-pointer overflow-hidden h-28"
        whileHover={{ 
          scale: 1.03,
          boxShadow: `0 8px 20px ${certType.glow}`,
          borderColor: "rgba(251, 146, 60, 0.7)",
          rotateY: 1
        }}
        animate={{
          y: [0, -0.5, 0],
          boxShadow: isHovered 
            ? `0 6px 15px ${certType.glow}` 
            : "0 3px 10px rgba(251, 146, 60, 0.2)"
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 0.3 }
        }}
      >
        {/* Certificate ribbon */}
        <motion.div
          className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${certType.gradient} opacity-0 rounded-bl-xl`}
          animate={{ opacity: isHovered ? 0.12 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating achievement badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xs shadow-md border border-white"
          animate={{ 
            rotate: [0, 360],
            scale: isHovered ? 1.05 : 1,
            boxShadow: isHovered 
              ? "0 0 12px rgba(251, 191, 36, 0.6)" 
              : "0 2px 6px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.3 },
            boxShadow: { duration: 0.3 }
          }}
        >
          <span className="text-xs">{certType.theme}</span>
        </motion.div>

        {/* Certificate content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header with icon */}
          <motion.div
            className="flex items-center mb-1"
            animate={{ 
              y: isHovered ? -0.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-7 h-7 mr-2 bg-gradient-to-br ${certType.gradient} rounded-lg flex items-center justify-center shadow-sm border border-white/30`}>
              <certType.icon className="w-3 h-3 text-white drop-shadow-sm" />
            </div>
            
            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-xs font-bold text-orange-800 leading-tight truncate"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: (delay / 1000) + 0.2 }}
              >
                {certificate.title}
              </motion.h3>
              <motion.p
                className="text-xs text-orange-600 font-medium truncate"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: (delay / 1000) + 0.3 }}
              >
                {certificate.issuer}
              </motion.p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xs text-orange-700 leading-snug mb-2 flex-1 line-clamp-2"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: (delay / 1000) + 0.4 }}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {certificate.description}
          </motion.p>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <motion.span
              className="text-xs text-orange-700 bg-orange-100/80 px-2 py-0.5 rounded-full font-medium border border-orange-200"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(251, 146, 60, 0.3)",
                  "0 0 6px rgba(251, 146, 60, 0.4)",
                  "0 0 0px rgba(251, 146, 60, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {certificate.year}
            </motion.span>
            
            <motion.div
              className="flex items-center gap-0.5"
              animate={{
                scale: [1, 1.03, 1]
              }}
              transition={{ duration: 2.5, repeat:  Infinity }}
            >
              {[...Array(3)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-2 h-2 text-yellow-500 fill-current" 
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Underwater glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            background: [
              "radial-gradient(circle at 30% 70%, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0) 100%)",
              "radial-gradient(circle at 30% 70%, rgba(34, 211, 238, 0.04) 15%, rgba(34, 211, 238, 0) 50%)",
              "radial-gradient(circle at 30% 70%, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0) 100%)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
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
      title: "Cybersecurity", 
      issuer: "Google", 
      description: "Essential security principles, threat detection, and cybersecurity best practices.", 
      year: "2024", 
      icon: "🔐",
      iconComponent: Shield
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
    const timer = setTimeout(() => setShowContent(true), 600);
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

      {/* Swimming certificate fish */}
      <CertificateFish delay={0} certType="web" />
      <CertificateFish delay={3} certType="ai" />
      <CertificateFish delay={6} certType="data" />
      <CertificateFish delay={9} certType="security" />
      <CertificateFish delay={12} certType="cloud" />
      <CertificateFish delay={15} certType="design" />

      {/* Treasure chests showing achievement count */}
      <TreasureChest position="top-16 right-8" count={certificates.length} />
      <TreasureChest position="top-20 left-4"  />
      <TreasureChest position="top-24 right-2"  />

      {showContent && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-4 relative z-20 mt-5">
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-lg md:text-xl font-bold text-orange-600 drop-shadow-xl mb-1"
              style={{
                textShadow: "0 0 20px rgba(234, 88, 12, 0.5)",
              }}
              animate={{ 
                y: [0, -1, 0],
                textShadow: [
                  "0 0 20px rgba(234, 88, 12, 0.5)",
                  "0 0 25px rgba(234, 88, 12, 0.6)",
                  "0 0 20px rgba(234, 88, 12, 0.5)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🏆 Certificate Treasury
            </motion.h1>
            <motion.p
              className="text-xs md:text-sm text-orange-800 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Professional achievements and certifications earned in the depths of knowledge
            </motion.p>
          </motion.div>

          <motion.div
            className={`grid ${showAll ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-2'} gap-3 max-w-3xl w-full mb-3`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {visibleCertificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                certificate={certificate}
                index={index}
                delay={1200 + (index * 120)}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2 mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
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

            <motion.p
              className="text-xs text-orange-700 bg-orange-100/70 px-3 py-1 rounded-lg border border-orange-200"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(251, 146, 60, 0.3)",
                  "0 0 8px rgba(251, 146, 60, 0.4)",
                  "0 0 0px rgba(251, 146, 60, 0.3)"
                ]
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              🎖️ {certificates.length} Professional Certifications Earned
            </motion.p>

            <NavigationControls next="/contact" prev="/projects" />
          </motion.div>

          {/* Floating instruction */}
          <motion.div
            className="text-center"
            animate={{ y: [0, -2, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 3 }}
            initial={{ opacity: 0 }}
          >
            <div className="text-orange-600 text-xs font-medium flex items-center gap-2">
              <span>🌊</span>
              Hover certificates to see them glow like treasures
            </div>
          </motion.div>
        </div>
      )}

      {/* Ambient certificate particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`cert-particle-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              y: [0, -8, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;