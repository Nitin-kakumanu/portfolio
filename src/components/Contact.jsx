import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationControls from "../components/NavigationControls";
import NavigationBar from "./Navbar";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Star } from "lucide-react";

// Floating coral particles - matching certificates page
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

// Sunlight rays through water - enhanced from certificates
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

// Swimming messenger fish carrying contact methods
const MessengerFish = ({ delay = 0, contactType = "email" }) => {
  const fishTypes = {
    email: { emoji: "🐠", color: "text-blue-400", badge: "📧", trail: "💌" },
    phone: { emoji: "🐡", color: "text-green-400", badge: "📱", trail: "📞" },
    location: { emoji: "🦑", color: "text-purple-400", badge: "📍", trail: "🗺️" },
    social: { emoji: "🐟", color: "text-cyan-400", badge: "💼", trail: "🌐" },
    availability: { emoji: "🐋", color: "text-orange-400", badge: "🟢", trail: "⏰" }
  };

  const fish = fishTypes[contactType];

  return (
    <motion.div
      className="absolute -left-20"
      style={{ top: `${10 + Math.random() * 60}%` }}
      initial={{ x: -150, y: 0 }}
      animate={{ 
        x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1400,
        y: [0, -8, 5, 0],
        rotateY: [0, 5, -5, 0]
      }}
      transition={{
        duration: 15 + Math.random() * 5,
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
          {/* Message trail */}
          <motion.span
            className="absolute -left-8 top-1/2 text-sm opacity-70"
            animate={{
              x: [0, -5, 0],
              opacity: [0.7, 0.3, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {fish.trail}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Contact coral formations
const ContactCoral = ({ side, contactMethods }) => (
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
      
      {/* Contact method polyps */}
      {contactMethods.slice(0, 2).map((method, i) => (
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
          <method.icon className="w-2 h-2 text-orange-800" />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

// Message bottles floating around
const MessageBottles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      className="absolute text-2xl"
      style={{ left: "15%", top: "25%" }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      💌
    </motion.div>
    <motion.div
      className="absolute text-2xl"
      style={{ left: "75%", top: "35%" }}
      animate={{
        y: [0, -40, 0],
        rotate: [0, -10, 10, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: 2,
        ease: "easeInOut",
      }}
    >
      📜
    </motion.div>
    <motion.div
      className="absolute text-xl"
      style={{ left: "85%", top: "60%" }}
      animate={{
        y: [0, -25, 0],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        delay: 4,
        ease: "easeInOut",
      }}
    >
      🗨️
    </motion.div>
  </div>
);

// Treasure chest for contact achievements
const ContactTreasure = ({ position, icon, label }) => (
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
      {icon}
      {label && (
        <motion.span
          className="absolute -top-1 -right-2 text-xs bg-blue-500 text-white px-1 rounded-full font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  </motion.div>
);

// Enhanced Contact Card
const ContactCard = ({ icon, title, info, delay, contactType }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const cardTypes = {
    email: { 
      gradient: "from-blue-400 to-cyan-500", 
      glow: "rgba(59, 130, 246, 0.4)", 
      theme: "💌",
      IconComponent: Mail
    },
    phone: { 
      gradient: "from-green-400 to-emerald-500", 
      glow: "rgba(34, 197, 94, 0.4)", 
      theme: "📞",
      IconComponent: Phone
    },
    location: { 
      gradient: "from-purple-400 to-violet-500", 
      glow: "rgba(147, 51, 234, 0.4)", 
      theme: "🗺️",
      IconComponent: MapPin
    },
    social: { 
      gradient: "from-cyan-400 to-sky-500", 
      glow: "rgba(34, 211, 238, 0.4)", 
      theme: "🌐",
      IconComponent: User
    }
  };

  const cardType = cardTypes[contactType] || cardTypes.email;

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
        className="relative p-4 bg-gradient-to-br from-orange-50/90 to-yellow-50/90 backdrop-blur-lg border-2 border-orange-200/60 rounded-xl shadow-lg cursor-pointer overflow-hidden min-h-[120px]"
        whileHover={{ 
          scale: 1.03,
          boxShadow: `0 8px 20px ${cardType.glow}`,
          borderColor: "rgba(251, 146, 60, 0.7)",
          rotateY: 1
        }}
        animate={{
          y: [0, -0.5, 0],
          boxShadow: isHovered 
            ? `0 6px 15px ${cardType.glow}` 
            : "0 3px 10px rgba(251, 146, 60, 0.2)"
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 0.3 }
        }}
      >
        {/* Card ribbon */}
        <motion.div
          className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${cardType.gradient} opacity-0 rounded-bl-xl`}
          animate={{ opacity: isHovered ? 0.12 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating theme badge */}
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
          <span className="text-xs">{cardType.theme}</span>
        </motion.div>

        {/* Contact content */}
        <div className="relative z-10 h-full flex flex-col text-center">
          {/* Header with icon */}
          <motion.div
            className="flex flex-col items-center mb-3"
            animate={{ 
              y: isHovered ? -0.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-10 h-10 mb-2 bg-gradient-to-br ${cardType.gradient} rounded-xl flex items-center justify-center shadow-lg border border-white/30`}>
              <cardType.IconComponent className="w-5 h-5 text-white drop-shadow-sm" />
            </div>
            
            <motion.h3
              className="text-sm font-bold text-orange-800 leading-tight"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: (delay / 1000) + 0.2 }}
            >
              {title}
            </motion.h3>
          </motion.div>

          {/* Contact info */}
          <motion.p
            className="text-xs text-orange-700 leading-snug flex-1 px-1 break-all"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: (delay / 1000) + 0.3 }}
          >
            {info}
          </motion.p>

          {/* Footer stars */}
          <motion.div
            className="flex items-center justify-center gap-0.5 mt-2"
            animate={{
              scale: [1, 1.03, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            {[...Array(3)].map((_, i) => (
              <Star 
                key={i} 
                className="w-2 h-2 text-yellow-500 fill-current" 
              />
            ))}
          </motion.div>
        </div>

        {/* Underwater glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            background: [
              "radial-gradient(circle at 50% 70%, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0) 100%)",
              "radial-gradient(circle at 50% 70%, rgba(34, 211, 238, 0.04) 15%, rgba(34, 211, 238, 0) 50%)",
              "radial-gradient(circle at 50% 70%, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0) 100%)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

// Social link buttons
const SocialLinks = () => {
  const socials = [
    { icon: "💼", name: "LinkedIn", url: "#", gradient: "from-blue-500 to-blue-600" },
    { icon: "🐙", name: "GitHub", url: "#", gradient: "from-gray-700 to-gray-800" },
  ];

  return (
    <div className="flex gap-3 justify-center">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${social.gradient} text-white rounded-xl shadow-lg text-sm font-medium border border-white/20`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + (index * 0.1), duration: 0.5 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{social.icon}</span>
          <span>{social.name}</span>
        </motion.a>
      ))}
    </div>
  );
};

function Contact() {
  const [showContent, setShowContent] = useState(false);

  const contactMethods = [
    { icon: Mail, type: "email" },
    { icon: Phone, type: "phone" },
    { icon: MapPin, type: "location" },
    { icon: User, type: "social" }
  ];

  const leftCoralMethods = contactMethods.slice(0, 2);
  const rightCoralMethods = contactMethods.slice(2, 4);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-200 text-gray-800 overflow-hidden relative h-screen flex flex-col">
      {/* Underwater environment effects */}
      <SunlightRays />
      <FloatingCoralParticles />
      <MessageBottles />
      
      {/* Navigation */}
      <NavigationBar />

      {/* Contact coral formations */}
      <ContactCoral side="left" contactMethods={leftCoralMethods} />
      <ContactCoral side="right" contactMethods={rightCoralMethods} />

      {/* Swimming messenger fish */}
      <MessengerFish delay={0} contactType="email" />
      <MessengerFish delay={3} contactType="phone" />
      <MessengerFish delay={6} contactType="location" />
      <MessengerFish delay={9} contactType="social" />
      <MessengerFish delay={12} contactType="availability" />

      {/* Contact treasure chests */}
      <ContactTreasure position="top-16 right-8" icon="📬" label="24h" />
      <ContactTreasure position="top-20 left-4" icon="🌐" />
      <ContactTreasure position="top-24 right-2" icon="💬" />

      {showContent && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-4 relative z-20">
          {/* Header */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile bubble */}
            <motion.div
              className="relative mb-3 w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-300 to-yellow-200 flex items-center justify-center border-2 border-orange-300/50 shadow-lg"
              animate={{ 
                y: [0, -2, 0],
                boxShadow: [
                  "0 4px 15px rgba(251, 146, 60, 0.3)",
                  "0 8px 25px rgba(251, 146, 60, 0.4)",
                  "0 4px 15px rgba(251, 146, 60, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-2xl">👋</div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h1
              className="text-xl font-bold text-orange-600 drop-shadow-xl mb-2"
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
              🌊 Let's Connect!
            </motion.h1>
            <motion.p
              className="text-sm text-orange-700 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Send me a message through the coral reef network
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-2 gap-3 max-w-2xl w-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <ContactCard
              icon="📧"
              title="Email"
              info="nitinkakumanu04@gmail.com"
              delay={1200}
              contactType="email"
            />
            <ContactCard
              icon="📱"
              title="Phone"
              info="+91 9392014754"
              delay={1400}
              contactType="phone"
            />
          </motion.div>

          {/* Social Links */}
          <div className="mb-4">
            <SocialLinks />
          </div>

          {/* Availability Status */}
          <motion.div
            className="flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-100/80 to-emerald-100/80 backdrop-blur-sm rounded-xl border border-green-200 shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full border border-green-300"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0px rgba(34, 197, 94, 0.5)",
                  "0 0 8px rgba(34, 197, 94, 0.7)",
                  "0 0 0px rgba(34, 197, 94, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-green-800">Available for opportunities</span>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <NavigationControls prev="/certificates" />
          </motion.div>

          {/* Floating instruction */}
          <motion.div
            className="text-center mt-2"
            animate={{ y: [0, -2, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 3 }}
            initial={{ opacity: 0 }}
          >
            <div className="text-orange-600 text-xs font-medium flex items-center gap-2 justify-center">
              <span>🐠</span>
              Hover cards to see the underwater glow effect
            </div>
          </motion.div>
        </div>
      )}

      {/* Ambient message particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`msg-particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
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

export default Contact;