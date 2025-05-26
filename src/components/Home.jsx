import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";
import profileImage from "../assets/nitin2.jpeg";
import NavigationBar from "./Navbar";
import NavigationControls from "./NavigationControls";
import LottieWrapper from "./LottieWrapper";

const bubblesAnim = "https://lottie.host/5keUeGJrDR.json";
const fishAnim = "https://lottiefiles.com/animation/fishes-8356973";
const shellAnim = "https://lottiefiles.com/animation/shell-9545412";

// Memoized floating sand particles component with reduced count
const FloatingSandParticles = () => {
  const particles = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 2
  })), []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-amber-200 rounded-full opacity-40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 12, -12, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1.2, 0.5],
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

// Optimized coral formation with simplified animations
const CoralFormation = ({ side = "left" }) => {
  const polyps = useMemo(() => Array.from({ length: 3 }, (_, i) => ({
    id: i,
    left: 20 + (i * 20),
    top: 30 + (i * 10),
    delay: i * 0.3
  })), []);

  return (
    <motion.div
      className={`absolute bottom-0 ${side === "left" ? "left-6" : "right-6"} h-40 w-12`}
      initial={{ scaleY: 1, opacity: 0.8 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ 
          rotateZ: [0, side === "left" ? 2 : -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main coral structure */}
        <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-3xl" />
        
        {/* Simplified coral branches */}
        <motion.div
          className="absolute bottom-1/2 left-1/4 w-6 h-16 bg-gradient-to-t from-pink-600 to-orange-400 rounded-full transform -rotate-12"
          animate={{ rotateZ: [-12, -8, -12] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-2/3 right-1/4 w-5 h-12 bg-gradient-to-t from-red-500 to-pink-400 rounded-full transform rotate-15"
          animate={{ rotateZ: [15, 18, 15] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Reduced coral polyps */}
        {polyps.map((polyp) => (
          <motion.div
            key={polyp.id}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full border border-orange-300"
            style={{ 
              left: `${polyp.left}%`, 
              top: `${polyp.top}%` 
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: polyp.delay,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

// Optimized sea anemone with fewer tentacles
const SeaAnemone = ({ position, color = "pink" }) => {
  const colorVariants = {
    pink: "from-pink-500 to-purple-400",
    orange: "from-orange-500 to-red-400",
    yellow: "from-yellow-500 to-orange-400"
  };

  const tentacles = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    id: i,
    rotation: (i - 3) * 20,
    delay: i * 0.2,
    duration: 3 + (i * 0.1)
  })), []);

  return (
    <motion.div
      className={`absolute ${position} w-16 h-20`}
      initial={{ opacity: 0.9, scale: 1 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Anemone tentacles */}
        {tentacles.map((tentacle) => (
          <motion.div
            key={tentacle.id}
            className={`absolute bottom-0 w-2 h-12 bg-gradient-to-t ${colorVariants[color]} rounded-full opacity-80`}
            style={{
              left: `${16.66 * tentacle.id}%`,
              transformOrigin: "bottom center",
              transform: `rotate(${tentacle.rotation}deg)`,
            }}
            animate={{
              rotateZ: [tentacle.rotation - 8, tentacle.rotation + 8, tentacle.rotation - 8],
            }}
            transition={{
              duration: tentacle.duration,
              repeat: Infinity,
              delay: tentacle.delay,
            }}
          />
        ))}
        
        {/* Anemone center */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-t from-yellow-400 to-orange-300 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

// Optimized exotic fish with stable animations
const ExoticFish = ({ delay = 0, type = "tropical" }) => {
  const [windowWidth, setWindowWidth] = useState(1400);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const fishTypes = {
    tropical: { emoji: "🐠", color: "text-orange-400", size: "text-4xl" },
    angel: { emoji: "🐟", color: "text-yellow-400", size: "text-3xl" },
    clown: { emoji: "🤡", color: "text-orange-500", size: "text-3xl" },
    exotic: { emoji: "🦑", color: "text-purple-400", size: "text-5xl" }
  };

  const fish = fishTypes[type];

  return (
    <motion.div
      className={`absolute top-1/3 -left-20 ${fish.size} ${fish.color}`}
      initial={{ x: -150, y: 0 }}
      animate={{ 
        x: windowWidth + 150,
        y: [0, -20, 15, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {fish.emoji}
      </motion.div>
    </motion.div>
  );
};

// Simplified sunlight rays
const SunlightRays = () => {
  const rays = useMemo(() => Array.from({ length: 4 }, (_, i) => ({
    id: i,
    left: 15 + i * 18,
    delay: i * 1
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {rays.map((ray) => (
        <motion.div
          key={ray.id}
          className="absolute top-0 w-2 bg-gradient-to-b from-yellow-200 via-orange-100 to-transparent opacity-25"
          style={{
            left: `${ray.left}%`,
            height: "100%",
            transformOrigin: "top",
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: ray.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Optimized floating creatures with reduced animation complexity
const FloatingCreatures = () => {
  const creatures = useMemo(() => [
    { emoji: "🦀", position: "top-1/4 right-20", size: "text-4xl", duration: 8 },
    { emoji: "🐚", position: "top-2/3 left-16", size: "text-3xl", duration: 6 },
    { emoji: "⭐", position: "top-1/2 right-12", size: "text-2xl", duration: 5 }
  ], []);

  return (
    <>
      {creatures.map((creature, i) => (
        <motion.div
          key={i}
          className={`absolute ${creature.position} ${creature.size}`}
          animate={{ 
            y: [0, -15, 0],
            x: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: creature.duration, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: i
          }}
        >
          {creature.emoji}
        </motion.div>
      ))}
    </>
  );
};

// Optimized profile image component
const ProfileImageComponent = () => {
  const bubbles = useMemo(() => Array.from({ length: 4 }, (_, i) => ({
    id: i,
    left: 10 + Math.cos(i * 90 * Math.PI / 180) * 80,
    top: 10 + Math.sin(i * 90 * Math.PI / 180) * 80,
    delay: i * 0.2
  })), []);

  return (
    <motion.div
      className="relative mb-4"
      initial={{ opacity: 1, scale: 1, y: 0 }}
    >
      {/* Underwater bubble effect around image */}
      <motion.div
        className="absolute -inset-2 rounded-full"
        animate={{
          boxShadow: [
            "0 0 15px 3px rgba(34, 211, 238, 0.3)",
            "0 0 20px 4px rgba(59, 130, 246, 0.4)",
            "0 0 15px 3px rgba(34, 211, 238, 0.3)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Profile container */}
      <motion.div
        className="relative w-32 h-32 rounded-full overflow-hidden border-3 border-orange-300/50 shadow-xl"
        animate={{ 
          y: [0, -4, 0],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Use actual profile image */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Water ripple effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-200/20 via-transparent to-blue-200/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating bubbles around profile */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${bubble.left}px`,
            top: `${bubble.top}px`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: bubble.delay,
          }}
        />
      ))}
    </motion.div>
  );
};

// Optimized ambient particles with reduced count
const AmbientParticles = () => {
  const particles = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random()
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-orange-300 rounded-full opacity-40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

function Home() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-200 text-gray-800 overflow-hidden relative h-screen">
      {/* Underwater environment effects */}
      <SunlightRays />
      <FloatingSandParticles />
      
      {/* Navigation */}
      <NavigationBar />

      {/* Coral formations */}
      <CoralFormation side="left" />
      <CoralFormation side="right" />
      
      {/* Sea anemones */}
      <SeaAnemone position="bottom-4 left-1/4" color="pink" />
      <SeaAnemone position="bottom-8 right-1/3" color="orange" />
      <SeaAnemone position="bottom-2 left-2/3" color="yellow" />

      {/* Exotic swimming creatures */}
      <ExoticFish delay={0} type="tropical" />
      <ExoticFish delay={8} type="angel" />
      <ExoticFish delay={16} type="exotic" />

      {/* Floating creatures */}
      <FloatingCreatures />

      {/* Enhanced Lottie Animations - Reduced count */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* Essential bubbles only */}
        <LottieWrapper 
          animationData={bubblesAnim} 
          className="bottom-0 left-10 w-28 h-28" 
        />
        <LottieWrapper 
          animationData={bubblesAnim} 
          className="bottom-10 right-12 w-20 h-20" 
        />
        
        {/* One fish animation */}
        <LottieWrapper 
          animationData={fishAnim} 
          className="top-40 left-0 w-36" 
        />
        
        {/* Treasure shell */}
        <LottieWrapper 
          animationData={shellAnim} 
          className="bottom-0 left-1/2 transform -translate-x-1/2 w-18" 
          loop={false} 
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="flex flex-col items-center justify-center h-screen text-center px-4 relative z-10 -mt-12"
        initial={{ opacity: 1, y: 0, scale: 1 }}
      >
        {/* Profile Image */}
        <ProfileImageComponent />

        {/* Title */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-orange-600 drop-shadow-xl relative mb-3"
          animate={{ 
            textShadow: [
              "0 0 15px rgba(234, 88, 12, 0.4)",
              "0 0 20px rgba(234, 88, 12, 0.5)",
              "0 0 15px rgba(234, 88, 12, 0.4)"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🏝️ Welcome to Coral Depths
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base text-orange-800 max-w-xl relative leading-snug mb-4"
          initial={{ opacity: 1, y: 0 }}
        >
          I'm{" "}
          <motion.span 
            className="text-red-600 font-bold relative inline-block px-1 py-0.5 rounded bg-yellow-200/50"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Nitin Kakumanu
          </motion.span>
          , a passionate{" "}
          <span className="text-pink-600 font-semibold">Web Developer</span> &{" "}
          <span className="text-purple-600 font-semibold">AI Explorer</span> diving deep into the coral reefs of technology.
        </motion.p>

        {/* Call to action */}
        <motion.div
          className="mb-4 p-3 bg-gradient-to-r from-orange-200/60 to-yellow-200/60 backdrop-blur-sm rounded-xl border border-orange-300/40"
          initial={{ opacity: 1, scale: 1 }}
        >
          <p className="text-orange-700 font-medium text-sm">
            🌺 Dive deeper to discover treasures of innovation
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <NavigationControls next="/skills" />
        </motion.div>

        {/* Action indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-orange-600 text-xs font-medium opacity-70 flex items-center gap-1">
            <span>🏊‍♂️</span>
            Explore the Depths →
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient particles */}
      <AmbientParticles />
    </div>
  );
}

export default Home;