import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavigationControls({ next, prev }) {
  const navigate = useNavigate();
  
  return (
    <div className="mt-6 flex justify-center items-center gap-12 px-4 relative">
      {/* Decorative coral on left */}
      <motion.div
        className="absolute left-2 bottom-0 w-6 h-24 opacity-50"
        animate={{ 
          rotateZ: [0, 6, -4, 0],
          scaleX: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-gradient-to-t from-orange-600 via-pink-400 to-red-400 rounded-t-full opacity-60" />
        {/* Coral branches */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-6 bg-gradient-to-t from-red-500 to-pink-400 rounded-full"
            style={{ 
              left: `${i % 2 === 0 ? '-15%' : '110%'}`,
              top: `${25 + i * 15}%`,
              transformOrigin: 'bottom center'
            }}
            animate={{
              rotateZ: [0, i % 2 === 0 ? -12 : 12, 0],
              scaleY: [1, 1.15, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Decorative anemone on right */}
      <motion.div
        className="absolute right-2 bottom-0 w-6 h-20 opacity-50"
        animate={{ 
          rotateZ: [0, -4, 3, 0],
          scaleX: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1.5 h-12 bg-gradient-to-t from-yellow-500 to-orange-400 rounded-full"
            style={{ 
              left: `${i * 20}%`,
              transformOrigin: 'bottom center',
              transform: `rotate(${(i - 2) * 12}deg)`
            }}
            animate={{
              rotateZ: [(i - 2) * 12 - 8, (i - 2) * 12 + 8, (i - 2) * 12 - 8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </motion.div>

      {/* Previous Button - Hexagonal Treasure Chest */}
      {prev && (
        <motion.div className="relative">
          {/* Button glow aura */}
          <motion.div
            className="absolute inset-0 blur-lg opacity-30"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }}
            animate={{
              background: [
                "radial-gradient(circle, rgba(234, 88, 12, 0.4) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(234, 88, 12, 0.4) 0%, transparent 70%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.button 
            onClick={() => navigate(prev)} 
            className="relative group bg-gradient-to-br from-orange-400/40 via-amber-500/30 to-yellow-500/35 backdrop-blur-lg px-6 py-3 border-2 border-orange-300/50 hover:border-orange-200/80 transition-all duration-400 flex items-center gap-3 min-w-[140px] justify-center shadow-xl"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 25px rgba(234, 88, 12, 0.3), 0 4px 12px rgba(251, 146, 60, 0.2)",
              rotateY: 3
            }}
            whileTap={{ 
              scale: 0.95,
              rotateY: -2
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Treasure chest decoration */}
            <motion.div
              className="absolute -left-1 -top-0.5 w-4 h-5"
              animate={{ 
                rotateZ: [0, 8, -4, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-700 rounded-sm border border-amber-500/60" />
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-300 rounded-full" />
            </motion.div>

            {/* Compass icon with glow */}
            <motion.div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full blur-sm"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, transparent 60%)",
                    "radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, transparent 60%)",
                    "radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, transparent 60%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span 
                className="text-2xl relative z-10 drop-shadow-lg"
                animate={{ 
                  rotateZ: [0, 360],
                  scale: [1, 1.1, 1],
                  filter: [
                    "drop-shadow(0 0 6px rgba(251, 191, 36, 0.8))",
                    "drop-shadow(0 0 12px rgba(245, 158, 11, 1))",
                    "drop-shadow(0 0 6px rgba(251, 191, 36, 0.8))"
                  ]
                }}
                transition={{ 
                  rotateZ: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                  filter: { duration: 2, repeat: Infinity }
                }}
              >
                🧭
              </motion.span>
            </motion.div>
            
            <motion.span 
              className="text-orange-50 font-semibold text-sm tracking-wide drop-shadow-md"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
            >
              Previous
            </motion.span>
            
            {/* Enhanced glowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-300/15 via-amber-300/10 to-yellow-300/15 opacity-0 group-hover:opacity-100"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating gold particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-yellow-300/80 rounded-full opacity-0 group-hover:opacity-70"
                style={{
                  left: `${-8 + i * 4}px`,
                  top: `${-3 + Math.sin(i) * 6}px`
                }}
                animate={{
                  y: [0, -12 - i * 2, 0],
                  x: [0, -6 + i * 1.5, 0],
                  scale: [0.4, 1, 0.4],
                  opacity: [0, 0.7, 0]
                }}
                transition={{ 
                  duration: 1.5 + i * 0.2, 
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              />
            ))}

            {/* Ancient coin accent */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-0 group-hover:opacity-80 shadow-md border border-yellow-200/60"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      )}

      {/* Enhanced Center Separator with Underwater Treasure Scene */}
      <motion.div 
        className="flex flex-col items-center gap-1.5 relative"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Top decorative line with sparkles */}
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-8 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`sparkle-top-${i}`}
              className="w-1 h-1 bg-yellow-300/70 rounded-full"
              animate={{
                y: [0, -6, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.3, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
          <motion.div
            className="w-8 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Central island with palm tree */}
        <motion.div className="relative">
          {/* Island base */}
          <motion.div
            className="w-6 h-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full border border-orange-400/50 relative"
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 8px rgba(245, 158, 11, 0.4)",
                "0 0 15px rgba(245, 158, 11, 0.6)",
                "0 0 8px rgba(245, 158, 11, 0.4)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Palm tree */}
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
              animate={{ 
                rotateZ: [0, 8, -8, 0],
                y: [0, -1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-lg drop-shadow-md">🌴</span>
            </motion.div>
          </motion.div>

          {/* Floating treasure map above */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
            animate={{ 
              rotateZ: [0, 10, -5, 0],
              y: [0, -2, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="text-xs drop-shadow-lg">🗺️</span>
          </motion.div>
        </motion.div>

        {/* Bottom decorative line */}
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-8 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`sparkle-bottom-${i}`}
              className="w-0.5 h-0.5 bg-pink-400/60 rounded-full"
              animate={{
                y: [0, 4, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 1 + i * 0.15
              }}
            />
          ))}
          <motion.div
            className="w-8 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>

      {/* Next Button - Diamond Crystal Shape */}
      {next && (
        <motion.div className="relative">
          {/* Button glow aura */}
          <motion.div
            className="absolute inset-0 blur-lg opacity-30"
            style={{
              clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 80% 90%, 50% 100%, 20% 90%, 0% 35%, 20% 10%)"
            }}
            animate={{
              background: [
                "radial-gradient(circle, rgba(219, 39, 119, 0.4) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(219, 39, 119, 0.4) 0%, transparent 70%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.button 
            onClick={() => navigate(next)} 
            className="relative group bg-gradient-to-br from-pink-400/40 via-rose-500/30 to-orange-500/35 backdrop-blur-lg px-6 py-3 border-2 border-pink-300/50 hover:border-pink-200/80 transition-all duration-400 flex items-center gap-3 min-w-[140px] justify-center shadow-xl"
            style={{
              clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 80% 90%, 50% 100%, 20% 90%, 0% 35%, 20% 10%)"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 25px rgba(219, 39, 119, 0.3), 0 4px 12px rgba(236, 72, 153, 0.2)",
              rotateY: -3
            }}
            whileTap={{ 
              scale: 0.95,
              rotateY: 2
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Crystal formation decoration */}
            <motion.div
              className="absolute -right-1 -top-0.5 w-4 h-5"
              animate={{ 
                scale: [1, 1.12, 1],
                rotateZ: [0, -6, 2, 0]
              }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              {/* Crystal shards */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 w-1 h-4 bg-gradient-to-t from-purple-500 to-pink-300 opacity-70"
                  style={{
                    left: `${i * 30}%`,
                    transformOrigin: "bottom center",
                    transform: `rotate(${(i - 1) * 12}deg)`,
                  }}
                  animate={{
                    rotateZ: [(i - 1) * 12 - 6, (i - 1) * 12 + 6, (i - 1) * 12 - 6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
            
            <motion.span 
              className="text-orange-50 font-semibold text-sm tracking-wide drop-shadow-md"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
            >
              Next
            </motion.span>

            {/* Gem with rainbow glow */}
            <motion.div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full blur-sm"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 60%)",
                    "radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 60%)",
                    "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 60%)"
                  ]
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <motion.span 
                className="text-2xl relative z-10 drop-shadow-lg"
                animate={{ 
                  x: [0, 3, -3, 0],
                  y: [0, -1.5, 1.5, 0],
                  scale: [1, 1.08, 1],
                  filter: [
                    "drop-shadow(0 0 6px rgba(168, 85, 247, 0.8))",
                    "drop-shadow(0 0 12px rgba(236, 72, 153, 1))",
                    "drop-shadow(0 0 6px rgba(168, 85, 247, 0.8))"
                  ]
                }}
                transition={{ 
                  x: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity },
                  filter: { duration: 2.2, repeat: Infinity }
                }}
              >
                💎
              </motion.span>
            </motion.div>
            
            {/* Enhanced glowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-300/15 via-rose-300/10 to-orange-300/15 opacity-0 group-hover:opacity-100"
              style={{
                clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 80% 90%, 50% 100%, 20% 90%, 0% 35%, 20% 10%)"
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Magical sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute bg-pink-200/70 rounded-full opacity-0 group-hover:opacity-60`}
                style={{
                  width: `${6 + i}px`,
                  height: `${6 + i}px`,
                  right: `${-4 + i * 6}px`,
                  top: `${-1 + Math.cos(i) * 8}px`
                }}
                animate={{
                  x: [0, 12 + i * 2, 0],
                  y: [0, -6 + Math.sin(i) * 4, 0],
                  scale: [0.2, 1, 0.2],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 1.6 + i * 0.15, 
                  repeat: Infinity,
                  delay: i * 0.12
                }}
              />
            ))}

            {/* Ruby accent */}
            <motion.div
              className="absolute -bottom-1.5 -right-1.5 opacity-0 group-hover:opacity-70"
              animate={{
                rotate: [0, 360],
                scale: [0.7, 1, 0.7]
              }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.2, repeat: Infinity }
              }}
            >
              <span className="text-sm drop-shadow-md">💍</span>
            </motion.div>
          </motion.button>
        </motion.div>
      )}

      {/* Additional floating sea creatures */}
      <motion.div
        className="absolute -top-8 left-1/4 text-lg opacity-50"
        animate={{
          y: [0, -8, 0],
          x: [0, 4, -4, 0],
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🦀
      </motion.div>

      <motion.div
        className="absolute -top-6 right-1/4 text-base opacity-50"
        animate={{
          y: [0, -6, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🌺
      </motion.div>
    </div>
  );
}

export default NavigationControls;