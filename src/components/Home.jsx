import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImage from "../assets/nitin2.jpeg";
import NavigationBar from "./Navbar";
import NavigationControls from "./NavigationControls";
import LottieWrapper from "./LottieWrapper";

const bubblesAnim = "https://lottie.host/5keUeGJrDR.json";
const fishAnim = "https://lottiefiles.com/animation/fishes-8356973";
const shellAnim = "https://lottiefiles.com/animation/shell-9545412";

// Floating sand particles component
const FloatingSandParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-amber-200 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 25 - 12.5, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Coral formations component
const CoralFormation = ({ side = "left" }) => (
  <motion.div
    className={`absolute bottom-0 ${side === "left" ? "left-6" : "right-6"} h-40 w-12`}
    initial={{ scaleY: 1, opacity: 0.8 }}
    animate={{ scaleY: 1, opacity: 0.8 }}
  >
    <motion.div
      className="relative w-full h-full"
      animate={{ 
        rotateZ: [0, side === "left" ? 3 : -3, 0],
        scaleX: [1, 1.05, 1] 
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Main coral structure */}
      <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-orange-600 via-pink-500 to-red-400 rounded-t-3xl" />
      
      {/* Coral branches */}
      <motion.div
        className="absolute bottom-1/2 left-1/4 w-6 h-16 bg-gradient-to-t from-pink-600 to-orange-400 rounded-full transform -rotate-12"
        animate={{ rotateZ: [-12, -8, -12] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-2/3 right-1/4 w-5 h-12 bg-gradient-to-t from-red-500 to-pink-400 rounded-full transform rotate-15"
        animate={{ rotateZ: [15, 20, 15] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Coral polyps */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full border border-orange-300"
          style={{ 
            left: `${20 + (i * 15)}%`, 
            top: `${30 + (i * 10)}%` 
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  </motion.div>
);

// Sea anemone component
const SeaAnemone = ({ position, color = "pink" }) => {
  const colorVariants = {
    pink: "from-pink-500 to-purple-400",
    orange: "from-orange-500 to-red-400",
    yellow: "from-yellow-500 to-orange-400"
  };

  return (
    <motion.div
      className={`absolute ${position} w-16 h-20`}
      initial={{ opacity: 0.9, scale: 1 }}
      animate={{ opacity: 0.9, scale: 1 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ 
          scale: [1, 1.1, 1],
          rotateZ: [0, 5, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Anemone tentacles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bottom-0 w-2 h-12 bg-gradient-to-t ${colorVariants[color]} rounded-full opacity-80`}
            style={{
              left: `${12.5 * i}%`,
              transformOrigin: "bottom center",
              transform: `rotate(${(i - 4) * 15}deg)`,
            }}
            animate={{
              rotateZ: [(i - 4) * 15 - 10, (i - 4) * 15 + 10, (i - 4) * 15 - 10],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Anemone center */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-t from-yellow-400 to-orange-300 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 10px rgba(251, 191, 36, 0.5)",
              "0 0 20px rgba(251, 191, 36, 0.8)",
              "0 0 10px rgba(251, 191, 36, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

// Exotic fish component
const ExoticFish = ({ delay = 0, type = "tropical" }) => {
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
        x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1400,
        y: [0, -30, 25, 0],
        rotateY: [0, 10, -10, 0]
      }}
      transition={{
        duration: 18 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          filter: [
            "drop-shadow(0 0 5px currentColor)",
            "drop-shadow(0 0 15px currentColor)",
            "drop-shadow(0 0 5px currentColor)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {fish.emoji}
      </motion.div>
    </motion.div>
  );
};

// Sunlight rays through water
const SunlightRays = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-0 w-2 bg-gradient-to-b from-yellow-200 via-orange-100 to-transparent opacity-25"
        style={{
          left: `${15 + i * 12}%`,
          height: "100%",
          transformOrigin: "top",
        }}
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scaleX: [1, 1.8, 1],
          rotateZ: [0, 2, -2, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Profile image with underwater effects
const ProfileImage = () => (
  <motion.div
    className="relative mb-8"
    initial={{ opacity: 1, scale: 1, y: 0 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
  >
    <div className="relative flex items-center justify-center w-52 h-52 mx-auto my-6">
      {/* Underwater bubble glow effect */}
      ?

      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Underwater Coral Avatar"
        className="rounded-full w-full h-full object-cover border-4 border-cyan-300 shadow-lg"
      />
    </div>
    
    {/* Main profile container */}
    <motion.div
      className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-orange-300/50 shadow-2xl"
      animate={{ 
        y: [0, -8, 0],
        rotateZ: [0, 1, -1, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Placeholder profile image - replace with actual image */}
      <div className="w-full h-full bg-gradient-to-br from-orange-300 via-yellow-200 to-pink-300 flex items-center justify-center">
        <motion.div
          className="text-6xl"
          animate={{ 
            scale: [1, 1.05, 1],
            rotateZ: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          👨‍💻
        </motion.div>
      </div>
      
      {/* Water ripple effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-cyan-200/20 via-transparent to-blue-200/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>

    {/* Floating bubbles around profile */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-white/40 rounded-full"
        style={{
          left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 120}px`,
          top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 120}px`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      />
    ))}
  </motion.div>
);

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
      <ExoticFish delay={6} type="angel" />
      <ExoticFish delay={12} type="exotic" />
      <ExoticFish delay={18} type="clown" />

      {/* Enhanced Lottie Animations */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* Bubbles with coral theme */}
        <LottieWrapper 
          animationData={bubblesAnim} 
          className="bottom-0 left-10 w-32 h-32" 
        />
        <LottieWrapper 
          animationData={bubblesAnim} 
          className="bottom-10 right-12 w-24 h-24" 
        />
        <LottieWrapper 
          animationData={bubblesAnim} 
          className="top-20 left-1/3 w-20 h-20" 
        />
        
        {/* Fish animations */}
        <LottieWrapper 
          animationData={fishAnim} 
          className="top-40 left-0 w-40" 
        />
        <LottieWrapper 
          animationData={fishAnim} 
          className="top-60 right-0 w-36" 
        />
        
        {/* Treasure shell */}
        <LottieWrapper 
          animationData={shellAnim} 
          className="bottom-0 left-1/2 transform -translate-x-1/2 w-20" 
          loop={false} 
        />
      </motion.div>

      {/* Floating sea creatures */}
      <motion.div
        className="absolute top-1/4 right-20 text-4xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 8, -8, 0],
          rotateZ: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        🦀
      </motion.div>
      
      <motion.div
        className="absolute top-2/3 left-16 text-3xl"
        animate={{ 
          y: [0, -15, 0],
          x: [0, -5, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🐚
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-12 text-2xl"
        animate={{ 
          y: [0, -12, 0],
          rotateZ: [0, 15, -15, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        ⭐
      </motion.div>

      {/* Main content - Compact single view */}
      <motion.div
        className="flex flex-col items-center justify-center h-screen text-center px-4 relative z-10 -mt-12"
        initial={{ opacity: 1, y: 0, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        {/* Compact Profile Image */}
        <motion.div
          className="relative mb-4"
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          {/* Underwater bubble effect around image */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            animate={{
              boxShadow: [
                "0 0 15px 3px rgba(34, 211, 238, 0.3)",
                "0 0 25px 5px rgba(59, 130, 246, 0.4)",
                "0 0 15px 3px rgba(34, 211, 238, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Compact profile container */}
          <motion.div
            className="relative w-32 h-32 rounded-full overflow-hidden border-3 border-orange-300/50 shadow-xl"
            animate={{ 
              y: [0, -6, 0],
              rotateZ: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Profile image content */}
            <div className="w-full h-full bg-gradient-to-br from-orange-300 via-yellow-200 to-pink-300 flex items-center justify-center">
              <motion.div
                className="text-4xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotateZ: [0, 3, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                👨‍💻
              </motion.div>
            </div>
            
            {/* Water ripple effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-cyan-200/20 via-transparent to-blue-200/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Compact floating bubbles around profile */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${10 + Math.cos(i * 90 * Math.PI / 180) * 80}px`,
                top: `${10 + Math.sin(i * 90 * Math.PI / 180) * 80}px`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Compact Title */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-orange-600 drop-shadow-xl relative mb-3"
          style={{
            textShadow: "0 0 15px rgba(234, 88, 12, 0.4)",
          }}
          animate={{ 
            y: [0, -5, 0],
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
          🏝️ Welcome to Coral Depths
        </motion.h1>

        {/* Compact Subtitle */}
        <motion.p
          className="text-sm md:text-base text-orange-800 max-w-xl relative leading-snug mb-4"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I'm{" "}
          <motion.span 
            className="text-red-600 font-bold relative inline-block px-1 py-0.5 rounded bg-yellow-200/50"
            animate={{ 
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 8px rgba(220, 38, 38, 0.3)",
                "0 0 15px rgba(220, 38, 38, 0.5)",
                "0 0 8px rgba(220, 38, 38, 0.3)"
              ]
            }}
            transition={{ 
              duration: 3, 
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

        {/* Compact Call to action */}
        <motion.div
          className="mb-4 p-3 bg-gradient-to-r from-orange-200/60 to-yellow-200/60 backdrop-blur-sm rounded-xl border border-orange-300/40"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-orange-700 font-medium text-sm">
            🌺 Dive deeper to discover treasures of innovation
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <NavigationControls next="/skills" />
        </motion.div>

        {/* Compact action indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-orange-600 text-xs font-medium opacity-70 flex items-center gap-1">
            <span>🏊‍♂️</span>
            Explore the Depths →
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute w-1 h-1 bg-orange-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;